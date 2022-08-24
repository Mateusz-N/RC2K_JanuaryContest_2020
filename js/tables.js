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
}

class Participant{
    constructor(num, user, color, car){
        this.num = num
        this.user = user
        this.color = color
        this.car = car
        this.group = null
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
        participant.group = this
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
    }
    AddRally(rally){
        rally.id = this.rallies.length;
        this.rallies.push(rally);
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
    getFinalSummary(){
        if(typeof this.summaryRally !== "undefined"){
            return this.summaryRally
        }
        this.summaryRally = new Rally("Final")
        for(let i = 0; i< this.rallies.length; i++){
            let rally = this.rallies[i];
            let summaryRally_stage = rally.getSummary()  // Stage object
            this.summaryRally.stages.push(summaryRally_stage)
        }
        this.summaryRally.id = 6
        return this.summaryRally
    }
    finish(){
        this.rallies.forEach(rally => rally.finish())
        this.getFinalSummary().finish()
    }
}

class Rally{
    constructor(name, id){
        this.id = id;
        this.name = name
        this.stages = []
    }
    getSummary(sortBy = "centiseconds"){
        if(typeof this.summary !== "undefined"){
            return this.summary
        }
        this.summary = new Stage(this.name + " Summary");
        this.summary.index = 6
        this.summary.imageURL = "../../resources/rally" + this.id + ".PNG";
        const stageRecordsByParticipant = {}
        this.stages.forEach(stage => {
            stage.records.forEach(record => {
                const participantName = record.participant.user.name
                if(!(participantName in stageRecordsByParticipant)){
                    stageRecordsByParticipant[participantName] = []
                }
                stageRecordsByParticipant[participantName].push(record)
            })
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
    finish(){
        this.stages.forEach(stage => stage.finish())
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
        let orders = ["finalTime"]
        switch(finalLevel) {
            case 0: orders = ["finalTime"]; break;
            case 1: orders = ["finalTime", "points"]; break;
            case 2: orders = ["points"]; break;
            case 3: orders = ["finalTime", "points"]; break;
        }
        for(const order of orders){
            ContestRecord.sortBy(this.records, order);
            if(orders.length > 1){
                let orderText = "Results ordered by time"
                if(order == "points"){
                    orderText = "Results ordered by number of points"
                }
                let orderElement =  document.createElement('h5')
                orderElement.innerHTML = orderText
                orderElement.className = "orderText"
                stageTablesDiv.appendChild(orderElement)
            }
            this.CreateContestStageTable(stageTablesDiv, finalLevel);
        }
        baseDiv.appendChild(stageTablesDiv)
    }
    CreateWorldRecordEntireStageTable(div, direction){
        Record.AssignStageRanks(this.wr["arcade"])
        Record.AssignStageRanks(this.wr["simulation"])
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
                    <th scope="col">${string_lastColumn}</th>
                    ${proofColumn}
                </tr>
            </thead>`
        let newTableBody = document.createElement('tbody');
        newTable.appendChild(newTableBody);

        if (this.records.length === 0) { // Fills empty tables with a "Check back later" message.
            newTable.innerHTML+=`<tr id="emptyFinalTable"><td style="color: gray;" colspan="100%" rowspan="2" >The results aren't complete yet. Please check back later.</td></tr>`;
        }
        else {
            let records = this.records;
            for(let j = 0; j < records.length; j++)
            {
                let record = records[j]
                let flagImg = `<img src="../../resources/flags/${record.participant.user.country}.png" style="height: 20px; min-width: 32px; border: 1px solid #CCC;"/ >`;
                let value_lastColumn = finalLevel==0 ? record.gaps.toElement() : record.points.toElement();
                let proofRow = finalLevel==0 ? `<td>${this.proofsToDiv(record.proofs)}</td>` : ``
                let finalTimeToDisplay = finalLevel === 3 
                    ? `${record.finalTime.formattedTime} ${RecordStatus.getNotFinishedStatusesString(record.rallyStatuses)}`
                    : record.status.didFinish ? record.finalTime.formattedTime : record.status.value
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
                td.appendChild(document.createTextNode(record.participant.group.name));
                td = tr.insertCell();
                td.appendChild(document.createTextNode(finalTimeToDisplay));
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
                <td>`+ this.proofsToDiv(records[j].proofs) + `</td>
            </tr>
            `
        }
        newTable.innerHTML+= `</tbody>`
        
        divStage.appendChild(newTable);
    }
    getImageUrl(){
        if(typeof(this.id) !== "undefined"){
            return "../../resources/Stages/Images/stage"+ (this.id <10 ?"0":"") + this.id + ".png";
        }
        return this.imageURL;
    }
    finish(){
        this.sortWorldRecords()
        Record.sortByFinalTime(this.records)
        if(typeof this.id !== "undefined"){  //refactor
            Record.assignStageRanks(this.records)
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
        this.finalTime = this.initialTime.add(this.penalty)
        this.gapToLeader = 0;
        this.verified = verified;
        this.proofs = new ProofsWrapper()
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
    static assignStageRanks(stageRecords){
        const sortedStageRecords = Record.sortByFinalTime(stageRecords)
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
        const sortedRallyRecords = Record.sortByFinalTime(rallyRecords.slice())
        const numberOfParticipants = rallyRecords.length
        //Base Points
        sortedRallyRecords.forEach((record, index) =>{
            record.points = new PointsWrapper(numberOfParticipants-index, 0, 0)
        })
        //Car Points
        sortedRallyRecords.forEach(record => {
            const carName = record.participant.car
            const carBonus = [
                'Mitsubishi Lancer Evo IV',
                'Seat Cordoba WRC',
                'Proton Wira/Persona'
            ].indexOf(carName) !== -1 ? 1 : 0
            record.points.add(new PointsWrapper(0, carBonus, 0))
        })
        //Group Points
        sortedRallyRecords.forEach((record, index) => {
            const recordGroup = record.participant.group
            const beatenGroups = {}
            const worseRecords = sortedRallyRecords.slice(index + 1).filter(record => record.status.didFinish)
            worseRecords.forEach(worseRecord => {
                const beatenGroup = worseRecord.participant.group
                if(!(beatenGroup.number in beatenGroups)){
                    beatenGroups[beatenGroup.number] = beatenGroup
                }
            })
            let groupPoints = 0
            for(const beatenGroupNumber in beatenGroups){
                const beatenGroup = beatenGroups[beatenGroupNumber]
                groupPoints += recordGroup.getPointAdvantage(beatenGroup)
            }
            record.points.add(new PointsWrapper(0, 0, groupPoints))
        })
        //Rally Number Points
        if(rallyNumber === 3){
            sortedRallyRecords.forEach(rallyRecord => {
                const groupNumber = rallyRecord.participant.group.number
                let groupMultiplier = 1.5;
                switch(groupNumber){
                    case 1: groupMultiplier = 1.5; break;
                    case 2: groupMultiplier = 1.5; break;
                    case 3: groupMultiplier = 2; break;
                    case 4: groupMultiplier = 2.5; break;
                }
                rallyRecord.points.multiply(groupMultiplier)
            })
        }
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
    sub(otherTime){
        return new Time(this.centiseconds - otherTime.centiseconds)
    }
    static timeToCentiseconds(time){   //string to int
        let centiseconds = 0;
        let isNegative = time.indexOf('-') === 0
        if(isNegative){
            time = time.slice(1)
        }
        let index = time.lastIndexOf('.')
        centiseconds += parseInt(time.slice(index+1,index+3))
        time = time.slice(0,index)
        index = time.lastIndexOf(':')
        centiseconds += 100 * parseInt(time.slice(index+1, time.length))   //seconds
        time = time.slice(0,index)
        index = time.lastIndexOf(':')
        centiseconds += 60 * 100 * parseInt(time.slice(index+1, time.length)) //minutes
        if(index === -1) return centiseconds;
        time = time.slice(0, index)
        centiseconds += 60 * 60 * 100 * parseInt(time.slice) //hours
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
        return `${this.getTotalPoints()} (<span class="pointsHover">${this.positionPoints}<div class="pointsHint">Base</div></span> + <span class="pointsHover">${this.carPoints}<div class="pointsHint">Weaker car bonus</div></span> + <span class="pointsHover">${this.groupPoints}<div class="pointsHint">Group bonus</div></span>)`
    }
}

class ProofsWrapper{
    constructor(values){
        this.values = values
    }
    add(type, link){
        this.values.push[new Proof(type, link)]
    }
    toElement(){
        return this.values.filter(value => value != null).map(value => value.toElement).join("")
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
        replay: "replay_icon",
        twitch: "twitch_icon.png",
        link: "link_icon.png",
        other: "link_icon.png",
    }
    getImagePath(){
        return `../../resources/${Proof.imageNames[this.type] ?? Proof.imageNames.other}`
    }
    toElement(){
        return `<a href=${this.link}><img src="${this.getImagePath()}" style="height: 20px; border: 1px solid #CCC;"></img></a>`
    }
}


