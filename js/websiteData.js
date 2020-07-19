function websiteData(){
    let website = new Website();

    let users = website.users;

    users.push(
        new User('Erwto', "pl"),
        new User('Migger', "pl"),
        new User('SpartaX18', "pl"),
        new User('XsaraTorrada', "pt"),
        new User('Lewsys', "br"),
        new User('Twajlot', "pl"),
        new User('sBinnala', "pl"),
        new User('Linotrix', "hr"),
        new User('SpartaRemixer', "pl"),
        new User('Juraj', ""),
        new User('datsun', ""),
        new User('Tornado', ""),
        new User('MidnightRunner', "")
    );

    let Spartax = website.GetUserByName("SpartaX18");
    let Linotrix = website.GetUserByName("Linotrix"); 

    game = website.game;

    let rally, stage, wr
    {
        rally = new Rally("Vauxhall Rally of Wales")

        stage = new Stage("Clocaenog Mid");
        wr = stage.AddArcadeWorldRecord(Spartax, "07:49.93", "Mitsubishi Lancer Evo V");  //default carName: Mitsubishi Lancer Evo V
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643160503861903361/unknown.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:50.26");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/642842956159647797/unknown.png"
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:58.59");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602937913344524288/ral_2019-07-22_20-59-22-32.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:57.59");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/665576938819158026/unknown.png"
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        wr = stage.AddArcadeWorldRecord(Spartax, "10:29.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602495347415187466/ral_2019-07-21_15-39-22-43.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "10:21.16");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/590959187173965833/ral_2019-06-19_19-39-53-30.png"
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        wr = stage.AddArcadeWorldRecord(Spartax, "10:45.47");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563069692659367946/RAL_2019-04-03_20-36-57-74.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "10:48.33");
        wr.proofs["image"] = "https://imgur.com/TW4ps9v"
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        wr = stage.AddArcadeWorldRecord(Spartax, "11:39.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563386838488711219/RAL_2019-04-04_17-37-24-15.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:46.72");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/722877023889915996/732334192779591832/unknown.png"
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        wr = stage.AddArcadeWorldRecord(Spartax, "09:31.70");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643461655648534529/unknown.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "09:35.20");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/593132745585197097/ral_2019-06-25_19-36-49-83.png"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Pirelli International Rally")

        stage = new Stage("Chirdonhead");
        stage.AddWorldRecord("15:51.43","15:53.33")
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        stage.AddWorldRecord("13:31.15","13:31.67")
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        stage.AddWorldRecord("11:44.92","11:54.83")
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        stage.AddWorldRecord("14:52.55","14:44.89")
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        stage.AddWorldRecord("05:47.14","05:44.93")
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        stage.AddWorldRecord("12:02.83","11:50.45")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("RSAC Scottish Rally")

        stage = new Stage("Twiglees");
        stage.AddWorldRecord("06:47.23","06:48.73")
        rally.stages[0] = stage;

        stage = new Stage("Yair");
        stage.AddWorldRecord("03:50.48","03:43.72")
        rally.stages[1] = stage;

        stage = new Stage("Cardrona");
        stage.AddWorldRecord("04:17.17","04:17.15")
        rally.stages[2] = stage;

        stage = new Stage("Black loch");
        stage.AddWorldRecord("05:10.41","05:16.84")
        rally.stages[3] = stage;

        stage = new Stage("Glentrool");
        stage.AddWorldRecord("13:18.71","13:19.30")
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        stage.AddWorldRecord("14:44.29","14:30.94")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Seat Jim Clark Memorial Rally")

        stage = new Stage("Moon and star");
        stage.AddWorldRecord("02:45.38","02:44.86")
        rally.stages[0] = stage;

        stage = new Stage("Bothwell");
        stage.AddWorldRecord("04:32.66","04:28.47")
        rally.stages[1] = stage;

        stage = new Stage("Whitchester");
        stage.AddWorldRecord("04:06.50","04:06.48")
        rally.stages[2] = stage;

        stage = new Stage("Eccles");
        stage.AddWorldRecord("04:23.68","04:17.49")
        rally.stages[3] = stage;

        stage = new Stage("Langton");
        stage.AddWorldRecord("01:22.60","01:24.08")
        rally.stages[4] = stage;

        stage = new Stage("Fogo");
        stage.AddWorldRecord("04:56.07","04:54.89")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Stena Line Ulster Rally")

        stage = new Stage("Hamilton's Folly");
        stage.AddWorldRecord("06:49.86","06:45.22")
        rally.stages[0] = stage;

        stage = new Stage("Tyrones Ditches");
        stage.AddWorldRecord("08:24.41","08:15.25")
        rally.stages[1] = stage;

        stage = new Stage("Feeney");
        stage.AddWorldRecord("08:06.96","07:57.61")
        rally.stages[2] = stage;

        stage = new Stage("Parkanaur");
        stage.AddWorldRecord("08:05.61","07:53.05")
        rally.stages[3] = stage;

        stage = new Stage("Lisnamuck");
        stage.AddWorldRecord("06:30.09","06:23.29")
        rally.stages[4] = stage;

        stage = new Stage("Tardree");
        stage.AddWorldRecord("06:24.53","06:17.34")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Sony Manx International Rally")

        stage = new Stage("Port Soderick");
        stage.AddWorldRecord("03:54.90","03:50.63")
        rally.stages[0] = stage;

        stage = new Stage("Ballagyr");
        stage.AddWorldRecord("05:43.58","05:51.81")
        rally.stages[1] = stage;

        stage = new Stage("Curraghs");
        stage.AddWorldRecord("07:58.60","07:55.07")
        rally.stages[2] = stage;

        stage = new Stage("Tholt-y-will");
        stage.AddWorldRecord("02:51.33","02:51.49")
        rally.stages[3] = stage;

        stage = new Stage("Injerbreck");
        stage.AddWorldRecord("07:26.61","07:27.49")
        rally.stages[4] = stage;

        stage = new Stage("Cringle");
        stage.AddWorldRecord("08:21.46","08:22.09")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }

    //SettingUp rally and Stage ids;  //Simulation order
    for(let rallyId = 0; rallyId < game.rallies.length; rallyId ++){
        let rally = game.rallies[rallyId];
        for(let stageId = 0; stageId < rally.stages.length; stageId++){
            let stage = rally.stages[stageId];
            stage.id = rallyId * game.rallies.length + stageId;
        }
        rally.id = rallyId;
    }

    return website;
}