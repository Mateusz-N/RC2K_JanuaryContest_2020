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
        wr = stage.AddRecord(Erwto, "09:13.08", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1jQ_PeSaMC6DNrEjKqI9wTWgY6PgM4amV/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1E4LQ-65A4m6gSohVN7P7lC9flSYqEicA/view?usp=sharing"
        wr = stage.AddRecord(Migger, "08:41.23", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1-IdW6kNnEe3cK5oJp4xawIn8G-CXTAtV/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-IvnFO7kNELredbHQthzW7u6Rj84r3N6/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "08:14.30", "00:10.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1lXFg2edBaAaMvBqoUG5ZOgGJb_jqIrPR/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Qv3Jl5h8m2RKzZ05410_vlXMgbWOQms0/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "09:29.02", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1yynI6-4-jAOXenyhCXZGs4tN0nXPh9vJ/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1z8TCKoxYlnlD3Drc9y7x_W_lgXN6T9fg/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/pmmDqx_lXF4"
        wr = stage.AddRecord(Lewsys, "10:36.49", "00:05.00", "Yes")
        wr.proofs["youtube"] = "https://youtu.be/m0y5ON8T5ko"
        wr = stage.AddRecord(Twajlot, "09:21.12", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1-d5pcL2sBvi6Bj5ouZG4R4WM8oh4L_bD/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-vHedy7dpI1L2J-uarPmFsmCAfe97WCu/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "09:58.75", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EORZDbiZlp--Ju1VFLC-IrED7ooT4o6C/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sARRVxWk6zzfJlh2Lkr4wFIHCsP628-t/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "08:35.49", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1xxF-sgHCuHKFkc2rbZTPghjSt_v50PIw/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1SSB1zHOYvlgrg2Io7Kws4_4qY4KzkpJX/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "08:58.39", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1_yjCt5ZOhbwkMidxTJYS095tK_MdlqEz/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1oX61GgzuC-JCmWv7CyTRUXjiq5Vb3AHb/view?usp=sharing"
        
        stage = rally.stages[1]; //Penmachno
        wr = stage.AddRecord(Erwto, "08:04.63", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YY0IQwRqj3c9pu-_6BfCSYz0NW9Oj1ZH/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1iCjNr7ILC4qFpzrw7MYNXCgDx822lUji/view?usp=sharing"
        wr = stage.AddRecord(Migger, "07:47.72", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1-GI8uIaKTI88gM8zDhXe6ZNh2WOpFLIZ/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/16_IvUTe46UcvR2Pon1eWoUrWJgzBUIu_/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "07:11.32", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hAqON3uYa79Y5DZOph1EhhEe49HvO3Gv/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1W58hiO1cgpQh6hweRVt7x42UlzGZ1G4A/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "08:07.13", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1z4c0MkE3-nCd6as6ZTODuWgmOeAYWbLS/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1z917hMdjEomYuZ_qgYGFklJTqebUwQzs/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/pmmDqx_lXF4"
        wr = stage.AddRecord(Lewsys, "10:20.81", "00:00.00", "Yes")
        wr.proofs["youtube"] = "https://youtu.be/m0y5ON8T5ko"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1zkhy8yOQ2PKSJS_Pd0M59IIN2z24ai9A/view?usp=sharing"
        wr = stage.AddRecord(Twajlot, "07:58.56", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1-qFEsZGdxsrveDBNqFh30x6dw_iAkUKw/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-vHedy7dpI1L2J-uarPmFsmCAfe97WCu/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "08:49.36", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/15Ofw4H1ut5QL7tIm2_CDQ1_DTXEmwDYR/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1G_xkGPhCjpm41GYGA6_mt7hQq2lXAhaB/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "07:18.93", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/19PD8Em3vDsNOhlI8uGAMp78eCszPyfHZ/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13UA8BXpnCccVd2O9RBl47EC5iJ28ZMQ6/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "07:46.93", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1CgpLTIoSpNKJjS-Pc3MuMlDkaClww91O/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15qzWkWCCUC5Tq0iZuYqctZzyAouKlMcZ/view?usp=sharing"
        
        stage = rally.stages[2]; //Myherin
        wr = stage.AddRecord(Erwto, "11:58.12", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1OJpNibAIoi9I9GhO017aGpXnGlqS-udo/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1vM9KtcDjS3RBrOo7VQKCwRSFKlck9w-k/view?usp=sharing"
        wr = stage.AddRecord(Migger, "11:25.06", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11Xy5Stxu3FKrMjyc25TBseVnYnGhA-vl/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/11_zHt9MfIUYiwBHB8wiLyslA0ryPvJLE/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "10:31.51", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Em88FHLV88C2DkNzgTGKiZnt0nDIKfX2/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17FDNCK4pw8NmvSsXMjw4ivLU9L3Glqu5/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "11:59.28", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11Br5KD45Z9n52Ya4I2rGlr1A9lUa-3cK/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/112qvXhqqL906L_2g9HO6uPFJmkQHO5g7/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=vH94PxFajcA"
        wr = stage.AddRecord(Lewsys, "15:03.49", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ANlFExDFabCF6Z2sFMm3XNz7HQOxFF5Y/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/Wr_wBMvkYAY"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1zyiYlZno0GU836j2fil_stI-_QLTfKJo/view?usp=sharing"
        wr = stage.AddRecord(Twajlot, "11:56.23", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12cUmnw-ApL3g6sdcWob_Oav1VwFHXJuS/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12qqVqYkECYLqpgKL4Ml2vFvA_kvy_kve/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "13:06.13", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hHne8TlWki-xJFSbZLsYeX6AsdiiL_h3/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1nqHaFvgXnbGvN3xOBhLf4WlMHEJ97RZe/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "10:54.84", "00:10.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12zGjGYyyvS5xfS4XL4fT88NkkHcOhMJi/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13UA8BXpnCccVd2O9RBl47EC5iJ28ZMQ6/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "11:12.33", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/10Z1RQMvgeB1o2elODsXSlofzU0A3btQ8/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/10ckv2AjLvRHggfc8nwADJ7_L-vatVD06/view?usp=sharing"
        
        stage = rally.stages[3]; //Hafren
        wr = stage.AddRecord(Erwto, "12:45.59", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ThwrqgikvQRTbex_ZQezp68WG3Y03lL8/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1mcAfe5p2QErwISOHfFCyqTDJsTAU02Bm/view?usp=sharing"
        wr = stage.AddRecord(Migger, "11:53.24", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11VcWMh6TIhwITkOoFjS5GE6ACMHz2lLP/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/11jHudElCIDCBit5j48gX_u8BYP9_ttTj/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "11:33.71", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1zKvbFeMhyB7xG5nAIqNbB3IBtktHRiXH/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1NjiJQ6HRNBWCyUSUxwOmj5n5qAxxjOLo/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "12:16.10", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/10xNqRYx1UQrqEF9EpsjzQTvVCCACv9yk/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/11-VIYWo0eslw5IUMQDo8ZDoOjvw8Dkxx/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=vH94PxFajcA"
        wr = stage.AddRecord(Lewsys, "13:36.74", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hP0Ra-s4vxnh-9rMXPbx8XAiFKeH5Xph/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/iIPUOiXLgR8"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sgk1kXUsYNgQ17UJ6u5L1Mc1tAKl2FaD/view?usp=sharing"
        wr = stage.AddRecord(Twajlot, "12:52.99", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12nWzdoTnKQ3n8kadk8shTwYjz49MtRmD/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12qqVqYkECYLqpgKL4Ml2vFvA_kvy_kve/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "12:29.28", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11B5QWzVMq3Nn7lbnm9j8mVnfuPC9T6wP/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1ljbAJztTO8HDOKI6XBDn0nmksJtbwEr4/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "11:59.43", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/130r6ky0pftRZ0xV2GpIc7jOwLJNh-TZ4/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13BUWrwK7wKHYtgi3rzchP1OwL7tKwFhT/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "12:02.66", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/10f2czAu0qQxq2Pmj1rhSz1pEBm6klp0S/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/10Z07TN6m9soVzhQGYVEwy-DoIX4ikUPt/view?usp=sharing"
        
        stage = rally.stages[4]; //Dyfi
        wr = stage.AddRecord(Erwto, "13:12.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1i6v7mcMRNz7-KClHozu6B4p-6nZ5w032/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1wvOgxBctll2GaiVzVY-4PbORkGNqng1K/view?usp=sharing"
        wr = stage.AddRecord(Migger, "12:40.61", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1xXvxLXVCsCze5BZZhFY2UGp9iEYGvwV1/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1t2vwCJ_1LWGT2Fsn6D6HN0hI03UyS4jE/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "13:33.71", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1fMzNTbMvexmDTR6pL8wnOFX4OQXZxn-p/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1iADkq04UxDfYtTUCuYPRG5Qc39xi61qh/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "13:08.80", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1LQYOJtiyFEg25zTtv7-hFk9sZMqO-zen/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1PL_neyUUwspmX9nf9gP0jXtCMcn2LTyf/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=skn0nGw1hx8"
        wr = stage.AddRecord(Lewsys, "16:57.59", "00:00.00", "No")
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=HI_7P-fWfZw"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1vp5x5dAE4NVx2dJx_mMPAUYLXoSDZcLN/view?usp=sharing"
        wr = stage.AddRecord(Twajlot, "13:25.29", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12nWzdoTnKQ3n8kadk8shTwYjz49MtRmD/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1jyCfEFLxN2GmgSZrAyKsHO6K93ZU0mcd/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "14:22.55", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1iGONI5omR1lsmPMSLwcPi3SOR0Ks-Qv1/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1DDsCrrAv8KODLxEn8s-KkBpA9ISW0SyA/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "12:11.09", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1swzdoq1E3grXHTdZJfAH3H92sMjP1GvJ/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1GngE6MlVw4gkroLx6YAYo-alHaLmkdiK/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "12:18.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1R5nkAxDCphNQqT3w2pONPEC1eyjHapW2/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1wBOE5dH92pfwUitSinv30rVZNaA4-Ffs/view?usp=sharing"
        
        stage = rally.stages[5]; //Gartheiniog
        wr = stage.AddRecord(Erwto, "11:35.20", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1K5FFiP995iljNsUiod3J1KTCAFXdyzm2/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1GpoqVsF_f-njv2uxKNgJACUZaGD4z_cx/view?usp=sharing"
        wr = stage.AddRecord(Migger, "10:47.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ls0tH_-bLx6PB1oEH6dICm20BUnD01OW/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1YU0IZZLscld5LhDcxM0TPWrE0T0QeweU/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "09:56.55", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1sSP6UXufmaTa2QeeZoo7ypImqdLcwH-v/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1uwyMuJM76qDFrYTs8K1DxiUWak7luPoV/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "11:26.78", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12Nr6k_RFQqZOtFR6V2dNoOSchhgX_qcg/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1aEqtnUpBswqLi8fHEy72R7jIXljuFctG/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=skn0nGw1hx8"
        wr = stage.AddRecord(Lewsys, "DNF", "DNF", "Yes")
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=HI_7P-fWfZw"
        wr = stage.AddRecord(Twajlot, "11:42.23", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12nWzdoTnKQ3n8kadk8shTwYjz49MtRmD/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1jyCfEFLxN2GmgSZrAyKsHO6K93ZU0mcd/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1yfPpC3MWDwRtXn71QNIjB7CYyCcZWUWM/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "10:39.14", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1xoRkHPMzFnffPeEXlTtCh89Y-p4aaVI3/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1BIWuFagLD5IIS9daWTyxbHvWQmBhGp01/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "10:44.40", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1TVVEShufu2vWZBL47Un1qG67awxWA7Cr/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1AT8PNZvCmv7LGagHvXjMXomjiQJA8VdW/view?usp=sharing"
    }
    {
        rally = contest.rallies[1];  //Pirelli

        stage = rally.stages[0]; //Chirdonhead
        wr = stage.AddRecord(Erwto,"18:09.53","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/15DAe2FQJzWkeGnDzi4ZnOKcjt5hrczEe/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15CM8FPQpCbMC1Z77CukpS5W5awktsjDp/view?usp=sharing"
        wr = stage.AddRecord(Migger,"17:57.59","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/14oDg8A7AqUdo2g0pqiY8IDkgPfAVjYZf/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/151bjng_RQl7V4Zuk-tlbfGOucQcDz-WN/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "17:24.09", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1_2jcKKEyGeLS4H2zAd9oIfd_I2UArx_6/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1qU7aRoPFZrfcCGikdCxBtolRhyKirlQo/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "18:24.54", "00:10.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/14ZOBZzUDj9gFLTlCfDVw55NfUPuUpdut/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=yNWLmOjE0QA"
        wr = stage.AddRecord(Lewsys, "21:32.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/15_aSfltGoHzNOEWsY4BFYzVaUwn1UEig/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1MZRwytonL5QZXgfBWc00Zo4jc2-74qBA/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/Sv3f5jFPTI0"
        wr = stage.AddRecord(Twajlot, "18:51.25", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/15bhCrdUILp6Skn9l5__oifKiMV7_ak7e/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15WYfmGhs2HabEQJTtSoW00DNcNpZHufe/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EBYkbXvzzBPNx3_Vj4uDNxJ7q94bJt_H/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "17:32.67", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1lQxBlZIztlF-v94HVWiNhKGx8pZINn3g/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/16mKTsnUpPscFUh5wG84jT60aLdj8v7Ga/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "17:49.30", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/154gnBsVhmOhhRVCi-5nBm2TDmhg2udbz/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/153Dhq5Nk8ZUa5b82_JdSw3PahCWKGeSl/view?usp=sharing"
        
        stage = rally.stages[1]; //Falstone
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[2]; //Kershope
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[3]; //Pundershaw
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[4]; //Riccarton
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[5]; //Newcastleton
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
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
