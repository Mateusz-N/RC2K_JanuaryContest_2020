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
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/3/3f/20181105_134049.png/revision/latest/scale-to-width-down/1000?cb=20181105214042"
        wr = stage.AddArcadeWorldRecord(Spartax, "07:49.93", "Mitsubishi Lancer Evo V");  //default carName: Mitsubishi Lancer Evo V
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643160503861903361/unknown.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:50.26");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/642842956159647797/unknown.png"
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/de/20181023_124545.png/revision/latest/scale-to-width-down/1000?cb=20181024165338"
        wr = stage.AddArcadeWorldRecord(Spartax, "06:58.59");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602937913344524288/ral_2019-07-22_20-59-22-32.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:57.59");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/665576938819158026/unknown.png"
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/88/20181023_124729.png/revision/latest/scale-to-width-down/1000?cb=20181024165520"
        wr = stage.AddArcadeWorldRecord(Spartax, "10:29.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602495347415187466/ral_2019-07-21_15-39-22-43.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "10:21.16");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/590959187173965833/ral_2019-06-19_19-39-53-30.png"
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/a/a9/20181023_133833.png/revision/latest/scale-to-width-down/1000?cb=20181024165638"
        wr = stage.AddArcadeWorldRecord(Spartax, "10:45.47");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563069692659367946/RAL_2019-04-03_20-36-57-74.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "10:48.33");
        wr.proofs["image"] = "https://imgur.com/TW4ps9v"
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/4/47/20181023_133956.png/revision/latest/scale-to-width-down/1000?cb=20181024170159"
        wr = stage.AddArcadeWorldRecord(Spartax, "11:39.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563386838488711219/RAL_2019-04-04_17-37-24-15.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:46.72");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/722877023889915996/732334192779591832/unknown.png"
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/cb/20181023_134059.png/revision/latest/scale-to-width-down/1000?cb=20181024170338"
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
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/b/b7/20181023_152615.png/revision/latest/scale-to-width-down/1000?cb=20181024170442"
        stage.AddWorldRecord("15:51.43","15:53.33")
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/7/7f/20181025_190452.png/revision/latest/scale-to-width-down/1000?cb=20181025185513"
        stage.AddWorldRecord("13:31.15","13:31.67")
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/ff/20181025_190653.png/revision/latest/scale-to-width-down/1000?cb=20181025190937"
        stage.AddWorldRecord("11:44.92","11:54.83")
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/c2/20181025_191048.png/revision/latest/scale-to-width-down/1000?cb=20181025191511"
        stage.AddWorldRecord("14:52.55","14:44.89")
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/1/12/20181025_192252.png/revision/latest/scale-to-width-down/1000?cb=20181025191823"
        stage.AddWorldRecord("05:47.14","05:44.93")
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/04/20181025_192426.png/revision/latest/scale-to-width-down/1000?cb=20181025192203"
        stage.AddWorldRecord("12:02.83","11:50.45")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("RSAC Scottish Rally")

        stage = new Stage("Twiglees");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/03/20181028_011942.png/revision/latest/scale-to-width-down/1000?cb=20181027232048"
        stage.AddWorldRecord("06:47.23","06:48.73")
        rally.stages[0] = stage;

        stage = new Stage("Yair");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/d4/20181028_125844.png/revision/latest/scale-to-width-down/1000?cb=20181028115940"
        stage.AddWorldRecord("03:50.48","03:43.72")
        rally.stages[1] = stage;

        stage = new Stage("Cardrona");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/7/79/20181029_115018.png/revision/latest/scale-to-width-down/1000?cb=20181030151339"
        stage.AddWorldRecord("04:17.17","04:17.15")
        rally.stages[2] = stage;

        stage = new Stage("Black loch");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/f1/20181029_115542.png/revision/latest/scale-to-width-down/1000?cb=20181030151437"
        stage.AddWorldRecord("05:10.41","05:16.84")
        rally.stages[3] = stage;

        stage = new Stage("Glentrool");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/6/61/20181029_120643.png/revision/latest/scale-to-width-down/1000?cb=20181030151634"
        stage.AddWorldRecord("13:18.71","13:19.30")
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/52/20181029_121409.png/revision/latest/scale-to-width-down/1000?cb=20181030151727"
        stage.AddWorldRecord("14:44.29","14:30.94")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Seat Jim Clark Memorial Rally")

        stage = new Stage("Moon and star");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/1/1f/20181029_124141.png/revision/latest/scale-to-width-down/1000?cb=20181030151936"
        stage.AddWorldRecord("02:45.38","02:44.86")
        rally.stages[0] = stage;

        stage = new Stage("Bothwell");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/f/f1/IMG_20181029_125523.png/revision/latest/scale-to-width-down/1000?cb=20181030152101"
        stage.AddWorldRecord("04:32.66","04:28.47")
        rally.stages[1] = stage;

        stage = new Stage("Whitchester");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9c/20181029_130316.png/revision/latest/scale-to-width-down/1000?cb=20181030152209"
        stage.AddWorldRecord("04:06.50","04:06.48")
        rally.stages[2] = stage;

        stage = new Stage("Eccles");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/5f/20181029_131113.png/revision/latest/scale-to-width-down/1000?cb=20181030152651"
        stage.AddWorldRecord("04:23.68","04:17.49")
        rally.stages[3] = stage;

        stage = new Stage("Langton");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/2/22/20181029_131731.png/revision/latest/scale-to-width-down/1000?cb=20181030153714"
        stage.AddWorldRecord("01:22.60","01:24.08")
        rally.stages[4] = stage;

        stage = new Stage("Fogo");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/d/d1/20181029_132242.png/revision/latest/scale-to-width-down/1000?cb=20181030153917"
        stage.AddWorldRecord("04:56.07","04:54.89")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Stena Line Ulster Rally")

        stage = new Stage("Hamilton's Folly");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/59/20181031_124043.png/revision/latest/scale-to-width-down/1000?cb=20181031143937"
        stage.AddWorldRecord("06:49.86","06:45.22")
        rally.stages[0] = stage;

        stage = new Stage("Tyrones Ditches");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/52/20181102_110833.png/revision/latest/scale-to-width-down/1000?cb=20181102100921"
        stage.AddWorldRecord("08:24.41","08:15.25")
        rally.stages[1] = stage;

        stage = new Stage("Feeney");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/6/6a/20181102_112205.png/revision/latest/scale-to-width-down/1000?cb=20181102102233"
        stage.AddWorldRecord("08:06.96","07:57.61")
        rally.stages[2] = stage;

        stage = new Stage("Parkanaur");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/c/c4/20181102_113015.png/revision/latest/scale-to-width-down/1000?cb=20181102103054"
        stage.AddWorldRecord("08:05.61","07:53.05")
        rally.stages[3] = stage;

        stage = new Stage("Lisnamuck");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/a/aa/20181102_162558.png/revision/latest/scale-to-width-down/1000?cb=20181102154611"
        stage.AddWorldRecord("06:30.09","06:23.29")
        rally.stages[4] = stage;

        stage = new Stage("Tardree");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/87/20181102_164414.png/revision/latest/scale-to-width-down/1000?cb=20181102154703"
        stage.AddWorldRecord("06:24.53","06:17.34")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Sony Manx International Rally")

        stage = new Stage("Port Soderick");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9e/20181103_130705.png/revision/latest/scale-to-width-down/1000?cb=20181103120822"
        stage.AddWorldRecord("03:54.90","03:50.63")
        rally.stages[0] = stage;

        stage = new Stage("Ballagyr");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/8/8a/20181103_132646.png/revision/latest/scale-to-width-down/1000?cb=20181103122735"
        stage.AddWorldRecord("05:43.58","05:51.81")
        rally.stages[1] = stage;

        stage = new Stage("Curraghs");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/9/9b/20181103_185003.png/revision/latest/scale-to-width-down/1000?cb=20181103175253"
        stage.AddWorldRecord("07:58.60","07:55.07")
        rally.stages[2] = stage;

        stage = new Stage("Tholt-y-will");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/5/56/20181104_162834.png/revision/latest/scale-to-width-down/1000?cb=20181104152904"
        stage.AddWorldRecord("02:51.33","02:51.49")
        rally.stages[3] = stage;

        stage = new Stage("Injerbreck");
        stage.imageURL = "https://vignette.wikia.nocookie.net/rc2000/images/0/0c/20181105_084329.png/revision/latest/scale-to-width-down/1000?cb=20181126175459"
        stage.AddWorldRecord("07:26.61","07:27.49")
        rally.stages[4] = stage;

        stage = new Stage("Cringle");
        stage.imageURL="https://vignette.wikia.nocookie.net/rc2000/images/3/3d/20181105_084909.png/revision/latest/scale-to-width-down/1000?cb=20181126175355"
        stage.AddWorldRecord("08:21.46","08:22.09")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }

    return website;
}