class Contest{
    constructor(name){
        this.name = name
        this.participants = []
        this.rallies = []
    }
    AddRecord(RallyID, StageID, participantName, time){
        
    }
    GetParticipantIDByName(name){
        function checkName(participant){
            if(participant.name == name)
                return true
            false
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
}

class Stage{
    constructor(name){
        this.name = name;
        this.records = []
    }
    AddRecord(participant, time){
        this.records.push(new Record(participant,time))
    }
}

class Record{
    constructor(participant, time){
        this.participant = participant;
        this.time = time;
    }
}

class Participant{
    constructor(name, color){
        this.name = name
        this.color = color
    }
}

function contestData(){
    let contest  = new Contest("Rally Championship January 2020 Contest")
    let participantsNames = ["SpartaX","Redchili385","Linotrix","SpartaRemixer"]
    let participants = []
    for(let i = 0; i<participantsNames.length; i++){
        participants.push(new Participant(participantsNames[i], "#880000"))
    }
    contest.participants = participants

    let SpartaX = contest.GetParticipantByName(participantsNames[0]);
    let Redchili385 = contest.GetParticipantByName(participantsNames[1]);
    let Linotrix = contest.GetParticipantByName(participantsNames[2]);
    let SpartaRemixer = contest.GetParticipantByName(participantsNames[3]);
    
    let rallies = []

    let rally, stage
    {
        rally = new Rally("Vauxhall Rally of Wales")

        stage = new Stage("Clocaenog Mid");
        stage.AddRecord(SpartaX,"01:02:13")
        stage.AddRecord(Redchili385,"01:01:57")
        stage.AddRecord(Linotrix,"01:02:22")
        stage.AddRecord(SpartaRemixer,"01:45:89")
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        stage.AddRecord(SpartaX,"01:24:08")
        stage.AddRecord(SpartaRemixer,"01:21:58")
        stage.AddRecord(Linotrix,"01:18:15")
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        rally.stages[5] = stage;

        rallies[0] = rally
    }
    {
        rally = new Rally("Pirelli International Rally")

        stage = new Stage("Chirdonhead");
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        rally.stages[5] = stage;

        rallies[1] = rally
    }
    {
        rally = new Rally("RSAC Scottish Rally")

        stage = new Stage("Twiglees");
        rally.stages[0] = stage;

        stage = new Stage("Yair");
        rally.stages[1] = stage;

        stage = new Stage("Cardrona");
        rally.stages[2] = stage;

        stage = new Stage("Black loch");
        rally.stages[3] = stage;

        stage = new Stage("Glentrool");
        stage.AddRecord(SpartaX,"00:23:15")
        stage.AddRecord(Redchili385,"00:23:57")
        stage.AddRecord(Linotrix,"00:25:00")
        stage.AddRecord(SpartaRemixer,"00:26:27")
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        rally.stages[5] = stage;

        rallies[2] = rally
    }
    {
        rally = new Rally("Seat Jim Clark Memorial Rally")

        stage = new Stage("Moon and star");
        rally.stages[0] = stage;

        stage = new Stage("Bothwell");
        rally.stages[1] = stage;

        stage = new Stage("Whitchester");
        rally.stages[2] = stage;

        stage = new Stage("Eccles");
        rally.stages[3] = stage;

        stage = new Stage("Langton");
        rally.stages[4] = stage;

        stage = new Stage("Fogo");
        rally.stages[5] = stage;

        rallies[3] = rally
    }
    {
        rally = new Rally("Stena Line Ulster Rally")

        stage = new Stage("Hamilton's Folly");
        rally.stages[0] = stage;

        stage = new Stage("Tyrones Ditches");
        rally.stages[1] = stage;

        stage = new Stage("Feeney");
        rally.stages[2] = stage;

        stage = new Stage("Parkanaur");
        rally.stages[3] = stage;

        stage = new Stage("Lisnamuck");
        rally.stages[4] = stage;

        stage = new Stage("Tardree");
        rally.stages[5] = stage;

        rallies[4] = rally
    }
    {
        rally = new Rally("Sony Manx International Rally")

        stage = new Stage("Port Soderick");
        rally.stages[0] = stage;

        stage = new Stage("Ballagyr");
        rally.stages[1] = stage;

        stage = new Stage("Curraghs");
        rally.stages[2] = stage;

        stage = new Stage("Tholt-y-will");
        rally.stages[3] = stage;

        stage = new Stage("Injerbreck");
        rally.stages[4] = stage;

        stage = new Stage("Cringle");
        rally.stages[5] = stage;

        rallies[5] = rally
    }

    contest.rallies = rallies

    return contest
}

