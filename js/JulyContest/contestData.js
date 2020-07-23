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
        wr = stage.AddRecord(SpartaX18, "10:31.51", "00:00.00", "Yes")
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
        wr = stage.AddRecord(XsaraTorrada, "18:24.54", "00:05.00", "No")
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
        wr = stage.AddRecord(Erwto,"16:12.63","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1tKCdzHQ-thiSv-gBneBtxB8sYpLzTF-0/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17rWYW62Ywu1bKZVjBCn0ikb2kf4G6-JJ/view?usp=sharing"
        wr = stage.AddRecord(Migger,"15:04.00","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/16zqGOKCgmThSoD5WheONn-cUgeCjDgdl/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/174e32vpgKB3ZVv__5NGK8AmH3n0PvreO/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "14:11.30", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/15Q8N1O84RDiPVly7OfjlBWCMpAniEr5i/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1ZtsoQsPsqxV1sJiOkKLBAB4Ly2p7Z-NW/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "15:24.31", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1dSXBnby0cCpXY2y61dmaFSKjVhnfJWhk/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/14P901FpqIf7b9-yqtGoCmSvvpbUVqgm5/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=kVM5mpjxxm4"
        wr = stage.AddRecord(Lewsys, "17:33.83", "00:00.00", "No")
        wr.proofs["replay"] = "https://drive.google.com/file/d/18q1VZwDtAtYQNTjOfTZ_xMapJLwgbS4X/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/y4j5QC9bUnI"
        wr = stage.AddRecord(Twajlot, "16:22.64", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ZJdjVwh5cWgAMn0zEJjAOchew6g5qGEY/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Baq2PT1F_xR6ka5GGVdIzmS10r6WGNtE/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "14:49.37", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/18-fnXmCnK3chmqchBxoK0LtKQ8c9FA9l/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17s-8EX5p5OjeDMZYPMXTT0QOuhco4SJo/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "14:32.33", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1LZ8XYPlF6IEgzcAb-kMIF0XykLTarXJ7/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1VNi9M9mh0CzdRgoPIDSmmfK4NCtUbJXp/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[2]; //Kershope
        wr = stage.AddRecord(Erwto,"14:31.97","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1UDjNGI57dfbWcv5gcj2HWc0ZQtSuXz2H/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1I_yXmijJC5Kz0NeOc6dYzUOJSfCfPmFu/view?usp=sharing"
        wr = stage.AddRecord(Migger,"14:10.47","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/19z6Z6Hj1JPSduhwidFaEQ-gb93_UWmkD/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19uLqz3xkXibVXUXmZqFmxlbw7N1RO24H/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "12:09.59", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Y2wl00JTbmv37g0YxCiBony31l0-hoPq/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fWQiumKDqvYEGgj5to8yKjBc69Ckskc4/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "13:15.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ABzg8XIAsG9gWjOT9OKcvUoIgmHQEwaK/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1AA1k2VRw1yGExdmoY2QAJZ_SUIjS8Y2o/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=aELE4FvaUwQ"
        wr = stage.AddRecord(Lewsys, "17:28.35", "00:00.00", "No")
        wr.proofs["replay"] = "https://drive.google.com/file/d/1AnCMYpSwxXalVNj08y4Bg8Mi2HCZj6Hy/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/MfECVzm4jUU"
        wr = stage.AddRecord(Twajlot, "13:16.34", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/19ZhCPJtHRGdm6oHKWASodlLTkftKEmIt/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19_iZLKUBLC7lq0zx5n9HtQX3bcCmCF9D/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "12:56.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/18uAIEwpPCyqVrZkOFDuQxpGEwgJ0r4L7/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/192vZDu2dZ122Xf6I8eEQ3ZuPpd7rXFCp/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "12:45.77", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/19hmMVnGxTsJNvWGiZEaenz6NukuH94z1/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19eFemvNL-Pr3TRzQ8HAdbnK6Ccz8s_TW/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[3]; //Pundershaw
        wr = stage.AddRecord(Erwto,"17:16.62","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1jHWIB0eBu4CnRtZXMtPp79jksLSAyykU/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1yhDFU54ujScqIvPdNiPHkQaDtbYhRWS0/view?usp=sharing"
        wr = stage.AddRecord(Migger,"16:10.88","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1tPwknW39mOpDq9jHLPRuVKsAWtnxq-to/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1i9PJ6C5BqRk7fC-krqrT-xRiEBYmUfnV/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "15:25.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1d5bQDyHjSbsap29YcVFFc4OnyKTibVaj/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Ei6sSBrZY4SIh4x5jxjZawbEWr1qas5C/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "17:01.33", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/14TH46cV3K3IfLPjWhJ5rGxDNNotjH265/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1hEoA8eS2FGSr3Q9m_O4X9DHE2gTgmAh1/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=u5sbrV81nck"
        wr = stage.AddRecord(Lewsys, "21:32.25", "00:00.00", "No")
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-Xuo5twIor3DKCOZGeMyCyK9hIlsu505/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=LoQMSGh9by8"
        wr = stage.AddRecord(Twajlot, "17:11.56", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1wtuLFz7bqJIY0XD-hJV7yi1P46o1p26i/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1nAFjT5WkJIQoM7Z5p_sa00oPv0JGtJqe/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "15:14.61", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1GPdBtOr7U32qLD9GmdPdLwc34IsGuIKC/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/10X-YeZM71AiLAnyUgjSJX6RkpdjcUNs1/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "15:36.55", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1rKHPyxDU6PaYWapc0eSU-K_3-jM03lN_/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1_8pYV3DLIqBC2dhkjza73EZoYvaWD_sG/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[4]; //Riccarton
        wr = stage.AddRecord(Erwto,"07:18.03","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1bQ8lF4yWJ7lP1a-aKEcxQaANXEIC-F4-/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1cEZAp7YfJor93dxElwsuE6OExt0sRS-h/view?usp=sharing"
        wr = stage.AddRecord(Migger,"07:04.99","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1_0gnkA01kCAinsmtdnan34mSJPZccqGS/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1i9PJ6C5BqRk7fC-krqrT-xRiEBYmUfnV/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "07:13.61", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YnKcF-Mlov0n9Ndih7IZgVx7PT2sy4Mn/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1uCqeT1wDCX3wMNgtxWBVQ7zIUPHs8etc/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "09:07.55", "00:00.00", "No")
        wr.proofs["replay"] = "https://drive.google.com/file/d/1WVCt3y8CiVafe8RvfoxE_-lWOYS5vj0H/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/uaH0-PBLjZk"
        wr = stage.AddRecord(Twajlot, "06:57.64", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1--CB1Pbh1NEMK32C7yQrk0xNflb6xMTW/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1TrqSN4E2BiLy4lz8Pn9o0AXuktXbLVbt/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "06:51.80", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1CQ4KdBvIMQq9pb7mp5OkH17CAIbjlt-i/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1CjxJvQc1I0bvF5q0NOnHEsp18Z2H7Lto/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=RJKQzX3W074"
        wr = stage.AddRecord(Linotrix, "06:07.71", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1jrZnUhiUp4QFqOQrHtZRX25lA9T3-J7s/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1DnPa1VQs1ruQYMskKFOvWOtcS11QzHxB/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "07:08.42", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1DV-jVW76SByadCjMzBtkIvWb9idiQ9Fo/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1DDvi_C-KrXoNP_iVuCkqx_SAi0LlK0Ar/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
        
        stage = rally.stages[5]; //Newcastleton
        wr = stage.AddRecord(Erwto,"14:06.31","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1auIGJkS2-Z-z3F7V3HIPMJOuolTimK_P/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/18c6_POv-sZY9vH8RBRyrss09Wv9gMt8n/view?usp=sharing"
        wr = stage.AddRecord(Migger,"14:29.98","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Co7yLACkH2ZCFNYhKwk9H4U3rYD7xMX2/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/17YjnCS6NaFWzKqGUoeoIV0v0q8u5zI3A/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "12:14.39", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1_U_Vz-ORNq8ww3kdsge2Zev1Qxo0AFmC/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1AC3sA_2Ih1RcTYfRF7OKsMyupHw6Ju26/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "13:52.29", "00:00.00", "No")
        wr.proofs["replay"] = "https://drive.google.com/file/d/1WVCt3y8CiVafe8RvfoxE_-lWOYS5vj0H/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/uaH0-PBLjZk"
        wr = stage.AddRecord(Twajlot, "14:20.10", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1qxHolvSKA8-Gx7q1_nP7UUK2O4EUNEfV/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1TrqSN4E2BiLy4lz8Pn9o0AXuktXbLVbt/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "13:18.72", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1CWbN4cQJoTBG0T1NLv5PEffQdqOKy-fA/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1CXNvXCzU9R8d4FuMylzopG_SgqEYqgY-/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=RJKQzX3W074"
        wr = stage.AddRecord(Linotrix, "12:24.05", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1sSyZ_63i3-3rTNuVIChOU-sRv5BS7cte/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-ec7dbms0aZWe9iifdSuPWCAe16FdO2_/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "13:10.25", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1DVatkU0ltUTM_Zx5wpPHE3rfrgMSjgQ3/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1CoYJa5dNX-r_CnU6VmHNUFxLNs8YrzIa/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "DNF", "DNF", "Yes")
    }
    {
        rally = contest.rallies[2];  //RSAC

        stage = rally.stages[0]; //Twiglees
        wr = stage.AddRecord(Erwto,"07:49.46","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1qHoK8iOk_J0V8x4Bxex9arlxADz-GRu-/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/18c6_POv-sZY9vH8RBRyrss09Wv9gMt8n/view?usp=sharing"
        wr = stage.AddRecord(Migger,"07:46.10","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1F5rZ91G0wiI_50oPjP9BQLpMhIKzXliv/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1F6f6fs0q-yH4fOgaIpbCd8KxqEQp1Itp/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "06:51.05", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Mv5fQYyAHdPBJbTfNZLCSjqvfnbJ9b5y/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1GDq80D0mlo-9TKc-4w4-bSHrFwatdR5B/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "DNF", "DNF", "Yes")
        wr = stage.AddRecord(Twajlot, "07:35.33", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EZqZiHrBQ6iLYPV4yvbxUqA72ljfCDS9/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1EY5O9UafBxJe2RFEK8nOk7nFvpEKrP13/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "07:36.20", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Fhf8emH3FlERwSEWJHizehE-qgPzMxad/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1G2NWCvYAZCnh7Mchgapbq3qeKm6LS6GG/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/xDaFlFPUkLY"
        wr = stage.AddRecord(Linotrix, "07:04.69", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1fTkgyzA8eXxFgksQ8muBqQjAqmFDg37O/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1SrxAJ1p9XkYmJpgyJv3MFLe5oWyOY-6d/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "07:23.03", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1R7sbmbJV0fKJJjKm24ePd_kqmR-WGWzn/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1La0NILAL63-JObbF565oBe1_J04vrw03/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "08:49.61", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1U0GGvN7jLIPn11xVCEkUKKn6XCTeulCp/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fZaTVzx43Cozae6DD9MbhMBGArckzoiw/view?usp=sharing"
        
        stage = rally.stages[1]; //Yair
        wr = stage.AddRecord(Erwto,"04:45.47","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1C2fUJXtJYJfLe_xjVN78RGS1pi02B5uN/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Ysv0wKCgbv_xcgvd3nQdEQdux6FB3Btd/view?usp=sharing"
        wr = stage.AddRecord(Migger,"04:34.86","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1F5gHQYAbpAnIt37afbtjk64J98H5cjE7/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1FTPc2dAtshAdtYO-CDPL5Vp5PWsMckSl/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "03:59.07", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YgeGQA4dzvFUiKeYYocz-OJo60Jx2G30/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19pP9F2lzxkqcb3yq_hHc4-s_JieURyqH/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "DNF", "DNF", "Yes")
        wr = stage.AddRecord(Twajlot, "04:22.86", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EhNq8teIdci9eDPm2y3WQLSAEpdRw-0Y/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1EY5O9UafBxJe2RFEK8nOk7nFvpEKrP13/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "04:29.31", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Fn6smYo7o_lWZzlOB-UMYxTrq-eHnr4I/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Fzq8JpY51-0CD53qniNKYvTRKf4u11S0/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/xDaFlFPUkLY"
        wr = stage.AddRecord(Linotrix, "04:02.21", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1U8nudmcac7Z2ayh1sMmkVRSMz05pIRaS/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fbglyUbUVdqUQ0DBTLPtdh7dSCTPBvyI/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "04:18.05", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/18NhILCkxnHuHU9ZNTYIcZlOU_XHsXOx1/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1a0bDUMjPvzdtXE45DmYjQT9UrvCXQHuj/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "04:38.07", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hk759k6VKm-3k_aqr2OE7IkHjlomGJOp/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1NNQ_uQOCS35JaXsK-o7MFNhnzEY5dL2y/view?usp=sharing"
        
        stage = rally.stages[2]; //Cardrona
        wr = stage.AddRecord(Erwto,"05:05.08","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1df0INZB94pm6NXLc6M-_7Xkt0rHn7ea2/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1lwmCX6PFn3ioDJDtJl08IL4QERFrnz3h/view?usp=sharing"
        wr = stage.AddRecord(Migger,"04:47.91","00:00.00","No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1FSiRlCf79L24zWziu3A4-ffJal_NyphI/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1EwxVhYYvIeWaUgWAEJTO44LFVl-yb5Xr/view?usp=sharing"
        wr = stage.AddRecord(SpartaX18, "04:33.32", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YCn3IVJcO59-OaPW41xxGf37ggw8EMpx/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1KlW3zRJvbUD9YsBSAAoDU-p9vfodnIMH/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "DNF", "DNF", "Yes")
        wr = stage.AddRecord(Twajlot, "04:55.34", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EWJIF7EAATEwqtTKuA0dxXj13PWK7zoB/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1EY5O9UafBxJe2RFEK8nOk7nFvpEKrP13/view?usp=sharing"
        wr = stage.AddRecord(XsaraTorrada, "05:06.46", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1FyLUNAOs6xLJ5cndtCgoXnWwOMrNgndU/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Fzb9907NycUczqVQrsjUtEWdLXaKmb4H/view?usp=sharing"
        wr.proofs["youtube"] = "https://youtu.be/xDaFlFPUkLY"
        wr = stage.AddRecord(Linotrix, "04:39.68", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1druqv3ztXDQFZXJq8bicceGqeeCXgc7y/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1oeEiosGNRex-vhXbasLlb7Kd9Qcfbevs/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "04:46.96", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1nPXzJJfjb9QQAbPPFMESUywjd-tLkgGR/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1KENQ-lcCqfmKoCawmaG2SDWqaQC_ZUBj/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "05:39.93", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1vI9Vy3YkwnWhFXCCP5WkJeRwhl0Z80Hx/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1d_l_4RjCTmBUsb3L4MYx9thtnQ4NpUv1/view?usp=sharing"
        
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
