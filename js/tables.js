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
        RallyRecord.sortBy(this.summary.records, sortBy);
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
    // The next two functions need some refactoring!
    RecordsAddGapsToLeader(records) {
        const leader = records[0];
        for (const rec of records) {
            rec.gapToLeader = "+" + Time.centisecondsToTime(rec.initialTime.centiseconds - leader.initialTime.centiseconds);
        }
    }
    RecordsAddMoreGaps(rank, records) {
        if(!records[rank].status.didFinish) return `<span class="gapToLeader">N/A</span>`;
        let gapToRankAboveMessage = ``;
        let gapToRankBelowMessage = ``;
        if(rank > 0) {
            const rankAbove = rank-1;
            const rankAboveOrdinal = this.ToOrdinalRank(rankAbove);
            const gapToRankAbove = Time.centisecondsToTime(records[rank].initialTime.centiseconds - records[rankAbove].initialTime.centiseconds);
            gapToRankAboveMessage = `<span class="gapToRankAbove">Gap to ${rankAboveOrdinal}: +${gapToRankAbove}</span><br/>`;
        }
        if(rank < records.length-1 && records[rank+1].status.didFinish) {
            const rankBelow = rank+1;
            const rankBelowOrdinal = this.ToOrdinalRank(rankBelow);
            const gapToRankBelow = Time.centisecondsToTime(records[rankBelow].initialTime.centiseconds - records[rank].initialTime.centiseconds);
            gapToRankBelowMessage = `<span class="gapToRankBelow">Gap to ${rankBelowOrdinal}: -${gapToRankBelow}</span>`;
        }
        return `<span class="gapToLeader">${records[rank].gapToLeader}<div class="gapsHint">${gapToRankAboveMessage}${gapToRankBelowMessage}</div></span>`;
    }
    ToOrdinalRank(rank) {
        rank++; // 0th => 1st, etc.
        let suffix = 'th';
        switch(rank) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
        }
        return rank+suffix;
    }
    RecordsSetLastColumn(rank, records, finalLevel) {
        return finalLevel==0 ? this.RecordsAddMoreGaps(rank, records) : records[rank].points.toDiv();
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
            RallyRecord.sortBy(this.records, order);
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
            this.RecordsAddGapsToLeader(records);
            for(let j = 0; j < records.length; j++)
            {
                let flagImg = `<img src="../../resources/flags/${records[j].participant.user.country}.png" style="height: 20px; min-width: 32px; border: 1px solid #CCC;"/ >`;
                let value_lastColumn = this.RecordsSetLastColumn(j, records, finalLevel);
                let proofRow = finalLevel==0 ? `<td>${this.proofsToDiv(records[j].proofs)}</td>` : ``
                let finalTimeToDisplay = records[j].status.didFinish ? records[j].finalTime.formattedTime : records[j].status.value
                let tr = newTableBody.insertRow();
                let th = document.createElement("th");
                th.appendChild(document.createTextNode(records[j].rank));
                th.setAttribute('scope', 'row');
                tr.appendChild(th);
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(records[j].participant.num));
                td = tr.insertCell();
                td.appendChild(document.createTextNode(records[j].participant.user.name));
                td = tr.insertCell();
                td.innerHTML = flagImg;
                td = tr.insertCell();
                td.appendChild(document.createTextNode(records[j].participant.group.name));
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
    proofsToDiv(proofs){
        let proofsImages = "";
        proofs.youtube != null ? proofsImages += `<a href=${proofs.youtube}><img src="../../resources/youtube_icon.png" style="height: 20px; border: 1px solid #CCC;"></img></a>`: null;
        proofs.image != null ? proofsImages += `<a href=${proofs.image}><img src="../../resources/image_icon.png" style="height: 20px; border: 1px solid #CCC;"></img></a>`: null;
        proofs.replay != null ? proofsImages += `<a href=${proofs.replay}><img src="../../resources/replay_icon.png" style="height: 20px; border: 1px solid #CCC;"></img></a>`: null;
        proofs.twitch != null ? proofsImages += `<a href=${proofs.twitch}><img src="../../resources/twitch_icon.png" style="height: 20px; border: 1px solid #CCC;"></img></a>`: null;
        proofs.link != null ? proofsImages += `<a href=${proofs.link}><img src="../../resources/link_icon.png" style="height: 20px; border: 1px solid #CCC;"></img></a>`: null;
        return proofsImages;
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
        this.proofs = {}
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
}

class RallyRecord extends Record{
    constructor(record, points){
        super(record.participant, record.initialTime, record.penalty, record.status, record.verified)
        this.points = points
    }
    static fromStageRecords(stageRecords, isFinalSummary = false){
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
    static sortBy(records, sortBy){
        switch(sortBy){
            case "finalTime": return Record.sortByFinalTime(records);
            case "points": return RallyRecord.sortByPoints(records);
        }
    }
}

class ContestRecord extends RallyRecord{
    constructor(rallyRecord, rallyStatuses){
        super(rallyRecord, rallyRecord.points)
        this.rallyStatuses = rallyStatuses
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
        console.log(rallyStatuses)
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
        console.log(ralliesNotFinished)
        if(ralliesNotFinished === 0){
            return new RecordStatus("FINISHED")
        }
        if(!didStart){
            return new RecordStatus("DNS")
        }
        return new RecordStatus("DNF")
    }
} 

class Time{
    constructor(centiseconds){
        this.centiseconds = centiseconds;
        this.formattedTime = Time.centisecondsToTime(centiseconds)
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
    static timeToCentiseconds(time){   //string to int
        let centiseconds = 0;
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
        return centiseconds
    }
    static centisecondsToTime(centiseconds){
        if(centiseconds < 0)
            return "DNF"
        let number_string = "";
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
    toDiv(){
        return `${this.getTotalPoints()} (<span class="pointsHover">${this.positionPoints}<div class="pointsHint">Base</div></span> + <span class="pointsHover">${this.carPoints}<div class="pointsHint">Weaker car bonus</div></span> + <span class="pointsHover">${this.groupPoints}<div class="pointsHint">Group bonus</div></span>)`
    }
}


