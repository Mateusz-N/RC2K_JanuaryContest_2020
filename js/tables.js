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
        stage.AddRecord(MidnightRunner,"10:10.00","00:00.00","Yes")
        stage.AddRecord(SpartaRemixer,"10:11.61","00:00.00","No")
        stage.AddRecord(Tornado,"09:58.53","00:00.00","No")
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/de/20181023_124545.png/revision/latest/scale-to-width-down/1000?cb=20181024165338"
        stage.AddRecord(SpartaX18,"08:50.58","00:00.00","No")
        stage.AddRecord(Migger,"08:53.92","00:00.00","No")
        stage.AddRecord(datsun,"08:54.49","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"09:01.83","00:00.00","No")
        stage.AddRecord(Juraj,"10:33.95","00:00.00","No")
        stage.AddRecord(Erwto,"09:23.22","00:00.00","No")
        stage.AddRecord(MidnightRunner,"08:54.39","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"08:31.99","00:00.00","No")
        stage.AddRecord(Tornado,"08:30.65","00:00.00","No")
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/88/20181023_124729.png/revision/latest/scale-to-width-down/1000?cb=20181024165520"
        stage.AddRecord(SpartaX18,"12:38.44","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"12:49.63","00:00.00","No")
        stage.AddRecord(datsun,"12:56.54","00:00.00","No")
        stage.AddRecord(Migger,"12:56.65","00:00.00","No")
        stage.AddRecord(Juraj,"16:13.36","00:00.00","No")
        stage.AddRecord(Erwto,"13:53.37","00:00.00","No")
        stage.AddRecord(MidnightRunner,"13:13.00","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"12:36.56","00:00.00","No")
        stage.AddRecord(Tornado,"13:07.23","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/a/a9/20181023_133833.png/revision/latest/scale-to-width-down/1000?cb=20181024165638"
        stage.AddRecord(SpartaX18,"14:01.55","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"14:13.30","00:00.00","No")
        stage.AddRecord(datsun,"14:15.59","00:00.00","No")
        stage.AddRecord(Migger,"14:20.88","00:00.00","No")
        stage.AddRecord(Juraj,"16:24.15","00:00.00","No")
        stage.AddRecord(Erwto,"14:38.10","00:00.00","No")
        stage.AddRecord(MidnightRunner,"14:03.33","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:24.24","00:00.00","No")
        stage.AddRecord(Tornado,"13:41.04","00:00.00","No")
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/4/47/20181023_133956.png/revision/latest/scale-to-width-down/1000?cb=20181024170159"
        stage.AddRecord(XsaraTorrada,"14:48.14","00:00.00","No")
        stage.AddRecord(SpartaX18,"15:36.78","00:00.00","No")
        stage.AddRecord(Juraj,"17:19.04","00:00.00","No")
        stage.AddRecord(Migger,"14:31.78","00:00.00","No")
        stage.AddRecord(datsun,"14:45.85","00:00.00","No")
        stage.AddRecord(Erwto,"15:00.44","00:00.00","No")
        stage.AddRecord(MidnightRunner,"15:02.05","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:35.76","00:00.00","No")
        stage.AddRecord(Tornado,"14:25.19","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/cb/20181023_134059.png/revision/latest/scale-to-width-down/1000?cb=20181024170338"
        stage.AddRecord(SpartaX18,"12:23.89","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"12:46.96","00:00.00","Yes")
        stage.AddRecord(Juraj,"14:27.48","00:00.00","No")
        stage.AddRecord(Migger,"12:38.73","00:00.00","No")
        stage.AddRecord(datsun,"12:40.31","00:00.00","No")
        stage.AddRecord(Erwto,"13:06.06","00:00.00","No")
        stage.AddRecord(MidnightRunner,"12:49.16","00:00.00","Yes")
        stage.AddRecord(SpartaRemixer,"12:38.76","00:00.00","No")
        stage.AddRecord(Tornado,"12:32.43","00:00.00","No")
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
        stage.AddRecord(SpartaRemixer,"19:49.01","00:00.00","No")
        stage.AddRecord(MidnightRunner,"19:23.85","00:00.00","Yes")
        stage.AddRecord(Tornado,"19:33.88","00:00.00","No")
        stage.AddRecord(Erwto,"19:57.63","00:00.00","No")
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/7/7f/20181025_190452.png/revision/latest/scale-to-width-down/1000?cb=20181025185513"
        stage.AddRecord(Juraj,"19:13.94","00:00.00","No")
        stage.AddRecord(SpartaX18,"16:18.79","00:00.00","No")
        stage.AddRecord(Migger,"16:51.76","00:00.00","No")
        stage.AddRecord(datsun,"17:10.57","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"16:27.30","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"17:14.41","00:00.00","Yes")
        stage.AddRecord(MidnightRunner,"16:36.16","00:00.00","No")
        stage.AddRecord(Tornado,"16:30.88","00:00.00","No")
        stage.AddRecord(Erwto,"17:06.48","00:00.00","No")
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/ff/20181025_190653.png/revision/latest/scale-to-width-down/1000?cb=20181025190937"
        stage.AddRecord(Juraj,"17:43.39","00:00.00","No")
        stage.AddRecord(SpartaX18,"14:11.92","00:00.00","No")
        stage.AddRecord(Migger,"15:05.12","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:46.36","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"15:06.75","00:00.00","Yes")
        stage.AddRecord(datsun,"16:08.32","00:00.00","No")
        stage.AddRecord(Tornado,"14:15.68","00:00.00","No")
        stage.AddRecord(Erwto,"15:02.07","00:00.00","No")
        stage.AddRecord(MidnightRunner,"14:31.22","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/c2/20181025_191048.png/revision/latest/scale-to-width-down/1000?cb=20181025191511"
        stage.AddRecord(Juraj,"19:54.98","00:00.00","No")
        stage.AddRecord(SpartaX18,"17:57.01","00:00.00","No")
        stage.AddRecord(Migger,"18:18.64","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"17:54.53","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"17:56.57","00:00.00","Yes")
        stage.AddRecord(datsun,"18:44.27","00:00.00","No")
        stage.AddRecord(Tornado,"17:46.53","00:00.00","No")
        stage.AddRecord(Erwto,"18:42.61","00:00.00","No")
        stage.AddRecord(MidnightRunner,"17:38.32","00:00.00","No")
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/1/12/20181025_192252.png/revision/latest/scale-to-width-down/1000?cb=20181025191823"
        stage.AddRecord(Juraj,"08:12.34","00:00.00","No")
        stage.AddRecord(SpartaX18,"07:17.94","00:00.00","No")
        stage.AddRecord(Migger,"07:33.47","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:04.15","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"08:19.34","00:00.00","Yes")
        stage.AddRecord(datsun,"07:55.75","00:00.00","No")
        stage.AddRecord(Tornado,"07:14.46","00:00.00","No")
        stage.AddRecord(Erwto,"09:49.88","00:00.00","No")
        stage.AddRecord(MidnightRunner,"08:11.60","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/04/20181025_192426.png/revision/latest/scale-to-width-down/1000?cb=20181025192203"
        stage.AddRecord(Juraj,"16:32.31","00:00.00","No")
        stage.AddRecord(SpartaX18,"14:53.87","00:00.00","No")
        stage.AddRecord(Migger,"15:18.97","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:29.60","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"15:20.36","00:00.00","Yes")
        stage.AddRecord(datsun,"15:09.55","00:00.00","No")
        stage.AddRecord(Tornado,"14:38.99","00:00.00","No")
        stage.AddRecord(Erwto,"15:36.41","00:00.00","No")
        stage.AddRecord(MidnightRunner,"14:59.98","00:00.00","No")
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("RSAC Scottish Rally")

        stage = new Stage("Twiglees");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/03/20181028_011942.png/revision/latest/scale-to-width-down/1000?cb=20181027232048"
        stage.AddRecord(SpartaX18,"08:20.05","00:00.00","No")
        stage.AddRecord(Migger,"08:18.26","00:00.00","No")
        stage.AddRecord(Juraj,"09:25.84","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"08:12.06","00:00.00","No")
        stage.AddRecord(datsun,"08:51.96","00:00.00","No")
        stage.AddRecord(Tornado,"08:21.20","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"08:33.62","00:00.00","Yes")
        rally.stages[0] = stage;

        stage = new Stage("Yair");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/d4/20181028_125844.png/revision/latest/scale-to-width-down/1000?cb=20181028115940"
        stage.AddRecord(SpartaX18,"04:50.32","00:00.00","No")
        stage.AddRecord(Migger,"04:53.97","00:00.00","No")
        stage.AddRecord(Juraj,"06:48.92","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"04:42.73","00:00.00","No")
        stage.AddRecord(Tornado,"04:54.38","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:09.27","00:00.00","Yes")
        stage.AddRecord(datsun,"04:55.93","00:00.00","No")
        rally.stages[1] = stage;

        stage = new Stage("Cardrona");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/7/79/20181029_115018.png/revision/latest/scale-to-width-down/1000?cb=20181030151339"
        stage.AddRecord(SpartaX18,"05:36.00","00:00.00","No")
        stage.AddRecord(Migger,"05:25.73","00:00.00","No")
        stage.AddRecord(Juraj,"06:18.81","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:22.71","00:00.00","No")
        stage.AddRecord(Tornado,"05:24.21","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:42.42","00:00.00","Yes")
        stage.AddRecord(datsun,"05:31.85","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Black loch");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/f1/20181029_115542.png/revision/latest/scale-to-width-down/1000?cb=20181030151437"
        stage.AddRecord(SpartaX18,"06:20.25","00:00.00","No")
        stage.AddRecord(Migger,"06:38.78","00:00.00","No")
        stage.AddRecord(Juraj,"07:41.02","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"06:22.28","00:00.00","No")
        stage.AddRecord(Tornado,"06:35.71","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"06:39.32","00:00.00","Yes")
        stage.AddRecord(datsun,"06:30.25","00:00.00","No")
        rally.stages[3] = stage;

        stage = new Stage("Glentrool");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/6/61/20181029_120643.png/revision/latest/scale-to-width-down/1000?cb=20181030151634"
        stage.AddRecord(SpartaX18,"16:07.89","00:00.00","No")
        stage.AddRecord(Migger,"16:56.48","00:00.00","No")
        stage.AddRecord(Juraj,"18:42.01","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"16:09.06","00:00.00","No")
        stage.AddRecord(Tornado,"16:21.97","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"16:53.91","00:00.00","Yes")
        stage.AddRecord(datsun,"16:52.00","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/52/20181029_121409.png/revision/latest/scale-to-width-down/1000?cb=20181030151727"
        stage.AddRecord(Juraj,"22:59.23","00:00.00","No")
        stage.AddRecord(SpartaX18,"17:20.71","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"17:04.02","00:00.00","No")
        stage.AddRecord(Migger,"18:26.28","00:00.00","No")
        stage.AddRecord(Tornado,"17:18.04","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"18:34.58","00:00.00","Yes")
        stage.AddRecord(datsun,"19:18.93","00:00.00","No")
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("Seat Jim Clark Memorial Rally")

        stage = new Stage("Moon and star");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/1/1f/20181029_124141.png/revision/latest/scale-to-width-down/1000?cb=20181030151936"
        stage.AddRecord(Juraj,"03:58.49","00:00.00","No")
        stage.AddRecord(SpartaX18,"03:24.84","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"03:22.76","00:00.00","No")
        stage.AddRecord(Tornado,"03:22.86","00:00.00","No")
        stage.AddRecord(Migger,"03:32.40","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"03:22.08","00:00.00","Yes")
        stage.AddRecord(datsun,"03:17.48","00:00.00","No")
        rally.stages[0] = stage;

        stage = new Stage("Bothwell");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/f1/IMG_20181029_125523.png/revision/latest/scale-to-width-down/1000?cb=20181030152101"
        stage.AddRecord(Juraj,"06:33.71","00:00.00","No")
        stage.AddRecord(SpartaX18,"05:33.20","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:25.11","00:00.00","No")
        stage.AddRecord(Tornado,"05:34.31","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:37.41","00:00.00","Yes")
        stage.AddRecord(Migger,"06:23.53","00:00.00","No")
        stage.AddRecord(datsun,"05:28.97","00:00.00","No")
        rally.stages[1] = stage;

        stage = new Stage("Whitchester");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9c/20181029_130316.png/revision/latest/scale-to-width-down/1000?cb=20181030152209"
        stage.AddRecord(Juraj,"05:32.56","00:00.00","No")
        stage.AddRecord(SpartaX18,"05:10.05","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:11.21","00:00.00","No")
        stage.AddRecord(Tornado,"05:03.01","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"04:59.51","00:00.00","Yes")
        stage.AddRecord(Migger,"05:55.91","00:00.00","No")
        stage.AddRecord(datsun,"05:00.18","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Eccles");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/5f/20181029_131113.png/revision/latest/scale-to-width-down/1000?cb=20181030152651"
        stage.AddRecord(Juraj,"05:54.61","00:00.00","No")
        stage.AddRecord(SpartaX18,"05:26.36","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:12.75","00:00.00","No")
        stage.AddRecord(Tornado,"05:26.53","00:00.00","No")
        stage.AddRecord(Migger,"06:44.99","00:00.00","No")
        stage.AddRecord(datsun,"05:31.00","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:07.87","00:00.00","Yes")
        rally.stages[3] = stage;

        stage = new Stage("Langton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/2/22/20181029_131731.png/revision/latest/scale-to-width-down/1000?cb=20181030153714"
        stage.AddRecord(Juraj,"02:06.22","00:00.00","No")
        stage.AddRecord(SpartaX18,"01:46.85","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"01:44.89","00:00.00","No")
        stage.AddRecord(Tornado,"01:48.24","00:00.00","No")
        stage.AddRecord(Migger,"01:52.96","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"01:42.94","00:00.00","Yes")
        stage.AddRecord(datsun,"01:44.37","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Fogo");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/d1/20181029_132242.png/revision/latest/scale-to-width-down/1000?cb=20181030153917"
        stage.AddRecord(Juraj,"06:19.02","00:00.00","No")
        stage.AddRecord(SpartaX18,"06:07.04","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:59.56","00:00.00","No")
        stage.AddRecord(Tornado,"05:57.08","00:00.00","No")
        stage.AddRecord(Migger,"06:25.72","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:48.31","00:00.00","Yes")
        stage.AddRecord(datsun,"06:01.26","00:00.00","No")
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("Stena Line Ulster Rally")

        stage = new Stage("Hamilton's Folly");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/59/20181031_124043.png/revision/latest/scale-to-width-down/1000?cb=20181031143937"
        stage.AddRecord(SpartaX18,"08:15.26","00:00.00","No")
        stage.AddRecord(Juraj,"09:41.70","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"08:16.33","00:00.00","No")
        rally.stages[0] = stage;

        stage = new Stage("Tyrones Ditches");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/52/20181102_110833.png/revision/latest/scale-to-width-down/1000?cb=20181102100921"
        stage.AddRecord(SpartaX18,"10:12.28","00:00.00","No")
        stage.AddRecord(Juraj,"11:59.45","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"10:17.28","00:00.00","No")
        rally.stages[1] = stage;

        stage = new Stage("Feeney");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/6/6a/20181102_112205.png/revision/latest/scale-to-width-down/1000?cb=20181102102233"
        stage.AddRecord(SpartaX18,"09:44.48","00:00.00","No")
        stage.AddRecord(Juraj,"11:08.60","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"09:51.20","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Parkanaur");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/c4/20181102_113015.png/revision/latest/scale-to-width-down/1000?cb=20181102103054"
        stage.AddRecord(SpartaX18,"10:06.36","00:00.00","No")
        stage.AddRecord(Juraj,"11:20.43","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"10:14.34","00:00.00","No")
        rally.stages[3] = stage;

        stage = new Stage("Lisnamuck");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/a/aa/20181102_162558.png/revision/latest/scale-to-width-down/1000?cb=20181102154611"
        stage.AddRecord(SpartaX18,"07:49.34","00:00.00","No")
        stage.AddRecord(Juraj,"08:52.09","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:59.04","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Tardree");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/87/20181102_164414.png/revision/latest/scale-to-width-down/1000?cb=20181102154703"
        stage.AddRecord(SpartaX18,"07:41.01","00:00.00","No")
        stage.AddRecord(Juraj,"08:28.08","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:49.57","00:00.00","No")
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }
    {
        rally = new Rally("Sony Manx International Rally")

        stage = new Stage("Port Soderick");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9e/20181103_130705.png/revision/latest/scale-to-width-down/1000?cb=20181103120822"
        stage.AddRecord(Juraj,"04:47.89","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"04:43.77","00:00.00","No")
        stage.AddRecord(SpartaX18,"04:46.79","00:00.00","No")
        rally.stages[0] = stage;

        stage = new Stage("Ballagyr");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/8a/20181103_132646.png/revision/latest/scale-to-width-down/1000?cb=20181103122735"
        stage.AddRecord(Juraj,"07:55.81","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:08.15","00:00.00","No")
        stage.AddRecord(SpartaX18,"07:11.87","00:00.00","No")
        rally.stages[1] = stage;

        stage = new Stage("Curraghs");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9b/20181103_185003.png/revision/latest/scale-to-width-down/1000?cb=20181103175253"
        stage.AddRecord(Juraj,"10:50.37","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"09:55.11","00:00.00","No")
        stage.AddRecord(SpartaX18,"09:49.42","00:00.00","No")
        rally.stages[2] = stage;

        stage = new Stage("Tholt-y-will");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/56/20181104_162834.png/revision/latest/scale-to-width-down/1000?cb=20181104152904"
        stage.AddRecord(Juraj,"04:06.20","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"03:39.07","00:00.00","No")
        rally.stages[3] = stage;

        stage = new Stage("Injerbreck");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/0c/20181105_084329.png/revision/latest/scale-to-width-down/1000?cb=20181126175459"
        stage.AddRecord(Juraj,"10:26.32","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"09:15.21","00:00.00","No")
        rally.stages[4] = stage;

        stage = new Stage("Cringle");
        stage.imageURL="https://vignette.wikia.nocookie.net/rc2000/images/3/3d/20181105_084909.png/revision/latest/scale-to-width-down/1000?cb=20181126175355"
        stage.AddRecord(Juraj,"11:41.78","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"10:26.68","00:00.00","No")
        rally.stages[5] = stage;

        contest.AddRally(rally)
    }

    return contest
}

