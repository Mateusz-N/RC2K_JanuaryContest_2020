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
        this.imageURL = "";
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
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/3/3f/20181105_134049.png/revision/latest/scale-to-width-down/1000?cb=20181105214042"
        stage.AddRecord(SpartaX,"01:02:13")
        stage.AddRecord(Redchili385,"01:01:57")
        stage.AddRecord(Linotrix,"01:02:22")
        stage.AddRecord(SpartaRemixer,"01:45:89")
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/de/20181023_124545.png/revision/latest/scale-to-width-down/1000?cb=20181024165338"
        stage.AddRecord(SpartaX,"01:24:08")
        stage.AddRecord(SpartaRemixer,"01:21:58")
        stage.AddRecord(Linotrix,"01:18:15")
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/88/20181023_124729.png/revision/latest/scale-to-width-down/1000?cb=20181024165520"
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/a/a9/20181023_133833.png/revision/latest/scale-to-width-down/1000?cb=20181024165638"
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/4/47/20181023_133956.png/revision/latest/scale-to-width-down/1000?cb=20181024170159"
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/cb/20181023_134059.png/revision/latest/scale-to-width-down/1000?cb=20181024170338"
        rally.stages[5] = stage;

        rallies[0] = rally
    }
    {
        rally = new Rally("Pirelli International Rally")

        stage = new Stage("Chirdonhead");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/b/b7/20181023_152615.png/revision/latest/scale-to-width-down/1000?cb=20181024170442"
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/7/7f/20181025_190452.png/revision/latest/scale-to-width-down/1000?cb=20181025185513"
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/ff/20181025_190653.png/revision/latest/scale-to-width-down/1000?cb=20181025190937"
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/c2/20181025_191048.png/revision/latest/scale-to-width-down/1000?cb=20181025191511"
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/1/12/20181025_192252.png/revision/latest/scale-to-width-down/1000?cb=20181025191823"
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/04/20181025_192426.png/revision/latest/scale-to-width-down/1000?cb=20181025192203"
        rally.stages[5] = stage;

        rallies[1] = rally
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
        stage.AddRecord(SpartaX,"00:23:15")
        stage.AddRecord(Redchili385,"00:23:57")
        stage.AddRecord(Linotrix,"00:25:00")
        stage.AddRecord(SpartaRemixer,"00:26:27")
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/52/20181029_121409.png/revision/latest/scale-to-width-down/1000?cb=20181030151727"
        rally.stages[5] = stage;

        rallies[2] = rally
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

        rallies[3] = rally
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

        rallies[4] = rally
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

        rallies[5] = rally
    }

    contest.rallies = rallies

    return contest
}

