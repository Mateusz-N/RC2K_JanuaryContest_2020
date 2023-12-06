class Website{
    constructor(){
        this.contests = [];
        this.users = [];
        this.game = new Game();
    }
    GetUserIDByName(name){
        function checkName(user){
            if(user.name == name)
                return true;
            return false;
        }
        return this.users.findIndex(checkName);
    }
    GetUserByName(name){
        return this.users[this.GetUserIDByName(name)];
    }
}

class Game{
    constructor(){
        this.rallies = [];
    }
    AddRally(rally){
        rally.id = this.rallies.length;
        this.rallies.push(rally);
    }
}

class User{
    constructor(name, country = ""){
        this.name = name;
        this.country = country;
    }
    static fromData(userData) {
        return new User(userData.name, userData.country);
    }
}

class Participant{
    constructor(num, user, color, car){
        this.num = num
        this.user = user
        this.color = color
        this.car = car
        this.groupNumber = null
        switch(car) {
            case "Mitsubishi Lancer Evo V":
                this.wcbFactor = 1.05;
                break;
            case "Peugeot 206 WRC":
                this.wcbFactor = 1.04;
                break;
            case "Subaru Impreza WRC":
                this.wcbFactor = 1.03;
                break;
            case "Mitsubishi Lancer Evo IV":
                this.wcbFactor = 1.02;
                break;
            case "Seat Cordoba WRC":
                this.wcbFactor = 1.01;
                break;
            default:
                this.wcbFactor = 1.00;
        }
    }
    static fromData(participantData) {
        const participant = new Participant(participantData.num, User.fromData(participantData.user), participantData.color, participantData.car)
        participant.groupNumber = participantData.groupNumber
        return participant
    }
    setGroup(group) {
        this.groupNumber = group.number;
    }
}

class Group{
    constructor(number){
        this.number = number
        this.participants = []
        this.name = this.getName()
    }
    getName(){
        return `G${this.number}`
    }
    addParticipant(participant){
        participant.setGroup(this);
        this.participants.push(participant)
    }
    addParticipants(participants){
        participants.forEach(participant => this.addParticipant(participant))
    }
    getPointAdvantage(otherGroup){
        return Math.max(0, this.number - otherGroup.number)
    }
}

class Contest{
    constructor(name){
        this.name = name
        this.participants = []
        this.rallies = []
        this.groups = []
        this.schedule = []
    }
    updateRecords(records) {
        this.rallies = [];
        records.forEach(rally => {
            this.AddRally(Rally.fromData(rally));
        });
    }
    AddRally(rally){
        rally.id = this.rallies.length;
        this.rallies.push(rally);
    }
    getGroupByNumber(groupNumber) {
        return this.groups.find(group => group.number === groupNumber);
    }
    getParticipantIDByName(name){
        function checkName(participant){
            if(participant.user.name == name)
                return true
            return false
        }
        return this.participants.findIndex(checkName)
    }
    getParticipantByName(name){
        return this.participants[this.getParticipantIDByName(name)]
    }
    getStageByID(id){
        for(const rally of this.rallies) {
            for(const stage of rally.stages) {
                if(stage.id === id) {
                    return stage;
                }
            }
        }
    }
    getStageByName(name){
        for(const rally of this.rallies) {
            for(const stage of rally.stages) {
                if(stage.name === name) {
                    return stage;
                }
            }
        }
    }
    getRallyByStageName(name){
        for(const rally of this.rallies) {
            for(const stage of rally.stages) {
                if(stage.name === name) {
                    return rally;
                }
            }
        }
    }
    getFinalSummary(stagesToOmit = []){
        // if(typeof this.summaryRally !== "undefined"){
        //     return this.summaryRally
        // }
        this.summaryRally = new Rally("Final")
        for(let i = 0; i< this.rallies.length; i++){
            let rally = this.rallies[i];
            let summaryRally_stage = rally.getSummary("centiseconds", stagesToOmit)  // Stage object
            this.summaryRally.stages.push(summaryRally_stage)
        }
        this.summaryRally.id = 6
        return this.summaryRally
    }
    getSchedule(){
        return this.schedule;
    }
    setSchedule(schedule){
        this.schedule = schedule;
    }
    getCurrentLeg() {
        /* Return last leg if the contest has finished */
        // const currentDate = new Date();
        // const lastLeg = contest.schedule[contest.schedule.length - 1];
        // if(currentDate > lastLeg.date) {
        //     return lastLeg;
        // }
        // else {
            // return contest.schedule.find(leg => {
            //     return isSameDay(leg.date, new Date());
            // });
            const startedLegs = contest.schedule.filter(leg => {
                return leg.date <= new Date();
            })
            return startedLegs[startedLegs.length - 1];
        // }
    }
    getLegOfStage(stage) {
        return contest.schedule.find(leg => {
            return leg.stages.includes(Math.round(stage.id) !== stage.id ? contest.getStageByID(stage.id - 0.5).name : stage.name);
        });
    }
    async getResultsFromFirebase() {
        // Get docs (Firebase NoSQL data)
        const stages = this.rallies.flatMap(rally => rally.stages)
        await Promise.all(stages.map(async stage => {
            const stageCollection = await firestore.collection(stage.name).get()
            await Promise.all(stageCollection.docs.map(async participantDoc => {
                const participant = this.getParticipantByName(participantDoc.id)
                const participantData = participantDoc.data()
                let time, penalty;
                if(participantData.dnf) {
                    time = "DNF";
                }
                else if(participantData.dsq) {
                    time = "DSQ";
                }
                else {
                    time = new Time(participantData.time_cs).formattedTime;
                }
                penalty = participantData.penalty_cs;
                const record = stage.AddRecord(participant, time, penalty, "No");
                if(participantData.yt_link) {
                    record.proofs.add("youtube", participantData.yt_link);
                }
                if(participantData.twitch_link) {
                    record.proofs.add("twitch", participantData.twitch_link);
                }
                const basePathRef = stage.name + "/" + participant.user.name;
                const folderRefAndProofTypes = [
                    {folderRef: firebaseStorage.ref(basePathRef + "/replay"), proofType: "replay"},
                    {folderRef: firebaseStorage.ref(basePathRef + "/serviceArea"), proofType: "image"},
                    {folderRef: firebaseStorage.ref(basePathRef + "/time"), proofType: "image"},
                ]
                await Promise.all(folderRefAndProofTypes.map(async fileRefAndProofType => {
                    const { folderRef, proofType } = fileRefAndProofType
                    const fileList = await folderRef.listAll()
                    await Promise.all(fileList.items.map(async file => {
                        const downloadLink = await file.getDownloadURL()
                        record.proofs.add(proofType, downloadLink)
                    }))
                }))
            }))
        }))
        return this.rallies
    };
    finish(stagesToOmit = []){
        this.rallies.forEach(rally => rally.finish())
        this.getFinalSummary(stagesToOmit).finish(6)
    }
}

class Rally{
    constructor(name, id){
        this.id = id;
        this.name = name
        this.stages = []
    }
    static fromData(rallyData) {
        const rally = new Rally(rallyData.name, rallyData.id);
        rally.stages = rallyData.stages.map(stage => {
            return Stage.fromData(stage);
        });
        rally.finish()
        return rally;
    }
    getSummary(sortBy = "centiseconds", stagesToOmit = []){
        if(typeof this.summary !== "undefined" && stagesToOmit.length === 0){
            return this.summary
        }
        this.summary = new Stage(this.name + " Summary");
        this.summary.id = this.stages[this.stages.length - 1].id + 0.5
        this.summary.imageURL = "../../resources/rally" + this.id + ".PNG";
        const stageRecordsByParticipant = {}
        this.stages.forEach(stage => {
            if(!stagesToOmit.includes(stage.name)) {
                stage.records.forEach(record => {
                    const participantName = record.participant.user.name
                    if(!(participantName in stageRecordsByParticipant)){
                        stageRecordsByParticipant[participantName] = []
                    }
                    stageRecordsByParticipant[participantName].push(record)
                })
            }
        })
        this.summary.records = []
        for(const participantName in stageRecordsByParticipant){
            const stageRecords = stageRecordsByParticipant[participantName]
            const rallyRecord = this.id === 6
                ? ContestRecord.fromRallyRecords(stageRecords)
                : RallyRecord.fromStageRecords(stageRecords)
            this.summary.records.push(rallyRecord)
        }
        this.summary.wr.arcade = [this.wr.arcade]
        this.summary.wr.simulation = [this.wr.simulation]
        if(this.id !== 6){
            RallyRecord.assignPoints(this.summary.records, this.id)
        }
        RallyRecord.assignRanks(this.summary.records)
        ContestRecord.sortBy(this.summary.records, sortBy);
        return this.summary;
    }
    getWorldRecords(){
        if(typeof this.wr !== "undefined"){
            return this.wr
        }
        this.wr = {}
        const directions = ["arcade", "simulation"]
        directions.forEach(direction => {
            const recordTime = this.stages.map(stage => {
                stage.sortWorldRecords()
                return stage.wr[direction][0].finalTime  //If some wr for one stage misses, raise exception
            }).reduce((acc, time) => acc.add(time), new Time(0))
            this.wr[direction] = new WorldRecord(new User("RecordHolder", "unknown"), recordTime, direction, "Mitsubishi Lancer Evo V")
        })
        return this.wr
    }
    finish(finalLevel = 0){
        this.stages.forEach(stage => stage.finish(finalLevel))
        this.getWorldRecords()
        this.getSummary()
    }
}

class Stage{
    constructor(name, id){
        this.id = id;
        this.name = name;
        this.records = []
        this.imageURL = undefined;
        this.wr = {
            arcade: [],
            simulation: []
        };
    }
    static fromData(stageData) {
        const stage = new Stage(stageData.name, stageData.id);
        stage.records = stageData.records.map(record => {
            return Record.fromData(record);
        });
        stage.imageUrl = stageData.imageUrl;
        stage.wr.arcade = stageData.wr.arcade.map(wr => {
            return WorldRecord.fromData(wr);
        });
        stage.wr.simulation = stageData.wr.simulation.map(wr => {
            return WorldRecord.fromData(wr);
        });
        stage.finish();
        return stage;
        // rally.getSummary()
    }
    AddRecord(participant, time, penalty, verified){
        let newRecord = Record.fromUserInput(participant,time,penalty,verified)
        this.records.push(newRecord)
        return newRecord;
    }
    AddArcadeWorldRecord(user, time, carName = "Mitsubishi Lancer Evo V"){
        let record = WorldRecord.fromUserInput(user, time, "arcade", carName)
        this.wr["arcade"].push(record);
        return record;
    }
    AddSimulationWorldRecord(user, time, carName = "Mitsubishi Lancer Evo V"){
        let record = WorldRecord.fromUserInput(user, time, "simulation", carName)
        this.wr["simulation"].push(record);
        return record;
    }
    sortWorldRecords(){
        const directions = Object.keys(this.wr)
        directions.forEach(direction => {
            this.wr[direction] = Record.sortByFinalTime(this.wr[direction])
        })
    }
    CreateContestEntireStageTable(div, finalLevel){ //finalLevel 0: Normal Stages, 1: RallySummaries, 2:Rally Summaries on their page, 3: Final Contest Summary
        const baseDiv = this.CreateStageTable(div)
        const stageTablesDiv = document.createElement('div')
        stageTablesDiv.className = "divStageTables"
        let order = finalLevel === 0 ? "finalTime" : "points";
        ContestRecord.sortBy(this.records, order);
        this.CreateContestStageTable(stageTablesDiv, finalLevel);
        baseDiv.appendChild(stageTablesDiv)
    }
    CreateWorldRecordEntireStageTable(div, direction){
        Record.assignStageRanks(this.wr["arcade"])
        Record.assignStageRanks(this.wr["simulation"])
        this.CreateWorldRecordStageTable(this.CreateStageTable(div), direction);
    }
    CreateStageTable(div){  //div = space for the table
        let divStage = document.createElement('div')
        divStage.className = "divStage"
        let divTitleImage = document.createElement('div')
        divTitleImage.className = "divTitleImage"

        let newTitle = document.createElement('h4')
        newTitle.innerHTML = this.name
        newTitle.className = "stageName"
        divTitleImage.appendChild(newTitle)

        let newImage = document.createElement("img")
        newImage.src = this.getImageUrl();
        newImage.className = "mapImage"
        divTitleImage.appendChild(newImage)
        
        divStage.appendChild(divTitleImage)

        div.appendChild(divStage)

        return divStage   //returning 
    }

    /* Standings tables */
    CreateContestStageTable(divStage, finalLevel){
        let newTable = document.createElement('table')
        newTable.setAttribute("class", "table")
        let string_lastColumn = finalLevel==0 ? "Gap to Leader":"Points"
        let weakerCarBonusColumn = finalLevel==0 ? ``:`<th>Time (WCB-adjusted)</th>`
        let proofColumn = finalLevel==0?`<th scope="col">Proofs</th>`:``
        newTable.innerHTML = 
            `<thead class="thead-dark">
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">#</th>
                    <th scope="col">Driver</th>
                    <th scope="col">NAT</th>
                    <th scope="col">Group</th>
                    <th scope="col">Time</th>
                    ${weakerCarBonusColumn}
                    <th scope="col">${string_lastColumn}</th>
                    ${proofColumn}
                </tr>
            </thead>`
        let newTableBody = document.createElement('tbody');
        newTable.appendChild(newTableBody);

        // if (this.records.length === 0) { // Fills empty tables with a "Check back later" message.
        const currentLeg = contest.getCurrentLeg();
        const legOfThisStage = contest.getLegOfStage(this)
        if(finalLevel === 0 && legOfThisStage.date >= currentLeg.date || finalLevel !== 0 && this.records.length === 0) { // If this leg hasn't finished yet, don't display the results
            newTable.innerHTML+=`<tr id="emptyFinalTable"><td style="color: gray;" colspan="100%" rowspan="2" >The results aren't complete yet. Please check back later.</td></tr>`;
        }
        else {
            let records = this.records;
            for(let j = 0; j < records.length; j++)
            {
                let record = records[j]
                let flagImg = `<img src="../../resources/flags/${record.participant.user.country}.png" style="height: 20px; min-width: 32px; border: 1px solid #CCC;"/ >`;
                let value_lastColumn;
                let proofRow;
                let finalTimeToDisplay = record.status.didFinish ? record.finalTime.formattedTime : record.status.value;
                let finalTimeRow_wcbAdjusted;
                // Single stage
                if(finalLevel === 0) {
                    value_lastColumn = record.gaps.toElement();
                    proofRow = `<td>${record.proofs.toElement()}</td>`;
                    finalTimeRow_wcbAdjusted = ``;
                }
                // Whole rally or contest
                else {
                    value_lastColumn = record.points.toElement();
                    proofRow = ``;
                    // Contest
                    if(finalLevel === 3) {
                        finalTimeToDisplay = `${record.finalTime.formattedTime} ${RecordStatus.getNotFinishedStatusesString(record.rallyStatuses)}`;
                        finalTimeRow_wcbAdjusted = `<td>${record.finalTime_wcbAdjusted.formattedTime} ${RecordStatus.getNotFinishedStatusesString(record.rallyStatuses)}</td>`;
                    }
                    // Rally
                    else {
                        finalTimeRow_wcbAdjusted = `<td>${record.status.didFinish ? record.finalTime_wcbAdjusted.formattedTime : record.status.value}</td>`;
                    }
                }
                let tr = newTableBody.insertRow();
                let th = document.createElement("th");
                th.appendChild(document.createTextNode(record.rank));
                th.setAttribute('scope', 'row');
                tr.appendChild(th);
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(record.participant.num));
                td = tr.insertCell();
                td.appendChild(document.createTextNode(record.participant.user.name));
                td = tr.insertCell();
                td.innerHTML = flagImg;
                td = tr.insertCell();
                td.appendChild(document.createTextNode(contest.getGroupByNumber(record.participant.groupNumber).name));
                td = tr.insertCell();
                td.appendChild(document.createTextNode(finalTimeToDisplay));
                tr.innerHTML += finalTimeRow_wcbAdjusted;
                td = tr.insertCell();
                td.innerHTML += value_lastColumn;
                tr.innerHTML += proofRow;
            }
        }
        
        divStage.appendChild(newTable);
    }
    CreateWorldRecordStageTable(divStage, direction){
        let newTable = document.createElement('table');
        newTable.setAttribute("class", "table");
        newTable.innerHTML = 
            `<thead class="thead-dark">
                <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Time</th>
                    <th scope="col">Car</th>
                    <th scope="col">Proofs</th>
                </tr>
            </thead>
            <tbody>`
        let records = this.wr[direction];
        for(let j = 0; j< records.length; j++)
        {
            let flagImg = `<img src="../../resources/flags/${records[j].participant.user.country}.png" style="height: 20px; min-width: 32px; border: 1px solid #CCC;"></img>`;
            
            newTable.innerHTML+= 
            `
            <tr>
                <th scope="row">`+records[j].rank+`</th>
                <td>${flagImg} `+ records[j].participant.user.name +` ${flagImg}</td>
                <td>`+ records[j].finalTime.formattedTime + `</td>
                <td>`+ records[j].participant.car + `</td>
                <td>`+ records[j].proofs.toElement() + `</td>
            </tr>
            `
        }
        newTable.innerHTML+= `</tbody>`
        
        divStage.appendChild(newTable);
    }
    getImageUrl(){
        if(typeof(this.id) !== "undefined" && Math.round(this.id) === this.id && this.id < 36){
            return "../../resources/Stages/Images/stage"+ (this.id <10 ?"0":"") + this.id + ".png";
        }
        return this.imageURL;
    }
    finish(finalLevel){
        this.sortWorldRecords()
        Record.sortByFinalTime(this.records)
        if(typeof this.id !== "undefined"){  //refactor
            Record.assignStageRanks(this.records, finalLevel)
        }
        Record.generateGaps(this.records)
    }
}

class Record{
    constructor(participant, initialTime, penalty, status, verified){ //User typed (Dirty fields)
        this.participant = participant;
        this.initialTime = initialTime;
        this.penalty = penalty;
        this.status = status;
        this.finalTime = this.initialTime.add(this.penalty);
        this.finalTime_wcbAdjusted = this.finalTime.multiply(this.participant.wcbFactor).round();
        this.gapToLeader = 0;
        this.verified = verified;
        this.proofs = new ProofsWrapper();
    }
    static fromData(recordData) {
        const record = new Record(Participant.fromData(recordData.participant), Time.fromData(recordData.initialTime), Time.fromData(recordData.penalty), RecordStatus.fromData(recordData.status), recordData.verified);
        recordData.proofs.values.forEach(proof => {
            record.proofs.add(proof.type, proof.link)
        });
        return record;
    }
    static fromUserInput(participant, timeString, penaltyString, verified){
        let initialTime = new Time(0)
        let status = new RecordStatus(timeString)
        let penalty = new Time(0)
        if(Time.isValidTimeString(timeString)){
            initialTime = Time.fromFormattedTime(timeString)
            status = new RecordStatus("FINISHED")
            if(Time.isValidTimeString(penaltyString)){
                penalty = Time.fromFormattedTime(penaltyString)
            }
            else{
                penalty = new Time(0)
            }
        }
        return new Record(participant, initialTime, penalty, status, verified)
    }
    static sortByFinalTime(records){ //compare centiseconds
        return records.sort(function (a,b){
            if(!a.status.didFinish)
                return Number.POSITIVE_INFINITY
            if(!b.status.didFinish)
                return Number.NEGATIVE_INFINITY
            return (a.finalTime.centiseconds - b.finalTime.centiseconds)
        })
    }
    static sortByFinalTime_wcbAdjusted(records){
        return records.sort(function (a,b){
            if(!a.status.didFinish)
                return Number.POSITIVE_INFINITY
            if(!b.status.didFinish)
                return Number.NEGATIVE_INFINITY
            return (a.finalTime_wcbAdjusted.centiseconds - b.finalTime_wcbAdjusted.centiseconds)
        })
    }
    static assignStageRanks(stageRecords, finalLevel){
        const sortedStageRecords = finalLevel === 6 ? Record.sortByFinalTime_wcbAdjusted(stageRecords) : Record.sortByFinalTime(stageRecords)
        sortedStageRecords.forEach((stageRecord, index) => {
            stageRecord.rank = index + 1
        })
        return sortedStageRecords
    }
    static generateGaps(stageRecords){
        if(stageRecords.length <= 0)
            return
        const sortedRecords = Record.sortByFinalTime(stageRecords.slice())
        const leader = sortedRecords[0]
        const leaderTime = leader.status.didFinish ? leader.finalTime : null
        const numberOfRecords = sortedRecords.length
        sortedRecords.forEach((record, index) => {
            const rankAbove = sortedRecords[index - 1]
            const rankBelow = sortedRecords[index + 1]
            const rankAboveTime = index === 0 
                ? null 
                : rankAbove.status.didFinish ? rankAbove.finalTime : null
            const rankBelowTime = index === numberOfRecords - 1 
                ? null
                : rankBelow.status.didFinish ? rankBelow.finalTime : null
            const time = record.status.didFinish ? record.finalTime : null
            record.gaps = GapsWrapper.fromTimes(time, index, leaderTime, rankAboveTime, rankBelowTime)
        })
    }
}

class RallyRecord extends Record{
    constructor(record, points){
        super(record.participant, record.initialTime, record.penalty, record.status, record.verified)
        this.points = points
    }
    static fromStageRecords(stageRecords){
        if(stageRecords.length <= 0){
            return null;
        }
        const firstStageRecord = stageRecords[0]
        const initialTime = Time.addMany(stageRecords.map(stageRecord => stageRecord.initialTime))
        const penalty = Time.addMany(stageRecords.map(stageRecord => stageRecord.penalty))
        const participant = firstStageRecord.participant
        const verified = stageRecords.reduce((acc, stageRecord) => acc && stageRecord, true)
        const status = RecordStatus.getRallyStatus(stageRecords.map(stageRecord => stageRecord.status)) 
        const record = new Record(participant, initialTime, penalty, status, verified)
        return new RallyRecord(record, null)
    }
    static assignPoints(rallyRecords, rallyNumber){
        const sortedRallyRecords = Record.sortByFinalTime_wcbAdjusted(rallyRecords.slice())
        const numberOfParticipants = rallyRecords.length
        //Base Points
        sortedRallyRecords.forEach((record, index) =>{
            record.points = new PointsWrapper(numberOfParticipants-index, 0, 0)
        })
        //Did not finish points
        sortedRallyRecords.forEach(rallyRecord => {
            if(!rallyRecord.status.didFinish){
                rallyRecord.points = new PointsWrapper(0, 0, 0)
            }
        })
    }
    static assignRanks(rallyRecords){
        const sortedRallyRecords = RallyRecord.sortByPoints(rallyRecords.slice())
        sortedRallyRecords.forEach((rallyRecord, index) => {
            if(index == 0){
                rallyRecord.rank = 1;
                return;
            }
            let lastRallyRecord = sortedRallyRecords[index-1]
            if(rallyRecord.points.getTotalPoints() === lastRallyRecord.points.getTotalPoints()){
                rallyRecord.rank = lastRallyRecord.rank;
                return;
            }
            rallyRecord.rank = index + 1
        })
        return sortedRallyRecords;
    }
    static sortByPoints(records){
        return records.sort((a,b) => b.points.getTotalPoints() - a.points.getTotalPoints())
    }
}

class ContestRecord extends RallyRecord{
    constructor(rallyRecord, rallyStatuses){
        super(rallyRecord, rallyRecord.points)
        this.rallyStatuses = rallyStatuses
        this.ralliesNotFinished = RecordStatus.countNotFinishedStatuses(rallyStatuses)
    }
    static fromRallyRecords(rallyRecords){
        const contestRecord = new ContestRecord(
            RallyRecord.fromStageRecords(rallyRecords),
            rallyRecords.map(rallyRecord => rallyRecord.status)
        )
        contestRecord.points = PointsWrapper.addMany(rallyRecords.map(rallyRecord => rallyRecord.points))
        contestRecord.status = RecordStatus.getContestStatus(rallyRecords.map(rallyRecord => rallyRecord.status))
        return contestRecord
    }
    static sortByFinalTime(records){ //compare centiseconds
        return records
            .sort((a,b) => (a.finalTime.centiseconds - b.finalTime.centiseconds))
            .sort((a,b) => (a.ralliesNotFinished - b.ralliesNotFinished))
    }
    static sortBy(records, sortBy){
        if(records.length <= 0){
            return records
        }
        const firstRecord = records[0]
        switch(sortBy){
            case "finalTime": return firstRecord instanceof ContestRecord 
                ? ContestRecord.sortByFinalTime(records)
                : Record.sortByFinalTime(records);
            case "finalTime_wcbAdjusted": return firstRecord instanceof ContestRecord 
                ? ContestRecord.sortByFinalTime_wcbAdjusted(records)
                : Record.sortByFinalTime_wcbAdjusted(records);
            case "points": return RallyRecord.sortByPoints(records);
        }
    }
}

class WorldRecord extends Record{
    constructor(user, time, direction, carName){
        const participant = new Participant(1, user, "#000000", carName)
        super(participant, time, new Time(0), new RecordStatus("FINISHED"), true)
        this.direction = direction
    }
    static fromData(worldRecordData) {
        const worldRecord = new WorldRecord(User.fromData(worldRecordData.participant.user), Time.fromData(worldRecordData.finalTime), worldRecordData.direction, worldRecordData.participant.car);
        return worldRecord;
        // rally.getSummary()
    }
    static fromUserInput(user, time, direction, carName){
        return new WorldRecord(user, Time.fromFormattedTime(time), direction, carName)
    }
}

class RecordStatus{
    constructor(statusString){
        switch(statusString){
            case "FINISHED": this.value = "FINISHED"; break;
            case "DNF": this.value = "DNF"; break;
            case "DNS": this.value = "DNS"; break;
            case "DSQ": this.value = "DSQ"; break;
            default: this.value = "DNF"
        }
        this.didFinish = this.value === "FINISHED" 
    }
    static fromData(recordStatusData) {
        return new RecordStatus(recordStatusData.value);
    }
    getNextStageStatus(){
        switch(this.value){
            case "FINISHED": return RecordStatus("FINISHED");
            case "DNF": return RecordStatus("DNS");
            case "DNS": return RecordStatus("DNS");
            case "DSQ": return RecordStatus("DSQ");
            default: return RecordStatus(this.value)
        }
    }
    static getRallyStatus(stageStatuses){
        if(stageStatuses.length <= 0 || stageStatuses[0].value === "DNS"){
            return new RecordStatus("DNS")
        }
        for(const stageStatus of stageStatuses){
            if(stageStatus.value === "DSQ"){
                return new RecordStatus("DSQ")
            }
            if(stageStatus.value === "DNS" || stageStatus.value === "DNF"){
                return new RecordStatus("DNF")
            }
        }
        return new RecordStatus("FINISHED")
    }
    static getContestStatus(rallyStatuses){
        if(rallyStatuses.length <= 0){
            return new RecordStatus("DNS")
        }
        let didStart = false;
        let ralliesNotFinished = 0; //Includes DNF, DNS, DSQ
        for(const rallyStatus of rallyStatuses){
            if(rallyStatus.value === "DSQ"){
                return new RecordStatus("DSQ")
            }
            if(rallyStatus.value === "DNF"){
                return new RecordStatus("DNF")
            }
            if(rallyStatus.value === "FINISHED"){
                didStart = true;
            }
            else{
                ralliesNotFinished++;
            }
        }
        if(ralliesNotFinished === 0){
            return new RecordStatus("FINISHED")
        }
        if(!didStart){
            return new RecordStatus("DNS")
        }
        return new RecordStatus("DNF")
    }
    static countNotFinishedStatuses(recordStatuses){
        return recordStatuses.filter(recordStatus => !recordStatus.didFinish).length
    }
    static getNotFinishedStatusesString(recordStatuses){
        const notFinishedStatuses = recordStatuses.filter(recordStatus => !recordStatus.didFinish)
        if(notFinishedStatuses.length <= 0){
            return ""
        }
        const statusesCount = {}
        notFinishedStatuses.forEach(notFinishedStatus => {
            if(!(notFinishedStatus.value in statusesCount)){
                statusesCount[notFinishedStatus.value] = 0
            }
            statusesCount[notFinishedStatus.value]++
        })
        const innerString = Object.keys(statusesCount).map(statusValue => ({
            value: statusValue,
            count: statusesCount[statusValue]
        })) .sort((a, b) => b.count - a.count)
            .map(statusObject => `${statusObject.count} ${statusObject.value}`)
            .join(", ")
        return `(${innerString})`
    }
} 

class Time{
    constructor(centiseconds){
        this.centiseconds = centiseconds;
        this.formattedTime = Time.centisecondsToTime(centiseconds)
        this.signedFormattedTime = this.centiseconds >= 0 ? `+${this.formattedTime}` : this.formattedTime
    }
    static fromData(timeData) {
        return new Time(timeData.centiseconds)
    }
    static fromFormattedTime(formattedTime){
        if(!this.isValidTimeString(formattedTime))
            return null
        const centiseconds = Time.timeToCentiseconds(formattedTime)
        return new Time(centiseconds)
    }
    static isValidTimeString(timeString){
        const recordTimePattern = /[0-9]{2}:[0-5][0-9].[0-9]{2}/; // Regex for correct time results
        return recordTimePattern.test(timeString)
    }
    static addMany(times){
        return times.reduce((acc, time) => acc.add(time), new Time(0))
    }
    add(otherTime){
        return new Time(this.centiseconds + otherTime.centiseconds)
    }
    multiply(factor){
        return new Time(this.centiseconds * factor)
    }
    sub(otherTime){
        return new Time(this.centiseconds - otherTime.centiseconds)
    }
    round(){
        return new Time(Math.round(this.centiseconds));
    }
    static timeToCentiseconds(time){   //string to int
        let centiseconds = 0;
        let isNegative = time.indexOf('-') === 0
        if(isNegative){
            time = time.slice(1)
        }
        let index = time.lastIndexOf('.')
        centiseconds += parseInt(time.slice(index+1,index+3))   // centiseconds
        time = time.slice(0,index)
        index = time.lastIndexOf(':')
        centiseconds += 100 * parseInt(time.slice(index+1, time.length))   //seconds
        time = time.slice(0,index)
        index = time.lastIndexOf(':')
        centiseconds += 60 * 100 * parseInt(time.slice(index+1, time.length)) //minutes
        if(index === -1) return centiseconds;
        time = time.slice(0, index)
        centiseconds += 60 * 60 * 100 * parseInt(time) //hours
        if(isNegative){
            centiseconds = -centiseconds
        }
        return centiseconds
    }
    static centisecondsToTime(centiseconds){
        let number_string = "";
        if(centiseconds < 0){
            number_string = "-"
            centiseconds = -centiseconds
        }
        let hours = ~~(centiseconds/(100*60*60))
        if(hours > 0){
            number_string += this.addZero(hours) + ":";
            centiseconds %= 100*60*60;
        }
        number_string += Time.addZero(~~(centiseconds/(100*60))) + ":";
        centiseconds %= 100*60;
        number_string += Time.addZero(~~(centiseconds/100))+".";
        centiseconds %= 100;
        number_string += Time.addZero(centiseconds);
        return number_string
    }
    static addZero(number){  //int 5 turns string "05"
        if(number < 10){
            return "0" + number
        }
        return ""+number
    }
}

class GapsWrapper{
    constructor(baseRank, gapToLeader, gapToRankAbove, gapToRankBelow){
        this.baseRank = baseRank;
        this.gapToLeader = gapToLeader;
        this.gapToRankAbove = gapToRankAbove;
        this.gapToRankBelow = gapToRankBelow;
    }
    static fromTimes(baseTime, baseRank, leaderTime, rankAboveTime, rankBelowTime){
        if(baseTime == null){
            return new GapsWrapper(baseRank, null, null, null)
        }
        const gapToLeader = leaderTime ? baseTime.sub(leaderTime) : null
        const gapToRankAbove = rankAboveTime ? baseTime.sub(rankAboveTime) : null
        const gapToRankBelow = rankBelowTime ? baseTime.sub(rankBelowTime) : null
        return new GapsWrapper(baseRank, gapToLeader, gapToRankAbove, gapToRankBelow)
    }
    static getSubsequentGapElement(gapTime, targetRank, className){
        if(gapTime == null){
            return null
        }
        const timeString = gapTime.signedFormattedTime
        const targetRankOrdinal = toOrdinalRank(targetRank)
        return `<span class="${className}">Gap to ${targetRankOrdinal}: ${timeString}</span>`
    }
    getGapToLeaderString(){
        return this.gapToLeader ? this.gapToLeader.formattedTime : "N/A"
    }
    getGapToRankAboveElement(){
        return GapsWrapper.getSubsequentGapElement(this.gapToRankAbove, this.baseRank - 1, "gapToRankAbove")
    }
    getGapToRankBelowElement(){
        return GapsWrapper.getSubsequentGapElement(this.gapToRankBelow, this.baseRank + 1, "gapToRankBelow")
    }
    getGapsHintElement(){
        const gapsElements = [
            this.getGapToRankAboveElement(),
            this.getGapToRankBelowElement(),
        ].filter(element => element != null)
        if(gapsElements.length <= 0){
            return ""
        }
        const gapsHintString = gapsElements.join("<br/>")
        return `<div class="gapsHint">${gapsHintString}</div>`
    }
    toElement(){
        return `<span class="gapToLeader">${this.getGapToLeaderString()}${this.getGapsHintElement()}</span>`
    }
}

class PointsWrapper{
    constructor(positionPoints, carPoints, groupPoints){
        this.positionPoints = positionPoints;
        this.carPoints = carPoints;
        this.groupPoints = groupPoints;
    }
    getTotalPoints(){
        return this.positionPoints + this.carPoints + this.groupPoints
    }
    add(pointsWrapper){
        this.positionPoints += pointsWrapper.positionPoints
        this.carPoints += pointsWrapper.carPoints
        this.groupPoints += pointsWrapper.groupPoints
        return this
    }
    static addMany(pointsWrappers){
        return pointsWrappers.reduce((acc, pointWrapper) => acc.add(pointWrapper), new PointsWrapper(0, 0, 0))
    }
    multiply(number){
        this.positionPoints *= number
        this.carPoints *= number
        this.groupPoints *= number
    }
    toElement(){
        return this.getTotalPoints()
    }
}

class ProofsWrapper{
    constructor(values = []){
        this.values = values
    }
    add(type, link){
        this.values.push(new Proof(type, link))
    }
    toElement(){
        return this.values.filter(value => value != null).map(value => value.toElement()).join("")
    }
}

class Proof{
    constructor(type, link){
        this.type = type,
        this.link = link
    }
    static imageNames = {
        youtube: "youtube_icon.png",
        image: "image_icon.png",
        replay: "replay_icon.png",
        twitch: "twitch_icon.png",
        link: "link_icon.png",
        other: "link_icon.png",
    }
    getImagePath(){
        return `../../resources/${Proof.imageNames[this.type] ?? Proof.imageNames.other}`
    }
    toElement(){
        return `<a target="_blank" rel="noopener noreferrer" href=${this.link}><img src="${this.getImagePath()}" style="height: 20px; border: 1px solid #CCC;"></img></a>`
    }
}


