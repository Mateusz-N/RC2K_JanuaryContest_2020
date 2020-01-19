class Contest{
    constructor(name){
        this.name = name
        this.participants = []
        this.rallies = []
    }
    AddRally(rally){
        rally.id = this.rallies.length;
        this.rallies.push(rally);
    }
    GetParticipantIDByName(name){
        function checkName(participant){
            if(participant.name == name)
                return true
            return false
        }
        return this.participants.findIndex(checkName)
    }
    GetParticipantByName(name){
        return this.participants[this.GetParticipantIDByName(name)]
    }
}

class Rally{
    constructor(name){
        this.name = name
        this.stages = []
    }
    generateSummary(){
        this.summary = new Stage(this.name + " Summary");
        this.summary.imageURL = "resources/rally" + this.id + ".PNG";
        let participants = []  //name to participant object
        let centiseconds_initial_hash = []
        let penalty_hash = []
        let verified_hash = []
        let number_hash = []  //number of stages completed [participant_name]
        for(let i = 0; i< this.stages.length; i++){
            let stage = this.stages[i];
            for(let j = 0; j< stage.records.length; j++){
                let record = stage.records[j];
                let name = record.participant.name;
                if(!participants[name]){
                    participants[name] = record.participant;
                    centiseconds_initial_hash[name] = record.centiseconds_initial;
                    penalty_hash[name] = record.centiseconds_penalty;
                    verified_hash[name] = record.verified
                    number_hash[name] = 1;
                }
                else{
                    centiseconds_initial_hash[name] += record.centiseconds_initial;
                    penalty_hash[name] += record.centiseconds_penalty;
                    if(record.verified == "No"){verified_hash[name] = "No"}
                    number_hash[name] += 1;
                }
            }
        }
        for(let key in centiseconds_initial_hash){
            if(number_hash[key] == 6){
                let participant = participants[key];
                this.summary.AddRecord(participant,centiseconds_initial_hash[key],penalty_hash[key],verified_hash[key])
            }
        }
        return this.summary;
    }
}

class Stage{
    constructor(name){
        this.name = name;
        this.records = []
        this.imageURL = "";
    }
    AddRecord(participant, time, penalty, verified){
        this.records.push(new Record(participant,time,penalty,verified))
    }
    RecordsSorted(){
        return this.records.sort((a,b) => a.centiseconds - b.centiseconds)
    }
    CreateStageTable(div, nParticipants){  //div = space for the table
        let isFinal;
        if(typeof(nParticipants) == "undefined"){
            isFinal = false;
        }
        else{
            isFinal = true;
        }
        let divStage = document.createElement('div')
        divStage.className = "divStage"
        let divTitleImage = document.createElement('div')
        divTitleImage.className = "divTitleImage"

        let newTitle = document.createElement('h4')
        newTitle.innerHTML = this.name
        newTitle.className = "stageName"
        divTitleImage.appendChild(newTitle)

        let newImage = document.createElement("img")
        newImage.src = this.imageURL
        newImage.className = "mapImage"
        divTitleImage.appendChild(newImage)
        
        divStage.appendChild(divTitleImage)

        let newTable = document.createElement('table')
        newTable.setAttribute("class", "table")
        let string_lastColumn = !isFinal? "Verified?":"Points"
        newTable.innerHTML = 
            `<thead class="thead-dark">
                <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Time</th>
                    <th scope="col">Penalty</th>
                    <th scope="col">Time (+Penalty)</th>
                    <th scope="col">`+string_lastColumn+`</th>
                </tr>
            </thead>
            <tbody>`
        let records = this.RecordsSorted()
        for(let j = 0; j< records.length; j++)
        {
            let value_lastColumn = !isFinal? records[j].verified:(nParticipants-j)
            newTable.innerHTML+= 
            `
            <tr>
                <th scope="row">`+(j+1)+`</th>
                <td>`+ records[j].participant.name +`</td>
                <td>`+ records[j].time + `</td>
                <td>`+ records[j].penalty +`</td>
                <td>`+ records[j].timePenalty +`</td>
                <td>`+ value_lastColumn +`</td>
            </tr>
            `
        }
        newTable.innerHTML+= `</tbody>`
        
        divStage.appendChild(newTable)
        div.appendChild(divStage)
    }
}

function tp() {
    
}

class Record{
    constructor(participant, time, penalty, verified){
        this.participant = participant;
        if(typeof(time) == "number"){
            this.centiseconds_initial = time;
            this.time = this.CentisecondsToTime(this.centiseconds_initial);
        }
        else{
            this.time = time; //string
            this.centiseconds_initial = this.TimeToCentiseconds(this.time);  //int
        }
        if(typeof(penalty) == "number"){
            this.centiseconds_penalty = penalty;
            this.penalty = this.CentisecondsToTime(this.centiseconds_penalty);
        }
        else{
            this.penalty = penalty; //string
            this.centiseconds_penalty = this.TimeToCentiseconds(this.penalty);  //int
        }
        this.centiseconds = this.centiseconds_initial + this.centiseconds_penalty; //int
        this.timePenalty = this.CentisecondsToTime(this.centiseconds);  //string
        this.verified = verified;
    }
    TimeToCentiseconds(time){   //string to int
        return (parseInt(time.slice(0,2))*60 + parseInt(time.slice(3,5)))*100 + parseInt(time.slice(6,8))
    }
    CentisecondsToTime(centiseconds){
        let number_string = "";
        number_string += this.addZero(~~(centiseconds/(100*60))) + ":";
        centiseconds %= 100*60;
        number_string += this.addZero(~~(centiseconds/100))+".";
        centiseconds %= 100;
        number_string += this.addZero(centiseconds);
        return number_string 
    }
    addZero(number){  //int 5 turns string "05"
        if(number < 10){
            return "0" + number
        }
        return ""+number
    }
}

class Participant{
    constructor(name, color){
        this.name = name
        this.color = color
    }
}

function contestData(){
    let contest  = new Contest("BRC: Milestone Rumble")
    let participantsNames = ["Erwto","MidnightRunner","Migger","SpartaX18","Škoda Favorit GLX SilverLine","Tornado","XsaraTorrada","SpartaRemixer","Juraj Damjanovic"]
    let participants = []
    for(let i = 0; i<participantsNames.length; i++){
        participants.push(new Participant(participantsNames[i], "#880000"))
    }
    contest.participants = participants

    let Erwto = contest.GetParticipantByName(participantsNames[0]);
    let MidnightRunner = contest.GetParticipantByName(participantsNames[1]);
    let Migger = contest.GetParticipantByName(participantsNames[2]);
    let SpartaX18 = contest.GetParticipantByName(participantsNames[3]);
    let datsun = contest.GetParticipantByName(participantsNames[4]);
    let Tornado = contest.GetParticipantByName(participantsNames[5]);
    let XsaraTorrada = contest.GetParticipantByName(participantsNames[6]);
    let SpartaRemixer = contest.GetParticipantByName(participantsNames[7]);
    let Juraj = contest.GetParticipantByName(participantsNames[8]);
    
    let rallies = []

    let rally, stage
    {
        rally = new Rally("Vauxhall Rally of Wales")

        stage = new Stage("Clocaenog Mid");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/3/3f/20181105_134049.png/revision/latest/scale-to-width-down/1000?cb=20181105214042"
        stage.AddRecord(SpartaX18,"09:54.33","00:00.00","No")
        stage.AddRecord(datsun,"10:15.39","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"10:15.86","00:00.00","Yes")
        stage.AddRecord(Migger,"10:15.98","00:00.00","No")
        stage.AddRecord(Juraj,"10:41.30","00:00.00","No")
        stage.AddRecord(Erwto,"10:38.90","00:00.00","No")
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/de/20181023_124545.png/revision/latest/scale-to-width-down/1000?cb=20181024165338"
        stage.AddRecord(SpartaX18,"08:50.58","00:00.00","No")
        stage.AddRecord(Migger,"08:53.92","00:00.00","No")
        stage.AddRecord(datsun,"08:54.49","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"09:01.83","00:00.00","No")
        stage.AddRecord(Juraj,"10:33.95","00:00.00","No")
        stage.AddRecord(Erwto,"09:23.22","00:00.00","No")
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/88/20181023_124729.png/revision/latest/scale-to-width-down/1000?cb=20181024165520"
        stage.AddRecord(SpartaX18,"12:38.44","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"12:49.63","00:00.00","No")
        stage.AddRecord(datsun,"12:56.54","00:00.00","No")
        stage.AddRecord(Migger,"12:56.65","00:00.00","No")
        stage.AddRecord(Juraj,"16:13.36","00:00.00","No")
        stage.AddRecord(Erwto,"13:53.37","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/a/a9/20181023_133833.png/revision/latest/scale-to-width-down/1000?cb=20181024165638"
        stage.AddRecord(SpartaX18,"14:01.55","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"14:13.30","00:00.00","No")
        stage.AddRecord(datsun,"14:15.59","00:00.00","No")
        stage.AddRecord(Migger,"14:20.88","00:00.00","No")
        stage.AddRecord(Juraj,"16:24.15","00:00.00","No")
        stage.AddRecord(Erwto,"14:38.10","00:00.00","No")
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/4/47/20181023_133956.png/revision/latest/scale-to-width-down/1000?cb=20181024170159"
        stage.AddRecord(XsaraTorrada,"14:48.14","00:00.00","No")
        stage.AddRecord(SpartaX18,"15:36.78","00:00.00","No")
        stage.AddRecord(Juraj,"17:19.04","00:00.00","No")
        stage.AddRecord(Migger,"14:31.78","00:00.00","No")
        stage.AddRecord(datsun,"14:45.85","00:00.00","No")
        stage.AddRecord(Erwto,"15:00.44","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/cb/20181023_134059.png/revision/latest/scale-to-width-down/1000?cb=20181024170338"
        stage.AddRecord(SpartaX18,"12:23.89","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"12:46.96","00:00.00","Yes")
        stage.AddRecord(Juraj,"14:27.48","00:00.00","No")
        stage.AddRecord(Migger,"12:38.73","00:00.00","No")
        stage.AddRecord(datsun,"12:40.31","00:00.00","No")
        stage.AddRecord(Erwto,"13:06.06","00:00.00","No")
        rally.stages[5] = stage;

        rally.generateSummary()
        contest.AddRally(rally)
    }
    {
        rally = new Rally("Pirelli International Rally")

        stage = new Stage("Chirdonhead");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/b/b7/20181023_152615.png/revision/latest/scale-to-width-down/1000?cb=20181024170442"
        stage.AddRecord(Juraj,"22:01.24","00:00.00","No")
        stage.AddRecord(SpartaX18,"19:47.29","00:00.00","No")
        stage.AddRecord(Migger,"20:06.05","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"20:03.15","00:00.00","Yes")
        stage.AddRecord(datsun,"20:42.18","00:00.00","No")
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/7/7f/20181025_190452.png/revision/latest/scale-to-width-down/1000?cb=20181025185513"
        stage.AddRecord(Juraj,"19:13.94","00:00.00","No")
        stage.AddRecord(SpartaX18,"16:18.79","00:00.00","No")
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/ff/20181025_190653.png/revision/latest/scale-to-width-down/1000?cb=20181025190937"
        stage.AddRecord(Juraj,"17:43.39","00:00.00","No")
        stage.AddRecord(SpartaX18,"14:11.92","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/c2/20181025_191048.png/revision/latest/scale-to-width-down/1000?cb=20181025191511"
        stage.AddRecord(Juraj,"19:54.98","00:00.00","No")
        stage.AddRecord(SpartaX18,"17:57.01","00:00.00","No")
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/1/12/20181025_192252.png/revision/latest/scale-to-width-down/1000?cb=20181025191823"
        stage.AddRecord(Juraj,"08:12.34","00:00.00","No")
        stage.AddRecord(SpartaX18,"07:17.94","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/04/20181025_192426.png/revision/latest/scale-to-width-down/1000?cb=20181025192203"
        stage.AddRecord(Juraj,"16:32.31","00:00.00","No")
        stage.AddRecord(SpartaX18,"14:53.87","00:00.00","No")
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("RSAC Scottish Rally")

        stage = new Stage("Twiglees");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/03/20181028_011942.png/revision/latest/scale-to-width-down/1000?cb=20181027232048"
        rally.stages[0] = stage;

        stage = new Stage("Yair");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/d4/20181028_125844.png/revision/latest/scale-to-width-down/1000?cb=20181028115940"
        rally.stages[1] = stage;

        stage = new Stage("Cardrona");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/7/79/20181029_115018.png/revision/latest/scale-to-width-down/1000?cb=20181030151339"
        rally.stages[2] = stage;

        stage = new Stage("Black loch");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/f1/20181029_115542.png/revision/latest/scale-to-width-down/1000?cb=20181030151437"
        rally.stages[3] = stage;

        stage = new Stage("Glentrool");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/6/61/20181029_120643.png/revision/latest/scale-to-width-down/1000?cb=20181030151634"
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/52/20181029_121409.png/revision/latest/scale-to-width-down/1000?cb=20181030151727"
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("Seat Jim Clark Memorial Rally")

        stage = new Stage("Moon and star");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/1/1f/20181029_124141.png/revision/latest/scale-to-width-down/1000?cb=20181030151936"
        rally.stages[0] = stage;

        stage = new Stage("Bothwell");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/f1/IMG_20181029_125523.png/revision/latest/scale-to-width-down/1000?cb=20181030152101"
        rally.stages[1] = stage;

        stage = new Stage("Whitchester");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9c/20181029_130316.png/revision/latest/scale-to-width-down/1000?cb=20181030152209"
        rally.stages[2] = stage;

        stage = new Stage("Eccles");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/5f/20181029_131113.png/revision/latest/scale-to-width-down/1000?cb=20181030152651"
        rally.stages[3] = stage;

        stage = new Stage("Langton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/2/22/20181029_131731.png/revision/latest/scale-to-width-down/1000?cb=20181030153714"
        rally.stages[4] = stage;

        stage = new Stage("Fogo");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/d1/20181029_132242.png/revision/latest/scale-to-width-down/1000?cb=20181030153917"
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("Stena Line Ulster Rally")

        stage = new Stage("Hamilton's Folly");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/59/20181031_124043.png/revision/latest/scale-to-width-down/1000?cb=20181031143937"
        rally.stages[0] = stage;

        stage = new Stage("Tyrones Ditches");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/52/20181102_110833.png/revision/latest/scale-to-width-down/1000?cb=20181102100921"
        rally.stages[1] = stage;

        stage = new Stage("Feeney");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/6/6a/20181102_112205.png/revision/latest/scale-to-width-down/1000?cb=20181102102233"
        rally.stages[2] = stage;

        stage = new Stage("Parkanaur");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/c4/20181102_113015.png/revision/latest/scale-to-width-down/1000?cb=20181102103054"
        rally.stages[3] = stage;

        stage = new Stage("Lisnamuck");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/a/aa/20181102_162558.png/revision/latest/scale-to-width-down/1000?cb=20181102154611"
        rally.stages[4] = stage;

        stage = new Stage("Tardree");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/87/20181102_164414.png/revision/latest/scale-to-width-down/1000?cb=20181102154703"
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("Sony Manx International Rally")

        stage = new Stage("Port Soderick");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9e/20181103_130705.png/revision/latest/scale-to-width-down/1000?cb=20181103120822"
        rally.stages[0] = stage;

        stage = new Stage("Ballagyr");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/8a/20181103_132646.png/revision/latest/scale-to-width-down/1000?cb=20181103122735"
        rally.stages[1] = stage;

        stage = new Stage("Curraghs");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9b/20181103_185003.png/revision/latest/scale-to-width-down/1000?cb=20181103175253"
        rally.stages[2] = stage;

        stage = new Stage("Tholt-y-will");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/56/20181104_162834.png/revision/latest/scale-to-width-down/1000?cb=20181104152904"
        rally.stages[3] = stage;

        stage = new Stage("Injerbreck");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/0c/20181105_084329.png/revision/latest/scale-to-width-down/1000?cb=20181126175459"
        rally.stages[4] = stage;

        stage = new Stage("Cringle");
        stage.imageURL="https://vignette.wikia.nocookie.net/rc2000/images/3/3d/20181105_084909.png/revision/latest/scale-to-width-down/1000?cb=20181126175355"
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }

    return contest
}

