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
        new User('Juraj', "hr"),
        new User('datsun', "cz"),
        new User('Tornado', ""),
        new User('MidnightRunner', ""),
        new User('Pendzior', "pl")
    );

    let Spartax = website.GetUserByName("SpartaX18");
    let Linotrix = website.GetUserByName("Linotrix"); 
    let Pendzior = website.GetUserByName("Pendzior"); 

    game = website.game;

    let rally, stage, wr
    {
        rally = new Rally("Vauxhall Rally of Wales")

        stage = new Stage("Clocaenog Mid");
        wr = stage.AddArcadeWorldRecord(Spartax, "07:49.93", "Mitsubishi Lancer Evo V");  //default carName: Mitsubishi Lancer Evo V
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643160503861903361/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15dXnikLRcK_BFB-I6YYUb9zlhXw8lz7F/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:50.26");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/642842956159647797/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Eysd-Annx8t4wPuFn8N4Vu0YrqxWd1oO/view?usp=sharing"
        rally.stages[0] = stage
        
        stage = new Stage("Penmachno South");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:54.23");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602937913344524288/ral_2019-07-22_20-59-22-32.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fSfBIzTLcPXUumpA_PrnCdrb8U4NPfYQ/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:57.59");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/665576938819158026/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Rm51O0jpn04Z6FWRv2Ndm-XdRC1sRnb3/view?usp=sharing"
        rally.stages[1] = stage

        stage = new Stage("Myherin");
        wr = stage.AddArcadeWorldRecord(Spartax, "10:29.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602495347415187466/ral_2019-07-21_15-39-22-43.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sitURmPeP2iDqIYkPgEYiWT4UUQSGlVa/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "10:21.16");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/590959187173965833/ral_2019-06-19_19-39-53-30.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1NIqVSpYY2AMwkMOPbgLl_pple-CYZ1Xj/view?usp=sharing"
        rally.stages[2] = stage;

        stage = new Stage("Hafren");
        wr = stage.AddArcadeWorldRecord(Spartax, "10:38.32");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/739413690218053712/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1IFEzOelf-iSkShRJhLpRUtWXVCZF2Us4/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "10:48.33");
        wr.proofs["image"] = "https://imgur.com/TW4ps9v"
        rally.stages[3] = stage;

        stage = new Stage("Dyfi");
        wr = stage.AddArcadeWorldRecord(Spartax, "11:39.81");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563386838488711219/RAL_2019-04-04_17-37-24-15.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1pSlujAII8HnY3ej-k6pLI4F61EULndjo/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:38.33");
        wr.proofs["image"] = "https://media.discordapp.net/attachments/199990758089031680/734862572234473542/unknown.png?width=708&height=566"
        wr.proofs["replay"] = "https://drive.google.com/file/d/113Rm7DNSU2VY3AQeyFzKOj1VY-t8u2Jg/view?usp=sharing"
        rally.stages[4] = stage;

        stage = new Stage("Gartheiniog");
        wr = stage.AddArcadeWorldRecord(Spartax, "09:31.70");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643461655648534529/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12kxU-ivpkMZ6_ouNQPjbjrD6KE8iq941/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "09:35.20");
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/593132745585197097/ral_2019-06-25_19-36-49-83.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1LAibzVfwtBV6cPj4DQvrpkN_EEw3qd2J/view?usp=sharing"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Pirelli International Rally")

        stage = new Stage("Chirdonhead");
        wr = stage.AddArcadeWorldRecord(Spartax, "15:51.43")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563762910505992192/RAL_2019-04-05_18-30-43-64.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1qF3KRj54Kij3H0cQPO3FHZtiLYu7NDaM/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "15:53.33")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563769158332841985/RAL_2019-04-05_18-57-04-38.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1TTrayN9gAQIhnHk-YB4brfwZ3rGFGOwX/view?usp=sharing"
        rally.stages[0] = stage;

        stage = new Stage("Falstone");
        wr = stage.AddArcadeWorldRecord(Spartax, "13:31.15")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602855973706530826/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1XZAQyGkQskVQSWYQpj0Shzc3UJu1yO-m/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "13:31.67")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/607654212880564224/ral_2019-08-04_21-19-59-24.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1oQ3c-llYN2_A9Cg-bCWZeuln3psWT3m9/view?usp=sharing"
        rally.stages[1] = stage;

        stage = new Stage("Kershope");
        wr = stage.AddArcadeWorldRecord(Spartax, "11:44.92")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/598557835768496131/ral_2019-07-10_18-54-10-78.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13UDjNziFsEIBHDFr95uyUyw9R4-co-RN/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:54.83")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/563789530092797952/RAL_2019-04-05_20-17-50-98.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1RgyjjWR3gD6Yw2W7VVNWjYPMEYUSBGQ6/view?usp=sharing"
        rally.stages[2] = stage;

        stage = new Stage("Pundershaw");
        wr = stage.AddArcadeWorldRecord(Spartax, "14:52.55")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/590245178070138887/ral_2019-06-17_20-23-08-81.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1yDs2uVdXQddnV1a-2GHW4K9Y1Zs8HdOP/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "14:44.89")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/668175721235218439/unknown.png"
        rally.stages[3] = stage;

        stage = new Stage("Riccarton");
        wr = stage.AddArcadeWorldRecord(Spartax, "05:47.14")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564402474132439040/RAL_2019-04-07_12-53-38-89.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Jm57COYfBccv4iRJrwusHVieb27u7ihV/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "05:44.93")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564415456039927821/RAL_2019-04-07_13-42-23-34.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fYIlGdo6i_88BK-9zEHH19ubaH6_ejyf/view?usp=sharing"
        rally.stages[4] = stage;

        stage = new Stage("Newcastleton");
        wr = stage.AddArcadeWorldRecord(Spartax, "12:02.83")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602505503439847434/ral_2019-07-21_16-18-57-68.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17TbyI0UQAvhBbr6GugnxotJkzncvtDCK/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "11:50.45")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564074789355126805/RAL_2019-04-06_15-08-06-98.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1KI5T34yn0lLLi456Zk03Pu9NV8_UDDO7/view?usp=sharing"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("RSAC Scottish Rally")

        stage = new Stage("Twiglees");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:47.23")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/562321025308819456/RAL_2019-04-01_19-02-40-39.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17TbyI0UQAvhBbr6GugnxotJkzncvtDCK/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "06:46.48")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/735938192297164860/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1KI5T34yn0lLLi456Zk03Pu9NV8_UDDO7/view?usp=sharing"
        rally.stages[0] = stage;

        stage = new Stage("Yair");
        wr = stage.AddArcadeWorldRecord(Spartax, "03:50.48")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/599579184880418851/ral_2019-07-13_14-32-58-16.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/11moLKqgxUqKxWMNFKWsf_t9sZJPHNZyW/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "03:43.72")
        wr.proofs["youtube"] = "https://youtu.be/3MhkFmuwWZc"
        wr.proofs["replay"] = "https://drive.google.com/file/d/14NRsUUenUcOpdoYX3JnHcXX0aMe4VADB/view?usp=sharing"
        rally.stages[1] = stage;

        stage = new Stage("Cardrona");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:17.17")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/643438765221871616/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1M-uCj11aZFispqsAWHwprTW65ehTNqXK/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:17.15")
        wr.proofs["youtube"] = "https://youtu.be/gvLHngIxurs"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1OgeMUYr-yryERgmviqZOn2gKup5g0oXy/view?usp=sharing"
        rally.stages[2] = stage;

        stage = new Stage("Black loch");
        wr = stage.AddArcadeWorldRecord(Spartax, "05:10.41")
        wr.proofs["youtube"] = "https://youtu.be/TqrXsNgk2fw"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1LWRumQTu118fKkAqVcQc6Ayqf7k53B4C/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "05:16.84")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561917353357606943/RAL_2019-03-31_16-18-38-81.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1pYKj79hdvNLiUt5UcQf9W_IKphx00AwV/view?usp=sharing"
        rally.stages[3] = stage;

        stage = new Stage("Glentrool");
        wr = stage.AddArcadeWorldRecord(Spartax, "13:18.71")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/602923380215250975/ral_2019-07-22_20-01-07-74.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1gzw7xOlqcMRaH0mvCQIyIk2s_KqJmULu/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "13:19.30")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/603619411881885696/ral_2019-07-24_18-07-16-59.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-1oDbGl4oZQSnHXySM2FS_4JKmmBHBds/view?usp=sharing"
        rally.stages[4] = stage;

        stage = new Stage("Ae");
        wr = stage.AddArcadeWorldRecord(Spartax, "14:24.16")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/722877023889915996/753344251961671770/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1HItplUMM9pkAqrBP4SyRy4faBenw6-D5/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "14:17.08")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/731595150312210432/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1zJIsN1osnvkpQxFtOQCmXL4SWNvkt1WF/view?usp=sharing"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Seat Jim Clark Memorial Rally")

        stage = new Stage("Moon and star");
        wr = stage.AddArcadeWorldRecord(Spartax, "02:45.38")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/578638904169594919/ral_2019-05-16_19-44-05-54.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "02:44.37")
        wr.proofs["image"] = "https://media.discordapp.net/attachments/576495084015452191/738120648861417565/Screenshot_313.png?width=903&height=677"
        rally.stages[0] = stage;

        stage = new Stage("Bothwell");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:32.66")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561240189486497813/RAL_2019-03-29_18-27-42-36.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/158UiqZp8O3RWU8FWOHZpXLLCSQiW5Eiu/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:28.47")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/593420278760210442/ral_2019-06-26_14-39-44-44.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1mDxE3CWmxF1VDFwWlz107o5Bzqyli7ZY/view?usp=sharing"
        rally.stages[1] = stage;

        stage = new Stage("Whitchester");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:06.50")
        wr.proofs["youtube"] = "https://youtu.be/JGf25KQlbFA"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19OsFcXlNqJJLcP-fsw5IStHRLuEJn4T7/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:06.48")
        wr.proofs["youtube"] = "https://youtu.be/d9Dm7m6UFhE"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Ng1YchKo_fdA-SPJCmA5myE9VyPqzooj/view?usp=sharing"
        rally.stages[2] = stage;

        stage = new Stage("Eccles");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:23.68")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/576381280044711976/ral_2019-05-10_14-13-07-16.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "04:17.49")
        wr.proofs["youtube"] = "https://imgur.com/lRpyaWE"
        rally.stages[3] = stage;

        stage = new Stage("Langton");
        wr = stage.AddArcadeWorldRecord(Linotrix, "01:22.60")
        wr.proofs["image"] = "https://imgur.com/wzQoiif"
        wr = stage.AddSimulationWorldRecord(Spartax, "01:24.08")
        wr.proofs["youtube"] = "https://youtu.be/LO8pvvNDO1E"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Hwqb8m7YbcXOm_0z-tDfa6n2M7Ko_I_y/view?usp=sharing"
        stage.AddWorldRecord("01:22.60","01:24.08")
        rally.stages[4] = stage;

        stage = new Stage("Fogo");
        wr = stage.AddArcadeWorldRecord(Spartax, "04:56.07")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/576052922064830467/ral_2019-05-09_16-26-19-18.png"
        wr = stage.AddSimulationWorldRecord(Spartax, "04:54.89")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/575649315356409878/ral_2019-05-08_13-44-25-91.png"
        stage.AddWorldRecord("04:56.07","04:54.89")
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Stena Line Ulster Rally")

        stage = new Stage("Hamilton's Folly");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:49.86")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/578944062825168935/ral_2019-05-17_15-56-38-23.png"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:45.22")
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=cb7fRDMz-pw"
        rally.stages[0] = stage;

        stage = new Stage("Tyrones Ditches");
        wr = stage.AddArcadeWorldRecord(Spartax, "08:24.41")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561223763631538191/RAL_2019-03-29_17-22-28-75.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1s6P2p8qzZ1mJLXxiaJpesrDqqTcdhQ3w/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "08:15.25")
        wr.proofs["image"] = "https://imgur.com/YJSDLuv"
        rally.stages[1] = stage;

        stage = new Stage("Feeney");
        wr = stage.AddArcadeWorldRecord(Spartax, "08:06.96")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564168765382721552/RAL_2019-04-06_21-24-17-29.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1J0y-2a1fTkL2uf3zGGUkhPAbUZS2ucwg/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "07:57.61")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/373971436139708419/645566078721851422/chic.png"
        rally.stages[2] = stage;

        stage = new Stage("Parkanaur");
        wr = stage.AddArcadeWorldRecord(Linotrix, "08:05.61")
        wr.proofs["image"] = "https://imgur.com/vnwpHeL"
        wr = stage.AddSimulationWorldRecord(Linotrix, "07:53.05")
        wr.proofs["image"] = "https://imgur.com/h4RLKCd"
        rally.stages[3] = stage;

        stage = new Stage("Lisnamuck");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:30.09")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561631500987138055/RAL_2019-03-30_20-22-44-54.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1bCuZNDsh9GlKms6BlDtoXmqfEb4R7ZUz/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:23.29")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/651487935199182870/653959114128490498/Screenshot_35.png"
        rally.stages[4] = stage;

        stage = new Stage("Tardree");
        wr = stage.AddArcadeWorldRecord(Spartax, "06:24.53")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561907371111219204/RAL_2019-03-31_15-39-03-61.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1zx05c_9uA1_auuelXnhYtcr3S7jCffsM/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "06:17.34")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/651487935199182870/653942381778960384/Screenshot_33.png"
        rally.stages[5] = stage;

        game.AddRally(rally)
    }
    {
        rally = new Rally("Sony Manx International Rally")

        stage = new Stage("Port Soderick");
        wr = stage.AddArcadeWorldRecord(Pendzior, "03:53.83")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/747241052099969095/Port_Soderick_WR.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15xUy2Sybw_d0pnoJ5QzAEhEgX40WhHEH/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "03:50.63")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/607538409740959744/ral_2019-08-04_13-39-50-56.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1OHK9SygZedSb9s1zJQzFS3xK1QHUNHiB/view?usp=sharing"
        stage.AddWorldRecord("03:53.83","03:50.63")
        rally.stages[0] = stage;

        stage = new Stage("Ballagyr");
        wr = stage.AddArcadeWorldRecord(Spartax, "05:43.58")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/608287264664977428/ral_2019-08-06_15-15-42-63.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1r92zzgbjxq4EjrhcnznK-fTtttbnztxi/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "05:48.12")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/731946403122642975/unknown.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1NfF5vioWcgLpxN4loOtFlcOP6LHjzQkq/view?usp=sharing"
        rally.stages[1] = stage;

        stage = new Stage("Curraghs");
        wr = stage.AddArcadeWorldRecord(Spartax, "07:58.60")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/560864115619266573/RAL_2019-03-28_17-33-16-59.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1QkpHvK6xSyb8-h3uBVJsBgY6jP6rsLb-/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:55.07")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/608277993953165313/ral_2019-08-06_14-38-36-75.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1No7XaQlwPPuTcAAAuR-FtD-JWPls_M05/view?usp=sharing"
        rally.stages[2] = stage;

        stage = new Stage("Tholt-y-will");
        wr = stage.AddArcadeWorldRecord(Spartax, "02:51.33")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/603209347694198784/ral_2019-07-23_14-57-49-48.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15crs4ZUl0FDpJY1BSNem_eFcAbDN23iR/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "02:51.49")
        wr.proofs["youtube"] = "https://youtu.be/_txlYyBRQXQ"
        rally.stages[3] = stage;

        stage = new Stage("Injerbreck");
        wr = stage.AddArcadeWorldRecord(Spartax, "07:26.61")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561620219500429343/RAL_2019-03-30_19-37-47-64.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12BqLdy_dI7CyIrb7PVpcatiq_jNR7yrP/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Spartax, "07:27.49")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/561609751222550535/RAL_2019-03-30_18-56-08-82.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/175gmbWNiYWQzLxXlah7EI4jg03WRnmQG/view?usp=sharing"
        rally.stages[4] = stage;

        stage = new Stage("Cringle");
        wr = stage.AddArcadeWorldRecord(Spartax, "08:21.46")
        wr.proofs["image"] = "https://cdn.discordapp.com/attachments/199990758089031680/564153475525640202/RAL_2019-04-06_20-23-30-99.png"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19nZNpQQpGyrZ2lxtqaODtl8HmV8zfrbA/view?usp=sharing"
        wr = stage.AddSimulationWorldRecord(Linotrix, "08:21.64")
        wr.proofs["youtube"] = "https://youtu.be/lk8xp0ccvbY"
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