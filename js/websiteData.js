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
        new User('SpartaRemixerPL', "pl"),
        new User('Juraj', "hr"),
        new User('SForman135LS', "cz"),
        new User('Tornado', "unknown"),
        new User('MidnightRunner', "unknown"),
        new User('Pendzior', "pl"),
        new User('Ephemeral', "pl"),
        new User('Woeringen1288', "be"),
        new User('BrosTheThird', "unknown"),
        new User('Karel Pipa', "cz"),
        new User('Tribell', "pl"),
        new User('TheKetrab', "pl"),
        new User('Komuh', "pl"),
        new User('Redchili385', "br"),
    );

    let Spartax = website.GetUserByName("SpartaX18");
    let Linotrix = website.GetUserByName("Linotrix"); 
    let Pendzior = website.GetUserByName("Pendzior"); 
    let Ephemeral = website.GetUserByName("Ephemeral"); 
    let Komuh = website.GetUserByName("Komuh");
    let Redchili385 = website.GetUserByName("Redchili385");

    game = website.game;

    let rally, stage, wr
    {
        rally = new Rally("Vauxhall Rally of Wales")

        stage = new Stage("Clocaenog Mid");
        wr = stage.AddArcadeWorldRecord(Spartax, "07:49.93", "Mitsubishi Lancer Evo V");  //default carName: Mitsubishi Lancer Evo V
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643160503861903361/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15dXnikLRcK_BFB-I6YYUb9zlhXw8lz7F/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "07:57.26");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=QKiH47lL0DE"
        wr = stage.AddArcadeWorldRecord(Redchili385, "07:54.72");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564039995485061120/unknown.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:50.26");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/642842956159647797/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Eysd-Annx8t4wPuFn8N4Vu0YrqxWd1oO/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "07:49.41");
        wr.proofs["image"] = "https://media.discordapp.net/attachments/971874971225825311/988414928157294592/clocaenog.png?width=918&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "08:25.78");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=dFjGjY6xsIM"
        wr = stage.AddSimulationWorldRecord(Redchili385, "08:11.13");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/554861402171375616/unknown.png"
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:54.23");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602937913344524288/ral_2019-07-22_20-59-22-32.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fSfBIzTLcPXUumpA_PrnCdrb8U4NPfYQ/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "07:28.71");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=xjyYk8jLrB0"
        wr = stage.AddArcadeWorldRecord(Redchili385, "06:56.51");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/739325930186604554/Captura_de_Tela_1660.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:57.59");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/665576938819158026/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Rm51O0jpn04Z6FWRv2Ndm-XdRC1sRnb3/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:54.57", "Subaru Impreza WRC");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/795280558309244958/IMG_20210103_142034.png"
        wr.proofs["youtube"] = "https://youtu.be/2mQ29WWXics"
        wr = stage.AddSimulationWorldRecord(Komuh, "07:06.14");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=7q6kvcFmB3U"
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        wr = stage.AddArcadeWorldRecord(Spartax, "10:29.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602495347415187466/ral_2019-07-21_15-39-22-43.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sitURmPeP2iDqIYkPgEYiWT4UUQSGlVa/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Ephemeral, "10:20.94");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/995432830744133743/unknown.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "10:21.16");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/590959187173965833/ral_2019-06-19_19-39-53-30.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1NIqVSpYY2AMwkMOPbgLl_pple-CYZ1Xj/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "10:12.98");
        wr.proofs["image"] = "https://media.discordapp.net/attachments/971874971225825311/988428427390505010/jebenimyhe.png"
        wr = stage.AddSimulationWorldRecord(Komuh, "10:42.27");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=_W7sl1s8NKE"
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        wr = stage.AddArcadeWorldRecord(Spartax, "10:38.32");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/739413690218053712/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1IFEzOelf-iSkShRJhLpRUtWXVCZF2Us4/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "10:46.16");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=yCERTHSA1Kc"
        wr = stage.AddArcadeWorldRecord(Redchili385, "10:40.26");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/739291477678489620/Captura_de_Tela_1654.png"
        wr.proofs["replay"] = "https://cdn.discordapp.com/attachments/199990758089031680/739407028589559838/replay83"
        wr = stage.AddSimulationWorldRecord(Spartax, "10:41.61");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/754070113879326810/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/16GK45h8ft5iDo7VGikxS8R8esPg4--tO/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "10:32.70");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/790641444431462401/813366843523596308/SPOILER_hafren.png"
        wr = stage.AddSimulationWorldRecord(Komuh, "10:52.92");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=5y-q1F8ue2w"
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        wr = stage.AddArcadeWorldRecord(Spartax, "11:39.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563386838488711219/RAL_2019-04-04_17-37-24-15.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1pSlujAII8HnY3ej-k6pLI4F61EULndjo/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Linotrix, "11:37.18");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/971874971225825311/1009169375716180008/dyfi_arc_wr.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "11:41.34");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=zHkYSmNdAkY"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:38.33");
        wr.proofs["image"] = "https://media.discordapp.net/attachments/199990758089031680/734862572234473542/unknown.png?width=708&height=566"
        wr.proofs["replay"] = "https://drive.google.com/file/d/113Rm7DNSU2VY3AQeyFzKOj1VY-t8u2Jg/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "11:33.74");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/971874971225825311/1009169374906699977/dyfi_1.png"
        wr = stage.AddSimulationWorldRecord(Komuh, "11:56.09");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=wl8-XGOtkuU"
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        wr = stage.AddArcadeWorldRecord(Spartax, "09:31.70");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643461655648534529/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12kxU-ivpkMZ6_ouNQPjbjrD6KE8iq941/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "09:54.55");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=LjMiyA_upFE"
        wr = stage.AddArcadeWorldRecord(Redchili385, "09:34.09");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/419267523070918656/593230937807126528/Captura_de_Tela_151.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "09:35.20");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/593132745585197097/ral_2019-06-25_19-36-49-83.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1LAibzVfwtBV6cPj4DQvrpkN_EEw3qd2J/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "09:34.51");
        wr.proofs["image"] = "https://media.discordapp.net/attachments/971874971225825311/988725445539295272/garthe.png?width=922&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "09:50.82");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=mJl2MkEMY48"
        wr = stage.AddSimulationWorldRecord(Redchili385, "09:48.86");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/554845456564224020/unknown.png"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Pirelli International Rally")

        stage = new Stage("Chirdonhead");
        wr = stage.AddArcadeWorldRecord(Spartax, "15:51.43")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563762910505992192/RAL_2019-04-05_18-30-43-64.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1qF3KRj54Kij3H0cQPO3FHZtiLYu7NDaM/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Ephemeral, "15:44.12")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/995049023306203156/unknown.png" 
        wr = stage.AddArcadeWorldRecord(Komuh, "16:12.99");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=9SOITmU0qCY"
        wr = stage.AddSimulationWorldRecord(Spartax, "15:53.33")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563769158332841985/RAL_2019-04-05_18-57-04-38.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1TTrayN9gAQIhnHk-YB4brfwZ3rGFGOwX/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Ephemeral, "15:40.00")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/990703129953726495/unknown.png?width=854&height=683"
        wr = stage.AddSimulationWorldRecord(Komuh, "16:04.48");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=kyeqRhGoOnA"
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        wr = stage.AddArcadeWorldRecord(Spartax, "13:31.15")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602855973706530826/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1XZAQyGkQskVQSWYQpj0Shzc3UJu1yO-m/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "14:06.76");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=frPySVuXh_8"
        wr = stage.AddSimulationWorldRecord(Spartax, "13:29.72")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/971874971225825311/1008351322778636430/2022-08-13_19h42_53.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1C5s0KHN1eYmJz-uPnf8-OFZUhZ7Y7KFb/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "13:29.82")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/790641444431462401/813843114372104242/falstone.png?width=845&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "14:00.61");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=TfEFPeRMlW8"
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        wr = stage.AddArcadeWorldRecord(Spartax, "11:44.92")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/598557835768496131/ral_2019-07-10_18-54-10-78.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13UDjNziFsEIBHDFr95uyUyw9R4-co-RN/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Ephemeral, "11:35.16")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/996857592380928080/unknown.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "12:24.23", "Subaru Impreza WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=EFJS1cvuMhg"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:54.83")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563789530092797952/RAL_2019-04-05_20-17-50-98.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1RgyjjWR3gD6Yw2W7VVNWjYPMEYUSBGQ6/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Ephemeral, "11:50.26")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/997223232740528208/unknown.png"
        wr = stage.AddSimulationWorldRecord(Komuh, "11:56.99");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=ZrcLyeeiXlQ"
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        wr = stage.AddArcadeWorldRecord(Spartax, "14:52.55")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/590245178070138887/ral_2019-06-17_20-23-08-81.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1yDs2uVdXQddnV1a-2GHW4K9Y1Zs8HdOP/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "15:09.21");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=N-ejSooTAUw"
        wr = stage.AddSimulationWorldRecord(Spartax, "14:44.89")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/668175721235218439/unknown.png"
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        wr = stage.AddArcadeWorldRecord(Spartax, "05:47.14")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564402474132439040/RAL_2019-04-07_12-53-38-89.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Jm57COYfBccv4iRJrwusHVieb27u7ihV/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "05:51.58");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=p1iuYIqyN24"
        wr = stage.AddSimulationWorldRecord(Spartax, "05:44.93")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564415456039927821/RAL_2019-04-07_13-42-23-34.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fYIlGdo6i_88BK-9zEHH19ubaH6_ejyf/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "05:47.57");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=2AKeJfR3gCo"
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        wr = stage.AddArcadeWorldRecord(Spartax, "12:02.83")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602505503439847434/ral_2019-07-21_16-18-57-68.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17TbyI0UQAvhBbr6GugnxotJkzncvtDCK/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Ephemeral, "11:48.80")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/995772220607574066/unknown.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "12:22.89");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=tChe510EWZw"
        wr = stage.AddArcadeWorldRecord(Redchili385, "12:08.88");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/354700576"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:50.45")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564074789355126805/RAL_2019-04-06_15-08-06-98.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1KI5T34yn0lLLi456Zk03Pu9NV8_UDDO7/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "11:50.01")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/823616078840201236/newcastleton_s.png?width=847&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "11:52.18");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=m9RZSdAsAY0"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("RSAC Scottish Rally")

        stage = new Stage("Twiglees");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:47.23")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/562321025308819456/RAL_2019-04-01_19-02-40-39.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17TbyI0UQAvhBbr6GugnxotJkzncvtDCK/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "06:47.63");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=QXyXBUH1Kxo"
        wr = stage.AddArcadeWorldRecord(Redchili385, "06:51.25");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/331446294"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:46.48")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/735938192297164860/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1KI5T34yn0lLLi456Zk03Pu9NV8_UDDO7/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:40.80")
        wr = stage.AddSimulationWorldRecord(Komuh, "06:55.04", "Peugeot 206 WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=pir0lXrMGbQ"
        rally.stages[0] = stage;

        stage = new Stage("Yair");
        wr = stage.AddArcadeWorldRecord(Spartax, "03:50.48")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/599579184880418851/ral_2019-07-13_14-32-58-16.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/11moLKqgxUqKxWMNFKWsf_t9sZJPHNZyW/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "03:54.19");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=x0oUYixfjiU"
        wr = stage.AddArcadeWorldRecord(Redchili385, "03:50.97");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/577261116535865354/Captura_de_Tela_114.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "03:43.72")
        wr.proofs["youtube"] = "https://youtu.be/3MhkFmuwWZc"
        wr.proofs["replay"] = "https://drive.google.com/file/d/14NRsUUenUcOpdoYX3JnHcXX0aMe4VADB/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "03:43.43")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/990929709187629066/yair.png?width=902&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "04:39.18", "Subaru Impreza WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=yQP5Y1WhNNU"
        rally.stages[1] = stage;

        stage = new Stage("Cardrona");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:17.17")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643438765221871616/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1M-uCj11aZFispqsAWHwprTW65ehTNqXK/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "04:24.06");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=2lSz_-KSGSk"
        wr = stage.AddArcadeWorldRecord(Redchili385, "04:19.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564129089485799434/unknown.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:17.15")
        wr.proofs["youtube"] = "https://youtu.be/gvLHngIxurs"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1OgeMUYr-yryERgmviqZOn2gKup5g0oXy/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "04:31.64", "Peugeot 206 WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=lNq-FZ3Mwgs"
        rally.stages[2] = stage;

        stage = new Stage("Black loch");
        wr = stage.AddArcadeWorldRecord(Spartax, "05:10.41")
        wr.proofs["youtube"] = "https://youtu.be/TqrXsNgk2fw"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1LWRumQTu118fKkAqVcQc6Ayqf7k53B4C/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "05:13.38");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=WnBl792vg_c"
        wr = stage.AddArcadeWorldRecord(Redchili385, "05:17.28");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/331444839"
        wr = stage.AddSimulationWorldRecord(Spartax, "05:16.84")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561917353357606943/RAL_2019-03-31_16-18-38-81.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1pYKj79hdvNLiUt5UcQf9W_IKphx00AwV/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "05:12.14")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/823511422561419276/black_loch.png?width=844&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "05:19.34");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=cjzrElDgzkg"
        rally.stages[3] = stage;

        stage = new Stage("Glentrool");
        wr = stage.AddArcadeWorldRecord(Spartax, "13:18.71")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602923380215250975/ral_2019-07-22_20-01-07-74.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1gzw7xOlqcMRaH0mvCQIyIk2s_KqJmULu/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Redchili385, "13:23.77");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/562121956359405568/unknown.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "13:19.30")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/603619411881885696/ral_2019-07-24_18-07-16-59.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-1oDbGl4oZQSnHXySM2FS_4JKmmBHBds/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "14:16.72", "Subaru Impreza WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=0brT4-tIJBM"
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        wr = stage.AddArcadeWorldRecord(Spartax, "14:24.16")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/722877023889915996/753344251961671770/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1HItplUMM9pkAqrBP4SyRy4faBenw6-D5/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "14:49.90");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=aid0EA1x2MY"
        wr = stage.AddArcadeWorldRecord(Redchili385, "15:06.74");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/322307392"
        wr = stage.AddSimulationWorldRecord(Spartax, "14:17.08")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/731595150312210432/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1zJIsN1osnvkpQxFtOQCmXL4SWNvkt1WF/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "14:10.52")
        wr.proofs["youtube"] = "https://youtu.be/pzfpNr6HdHg"
        wr = stage.AddSimulationWorldRecord(Komuh, "14:44.25");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=h1k_WquCOsk"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Seat Jim Clark Memorial Rally")

        stage = new Stage("Moon and star");
        wr = stage.AddArcadeWorldRecord(Spartax, "02:45.38")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/578638904169594919/ral_2019-05-16_19-44-05-54.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "02:49.33");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=SIYMV_qrnEI"
        wr = stage.AddSimulationWorldRecord(Linotrix, "02:44.04")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/997580933802766396/Rally_Championship_2000_Mobil_1_Screenshot_2022.07.15_-_21.04.48.18.png?width=901&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "02:47.99");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=bwTtTlM5ttI"
        rally.stages[0] = stage;

        stage = new Stage("Bothwell");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:32.66")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561240189486497813/RAL_2019-03-29_18-27-42-36.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/158UiqZp8O3RWU8FWOHZpXLLCSQiW5Eiu/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "04:44.92");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=Dj1dGWw01vg"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:28.47")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/593420278760210442/ral_2019-06-26_14-39-44-44.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1mDxE3CWmxF1VDFwWlz107o5Bzqyli7ZY/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "04:36.21");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=nkovLGKISME"
        rally.stages[1] = stage;

        stage = new Stage("Whitchester");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:06.50")
        wr.proofs["youtube"] = "https://youtu.be/JGf25KQlbFA"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19OsFcXlNqJJLcP-fsw5IStHRLuEJn4T7/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "04:09.31");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=VabeWNDSyhk"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:06.48")
        wr.proofs["youtube"] = "https://youtu.be/d9Dm7m6UFhE"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Ng1YchKo_fdA-SPJCmA5myE9VyPqzooj/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "04:08.07");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=BwDaJtetmLs"
        rally.stages[2] = stage;

        stage = new Stage("Eccles");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:23.68")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/576381280044711976/ral_2019-05-10_14-13-07-16.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "04:24.37");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=56gwKdxYouM"
        wr = stage.AddSimulationWorldRecord(Linotrix, "04:17.49")
        wr.proofs["youtube"] = "https://imgur.com/lRpyaWE"
        wr = stage.AddSimulationWorldRecord(Komuh, "04:22.03");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=H8sE9zNQpNw"
        rally.stages[3] = stage;

        stage = new Stage("Langton");
        wr = stage.AddArcadeWorldRecord(Linotrix, "01:22.60")
        wr.proofs["image"] = "https://imgur.com/wzQoiif"
        wr = stage.AddArcadeWorldRecord(Komuh, "01:23.99");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=SQKKShqWZq8"
        wr = stage.AddArcadeWorldRecord(Redchili385, "01:24.25");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/318309791"
        wr = stage.AddSimulationWorldRecord(Spartax, "01:24.08")
        wr.proofs["youtube"] = "https://youtu.be/LO8pvvNDO1E"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Hwqb8m7YbcXOm_0z-tDfa6n2M7Ko_I_y/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "01:23.94")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/823511552174063617/langton_s.png?width=852&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "01:28.72", "Subaru Impreza WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=YdRRg7Py9M0"
        wr = stage.AddSimulationWorldRecord(Redchili385, "01:24.77");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/318619617"
        rally.stages[4] = stage;

        stage = new Stage("Fogo");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:56.07")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/576052922064830467/ral_2019-05-09_16-26-19-18.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "04:57.46");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=KVyw2DKPHXY"
        wr = stage.AddArcadeWorldRecord(Redchili385, "04:58.23");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/319615526"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:54.89")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/575649315356409878/ral_2019-05-08_13-44-25-91.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "04:53.91")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/823511587150757888/fogo_s.png?width=842&height=676"
        wr = stage.AddSimulationWorldRecord(Komuh, "04:55.05");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=DYr_Wlcs4bA"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Stena Line Ulster Rally")

        stage = new Stage("Hamilton's Folly");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:49.86")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/578944062825168935/ral_2019-05-17_15-56-38-23.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "06:54.44");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=CxMi-gBHglE"
        wr = stage.AddArcadeWorldRecord(Redchili385, "06:57.63");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/325384864"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:43.48")
        wr.proofs["youtube"] = "https://youtu.be/O25XpQYvUsU"
        wr = stage.AddSimulationWorldRecord(Komuh, "07:05.72", "Peugeot 206 WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=_oDXzWkOYQ4"
        rally.stages[0] = stage;

        stage = new Stage("Tyrones Ditches");
        wr = stage.AddArcadeWorldRecord(Spartax, "08:17.60")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/754299147884036116/unknown.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "08:27.35");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=A8K9RQqNvcE"
        wr = stage.AddSimulationWorldRecord(Linotrix, "08:15.25")
        wr.proofs["image"] = "https://imgur.com/YJSDLuv"
        wr = stage.AddSimulationWorldRecord(Komuh, "09:05.56");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=NpkyZhQiEgk"
        rally.stages[1] = stage;

        stage = new Stage("Feeney");
        wr = stage.AddArcadeWorldRecord(Spartax, "08:06.96")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564168765382721552/RAL_2019-04-06_21-24-17-29.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1J0y-2a1fTkL2uf3zGGUkhPAbUZS2ucwg/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "08:09.18");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=_CFP0vNosYE"
        wr = stage.AddArcadeWorldRecord(Redchili385, "08:48.18");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/319585541"
        wr = stage.AddSimulationWorldRecord(Linotrix, "07:55.11")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/788814534600949820/IMG-20201216-WA0000.jpg"
        wr = stage.AddSimulationWorldRecord(Komuh, "08:05.97");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=ivQPGvOU1IA"
        rally.stages[2] = stage;

        stage = new Stage("Parkanaur");
        wr = stage.AddArcadeWorldRecord(Linotrix, "08:05.61")
        wr.proofs["image"] = "https://imgur.com/vnwpHeL"
        wr = stage.AddArcadeWorldRecord(Komuh, "08:25.48");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=DZUBJ2ybqc4"
        wr = stage.AddArcadeWorldRecord(Redchili385, "08:06.57");
        wr.proofs["image"] = "https://media.discordapp.net/attachments/199990758089031680/546812652425445379/unknown.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "07:51.64")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/971874971225825311/994660761039294554/SPOILER_Rally_Championship_2000_Mobil_1_Screenshot_2022.07.07_-_19.45.39.94.png?width=901&height=676"
        wr = stage.AddSimulationWorldRecord(Redchili385, "08:05.03")
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/379705754"
        rally.stages[3] = stage;

        stage = new Stage("Lisnamuck");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:30.09")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561631500987138055/RAL_2019-03-30_20-22-44-54.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1bCuZNDsh9GlKms6BlDtoXmqfEb4R7ZUz/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "06:33.39");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=cCYkOJNaR4A"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:23.29")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/651487935199182870/653959114128490498/Screenshot_35.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:23.32")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/606460293417271306/ral_2019-08-01_14-16-06-50.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/14cWYHRTdu7sGW8Blvu5zd_BFkiBZl2Np/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "06:26.61");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=_3HGAmY6Eqw"
        rally.stages[4] = stage;

        stage = new Stage("Tardree");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:24.53")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561907371111219204/RAL_2019-03-31_15-39-03-61.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1zx05c_9uA1_auuelXnhYtcr3S7jCffsM/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "06:26.23");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=Y9ZBUCs3i4A"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:17.34")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/651487935199182870/653942381778960384/Screenshot_33.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:17.36")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/607654212687626293/ral_2019-08-04_19-56-19-07.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/16WbOn7v1yfg5IvFZ107lFYam1BbkGVIV/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "06:19.75");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=S7exhL1ZefM"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Sony Manx International Rally")

        stage = new Stage("Port Soderick");
        wr = stage.AddArcadeWorldRecord(Pendzior, "03:49.88")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/826145727604195348/unknown.png"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=KKMIj5avWMk"
        wr = stage.AddArcadeWorldRecord(Spartax, "03:54.90");
        wr.proofs["image"] = "https://www.youtube.com/watch?v=7_dloEb8Aq4"
        wr.proofs["replay"] = "https://cdn.discordapp.com/attachments/376168301908459530/603921262330249226/ral_2019-07-25_14-07-10-22.png"
        wr = stage.AddArcadeWorldRecord(Komuh, "03:56.37");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=7_dloEb8Aq4"
        wr = stage.AddArcadeWorldRecord(Redchili385, "03:51.19");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/804477252192436244/Captura_de_Tela_3176.png"
        wr = stage.AddArcadeWorldRecord(Linotrix, "03:51.47");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/804423739550203944/xd.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "03:50.63")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/607538409740959744/ral_2019-08-04_13-39-50-56.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1OHK9SygZedSb9s1zJQzFS3xK1QHUNHiB/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "04:42.36", "Subaru Impreza WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=QA34RPYvI_k"
        wr = stage.AddSimulationWorldRecord(Linotrix, "03:55.36");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/805521123352772618/lol.png"
        rally.stages[0] = stage;

        stage = new Stage("Ballagyr");
        wr = stage.AddArcadeWorldRecord(Spartax, "05:43.58")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/608287264664977428/ral_2019-08-06_15-15-42-63.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1r92zzgbjxq4EjrhcnznK-fTtttbnztxi/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "05:47.08");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=zMCkn9lSpQk"
        wr = stage.AddArcadeWorldRecord(Redchili385, "05:50.77");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/331842706"
        wr = stage.AddSimulationWorldRecord(Spartax, "05:48.12")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/731946403122642975/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1NfF5vioWcgLpxN4loOtFlcOP6LHjzQkq/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "05:58.87");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=gYWUO2uKMYc"
        wr = stage.AddSimulationWorldRecord(Linotrix, "05:53.78", "Subaru Impreza WRC")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/900817040342913074/xddd.png"
        rally.stages[1] = stage;

        stage = new Stage("Curraghs");
        wr = stage.AddArcadeWorldRecord(Spartax, "07:58.60")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/560864115619266573/RAL_2019-03-28_17-33-16-59.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1QkpHvK6xSyb8-h3uBVJsBgY6jP6rsLb-/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "08:08.45");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=uE2-53OUTcY"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:55.07")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/608277993953165313/ral_2019-08-06_14-38-36-75.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1No7XaQlwPPuTcAAAuR-FtD-JWPls_M05/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "07:59.02");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=pQOsWg3GoIM"
        rally.stages[2] = stage;

        stage = new Stage("Tholt-y-will");
        wr = stage.AddArcadeWorldRecord(Spartax, "02:51.33")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/603209347694198784/ral_2019-07-23_14-57-49-48.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15crs4ZUl0FDpJY1BSNem_eFcAbDN23iR/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "02:59.13", "Peugeot 206 WRC");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=VmPpvtAWnCk"
        wr = stage.AddArcadeWorldRecord(Redchili385, "02:53.92");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/562372442006224896/unknown.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "02:51.49")
        wr.proofs["youtube"] = "https://youtu.be/_txlYyBRQXQ"
        wr = stage.AddSimulationWorldRecord(Komuh, "02:57.52");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=1B21m1UAq-U"
        rally.stages[3] = stage;

        stage = new Stage("Injerbreck");
        wr = stage.AddArcadeWorldRecord(Spartax, "07:26.61")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561620219500429343/RAL_2019-03-30_19-37-47-64.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12BqLdy_dI7CyIrb7PVpcatiq_jNR7yrP/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "07:42.07");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=cLr-DBvkY64"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:27.49")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561609751222550535/RAL_2019-03-30_18-56-08-82.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/175gmbWNiYWQzLxXlah7EI4jg03WRnmQG/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Komuh, "07:41.03");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=Z-MMJCZwoCo"
        rally.stages[4] = stage;

        stage = new Stage("Cringle");
        wr = stage.AddArcadeWorldRecord(Spartax, "08:21.46")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564153475525640202/RAL_2019-04-06_20-23-30-99.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19nZNpQQpGyrZ2lxtqaODtl8HmV8zfrbA/view?usp=sharing"
        wr = stage.AddArcadeWorldRecord(Komuh, "08:23.50");
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=zMQMz_6ycIU"
        wr = stage.AddArcadeWorldRecord(Redchili385, "08:24.08");
        wr.proofs["twitch"] = "https://www.twitch.tv/videos/325383978"
        wr = stage.AddSimulationWorldRecord(Linotrix, "08:15.94")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/823159008801456128/cringle_dirty.png?width=901&height=676"
        wr = stage.AddSimulationWorldRecord(Spartax, "08:22.09")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564098853058641920/RAL_2019-04-06_16-46-42-08.png"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }

    loadOldRecords(website)

    //SettingUp rally and Stage ids;  //Simulation order
    for(let rallyId = 0; rallyId < game.rallies.length; rallyId ++){
        let rally = game.rallies[rallyId];
        for(let stageId = 0; stageId < rally.stages.length; stageId++){
            let stage = rally.stages[stageId];
            stage.index = stageId
            stage.id = rallyId * game.rallies.length + stageId;
        }
        rally.id = rallyId;
    }

    return website;
}

const oldRecords = `Clocaenog Mid arcade: 08:44.19 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Clocaenog Mid sim: 08:34.20 by Luka Rutar (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Penmachno South arcade: 07:37.72 by Wild Swede (se) — http://web.archive.org/web/20050503195148/http://members.xoom.virgilio.it/pchapman/rev_wales_ss2.htm
Penmachno South sim: 07:08.03 by Wild Swede (se) — https://web.archive.org/web/20020106002211/http://www.activescore.com/cgi-bin/rally/20new.cgi?sf=20new.sup
Myherin arcade: 11:00.85 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Myherin sim: 11:11.45 by Emilio (es) — https://web.archive.org/web/20040914004645/http://www.activescore.com/rally/championship/zip_ind_ral5.html
Hafren arcade: 12:15.56 by Wild Swede (se) — http://web.archive.org/web/20050503195219/http://members.xoom.virgilio.it/pchapman/rev_wales_ss4.htm
Hafren sim: 11:03.53 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Dyfi arcade: 12:33.01 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Dyfi sim: 12:02.96 by Beanbag (unknown) — https://web.archive.org/web/20011118011354/http://www.activescore.com/cgi-bin/rally/20new.cgi?sf=20new.sup
Gartheiniog arcade: 10:58.16 by Wild Swede (se) — http://web.archive.org/web/20050503195305/http://members.xoom.virgilio.it/pchapman/rev_wales_ss6.htm
Gartheiniog sim: 10:18.71 by Beanbag (unknown) — https://web.archive.org/web/20011118011354/http://www.activescore.com/cgi-bin/rally/20new.cgi?sf=20new.sup

Chirdonhead arcade: 17:52.64 by Wild N Wooly (gb-wls) — http://web.archive.org/web/20050306111141/http://members.xoom.virgilio.it/pchapman/rev_pirelli_ss1.htm
Chirdonhead sim: 18:05.43 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Falstone arcade: 14:14.09 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Falstone sim: 14:03.87 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Kershope arcade: 12:54.21 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Kershope sim: 11:57.93 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Pundershaw arcade: 15:41.04 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Pundershaw sim: 15:30.70 by Bruno de Ceuster (be) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Riccarton arcade: 06:31.22 by Wild N Wooly (gb-wls) — http://web.archive.org/web/20050306113955/http://members.xoom.virgilio.it/pchapman/rev_pirelli_ss5.htm
Riccarton sim: 05:56.20 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Newcastleton arcade: 12:41.65 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Newcastleton sim: 12:43.50 by Bruno de Ceuster (be) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm

Twiglees arcade: 07:29.14 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Twiglees sim: 06:59.00 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Yair arcade: 04:07.17 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Yair sim: 04:00.09 by Luka Rutar (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Cardrona arcade: 04:41.60 by Bruno de Ceuster (be) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Cardrona sim: 04:33.08 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Black Loch arcade: 06:13.51 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Black Loch sim: 05:28.40 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Glentrool arcade: 13:39.56 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Glentrool sim: 15:08.40 by Vex Musa (hr) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Ae arcade: 15:30.97 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Ae sim: 14:52.90 by Wild Swede (se) — https://web.archive.org/web/20011118011354/http://www.activescore.com/cgi-bin/rally/20new.cgi?sf=20new.sup

Moon and Star arcade: 02:57.43 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Moon and Star sim: 02:56.29 by Luka Rutar (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Bothwell arcade: 05:19.71 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Bothwell sim: 04:47.97 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Whitchester arcade: 04:10.98 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Whitchester sim: 04:12.08 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Eccles arcade: 05:10.61 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Eccles sim: 04:30.67 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Langton arcade: 01:25.64 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Langton sim: 01:29.50 by Daniel Arber (gb) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Fogo arcade: 05:01.26 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Fogo sim: 05:03.79 by Luka Rutar (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm

Hamilton's Folly arcade: 07:14.03 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Hamilton's Folly sim: 06:50.01 by Wild Swede (se) — https://web.archive.org/web/20020919130941/http://www.activescore.com/cgi-bin/rally/20new.cgi?sf=20new.sup
Tyrone's Ditches arcade: 09:23.66 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Tyrone's Ditches sim: 08:41.50 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Feeney arcade: 08:19.27 by Wild Swede (se) — https://web.archive.org/web/20020106002211/http://www.activescore.com/cgi-bin/rally/20new.cgi?sf=20new.sup
Feeney sim: 08:36.47 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Parkanaur arcade: 08:19.93 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Parkanaur sim: 09:00.75 by Daniel Arber (gb) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Lisnamuck arcade: 06:42.88 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Lisnamuck sim: 06:41.07 by Luka Rutar (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Tardree arcade: 06:36.30 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Tardree sim: 06:24.02 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm

Port Soderick arcade: 04:03.10 by Bruno de Ceuster (be) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Port Soderick sim: 03:54.59 by Beanbag (unknown) — https://web.archive.org/web/20020919130941/http://www.activescore.com/cgi-bin/rally/20new.cgi?sf=20new.sup
Ballagyr arcade: 06:28.10 by Ian Noble (gb) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Ballagyr sim: 06:13.36 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Curraghs arcade: 08:14.45 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Curraghs sim: 08:10.93 by Rowan Dean (au) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Tholt-y-Will arcade: 03:06.95 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Tholt-y-Will sim: 03:01.96 by Luka Rutar (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Injerbreck arcade: 08:57.10 by Goesta Kunze (de) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Injerbreck sim: 08:19.60 by Vex Musa (hr) — https://web.archive.org/web/20041013051950/http://www.explosiveracing.net/rallychampionshipleague/stage_records.htm
Cringle arcade: 
Cringle sim: 08:30.15 by cf (gr) — https://web.archive.org/web/20040703194953/http://www.activescore.com:80/rally/rc.html`

function loadOldRecords(website){
    const oldRallyRecords = oldRecords.split('\n\n')
    const records = oldRallyRecords.map(rally => rally.split('\n'))
    const recordsDetails = records.map((rally, rallyIndex) => rally.map((record, stageIndex) => {
        const stageAndDetails = record.split(': ', 2)
        const detailsString = stageAndDetails[1]
        if(detailsString.length == 0){
            return null
        }
        const timeAndDetails = detailsString.split(' by ', 2)
        const time = timeAndDetails[0]
        const userAndProof = timeAndDetails[1].split(' — ', 2)
        const user = userAndProof[0]
        const proofUrl = userAndProof[1]
        return {
            time,
            userName: user.substring(0, user.indexOf(' (')),
            nationality: user.substring(user.indexOf('(')+1, user.indexOf(')')),
            proofUrl,
            stageIndex: ~~(stageIndex/2),
            rallyIndex: rallyIndex,
            isSimulationDirection: stageIndex%2 != 0
        }
    })).flat().filter(record => record != null)
    const uniqueUsers = {}
    recordsDetails.forEach(record => {
        const userString = record.userName
        if(!(userString in uniqueUsers)){
            const user = new User(userString, record.nationality)
            website.users.push(user)
            uniqueUsers[userString] = user
        }
    })
    const game = website.game
    recordsDetails.forEach(record => {
        const stage = game.rallies[record.rallyIndex].stages[record.stageIndex]
        let wr
        if(record.isSimulationDirection){
            wr = stage.AddSimulationWorldRecord(uniqueUsers[record.userName], record.time)
        }
        else{
            wr = stage.AddArcadeWorldRecord(uniqueUsers[record.userName], record.time)
        }
        wr.proofs["link"] = record.proofUrl
    })
}