function contestData(){
    if(typeof(website) === "undefined"){
        website = websiteData()
        console.log(website);
    }
    let contest  = new Contest("Magnetic Fields Memorial Invitational 2020");
    
    let participantColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    let Erwto = new Participant(website.GetUserByName('Erwto'), participantColor(), "Mitsubishi Lancer Evo V");
    let Migger = new Participant(website.GetUserByName('Migger'), participantColor(), "Peugeot 206 WRC");
    let SpartaX18 = new Participant(website.GetUserByName('SpartaX18'), participantColor(), "Mitsubishi Lancer Evo V");
    let XsaraTorrada = new Participant(website.GetUserByName('XsaraTorrada'), participantColor(), "Peugeot 206 WRC");
    let Lewsys = new Participant(website.GetUserByName('Lewsys'), participantColor(), "Subaru Impreza WRC");
    let Twajlot = new Participant(website.GetUserByName('Twajlot'), participantColor(), "Mitsubishi Lancer Evo IV");
    let sBinnala = new Participant(website.GetUserByName('sBinnala'), participantColor(), "Subaru Impreza WRC");
    let Linotrix = new Participant(website.GetUserByName('Linotrix'), participantColor(), "Peugeot 206 WRC");
    let SpartaRemixer = new Participant(website.GetUserByName('SpartaRemixer'), participantColor(), "Subaru Impreza WRC");
    contest.participants.push(Erwto, Migger, SpartaX18, XsaraTorrada, Lewsys, Twajlot, sBinnala, Linotrix, SpartaRemixer);

    contest.rallies = website.game.rallies;
    let rally, stage
    {
        rally = contest.rallies[0];  //Vauxall

        stage = rally.stages[0]; //Clocaenog
        //stage.AddRecord(Erwto,"09:54.33","00:00.00","No")
        
        stage = rally.stages[1]; //Penmachno
        stage = rally.stages[2]; //Myherin
        stage = rally.stages[3]; //Hafren
        stage = rally.stages[4]; //Dyfi
        stage = rally.stages[5]; //Gartheiniog
    }
    {
        rally = contest.rallies[1];  //Pirelli

        stage = rally.stages[0]; //Chirdonhead
        //stage.AddRecord(Erwto,"09:54.33","00:00.00","No")
        
        stage = rally.stages[1]; //Falstone
        stage = rally.stages[2]; //Kershope
        stage = rally.stages[3]; //Pundershaw
        stage = rally.stages[4]; //Riccarton
        stage = rally.stages[5]; //Newcastleton
    }
    {
        rally = contest.rallies[2];  //RSAC

        stage = rally.stages[0]; 
        stage = rally.stages[1]; 
        stage = rally.stages[2]; 
        stage = rally.stages[3];
        stage = rally.stages[4];
        stage = rally.stages[5];
    }
    {
        rally = contest.rallies[3];  //Seat Jim Clark

        stage = rally.stages[0];   
        stage = rally.stages[1]; 
        stage = rally.stages[2]; 
        stage = rally.stages[3];
        stage = rally.stages[4];
        stage = rally.stages[5];
    }
    {
        rally = contest.rallies[4];  //Stena Line

        stage = rally.stages[0];   
        stage = rally.stages[1]; 
        stage = rally.stages[2]; 
        stage = rally.stages[3];
        stage = rally.stages[4];
        stage = rally.stages[5];
    }
    {
        rally = contest.rallies[5];  //Sony Manx

        stage = rally.stages[0];   
        stage = rally.stages[1]; 
        stage = rally.stages[2]; 
        stage = rally.stages[3];
        stage = rally.stages[4];
        stage = rally.stages[5];
    }

    return contest
}
