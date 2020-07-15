function contestData(){
    if(typeof(website) === "undefined"){
        website = websiteData()
        console.log(website);
    }
    let contest  = new Contest("BRC: Milestone Rumble")

    let participantColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    let Erwto = new Participant(website.GetUserByName('Erwto'), participantColor(), "Seat Ibiza Cupra Sport");
    let MidnightRunner = new Participant(website.GetUserByName('MidnightRunner'), participantColor(), "Peugeot 106 Maxi");
    let Migger = new Participant(website.GetUserByName('Migger'), participantColor(), "Škoda Felicia");
    let SpartaX18 = new Participant(website.GetUserByName('SpartaX18'), participantColor(), "Nissan Micra");
    let datsun = new Participant(website.GetUserByName('datsun'), participantColor(), "Škoda Octavia"); //Škoda Favorit GLX SilverLine
    let Tornado = new Participant(website.GetUserByName('Tornado'), participantColor(), "Citroën Saxo");
    let XsaraTorrada = new Participant(website.GetUserByName('XsaraTorrada'), participantColor(), "Volkswagen Golf GTI MKIV");
    let SpartaRemixer = new Participant(website.GetUserByName('SpartaRemixer'), participantColor(), "Peugeot 106 Maxi");
    let Juraj = new Participant(website.GetUserByName('Juraj'), participantColor(), "Citroën Saxo"); //Juraj Damjanovic
    contest.participants.push(Erwto, MidnightRunner, Migger, SpartaX18, datsun, Tornado, XsaraTorrada, SpartaRemixer, Juraj);
    

    contest.rallies = website.game.rallies;
    let rally, stage
    {
        rally = contest.rallies[0];  //Vauxall

        stage = rally.stages[0]; //Clocaenog
        stage.AddRecord(SpartaX18,"09:54.33","00:00.00","No")
        stage.AddRecord(datsun,"10:15.39","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"10:15.86","00:00.00","Yes")
        stage.AddRecord(Migger,"10:15.98","00:00.00","No")
        stage.AddRecord(Juraj,"10:41.30","00:00.00","No")
        stage.AddRecord(Erwto,"10:38.90","00:00.00","No")
        stage.AddRecord(MidnightRunner,"10:15.84","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"10:11.61","00:00.00","No")
        stage.AddRecord(Tornado,"09:58.53","00:00.00","No")
        
        stage = rally.stages[1]; //Penmachno
        stage.AddRecord(SpartaX18,"08:50.58","00:00.00","No")
        stage.AddRecord(Migger,"08:53.92","00:00.00","No")
        stage.AddRecord(datsun,"08:54.49","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"09:01.83","00:00.00","No")
        stage.AddRecord(Juraj,"10:33.95","00:00.00","No")
        stage.AddRecord(Erwto,"09:23.22","00:00.00","No")
        stage.AddRecord(MidnightRunner,"08:47.57","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"08:31.99","00:00.00","No")
        stage.AddRecord(Tornado,"08:30.65","00:00.00","No")

        stage = rally.stages[2]; //Myherin
        stage.AddRecord(SpartaX18,"12:38.44","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"12:49.63","00:00.00","No")
        stage.AddRecord(datsun,"12:56.54","00:00.00","No")
        stage.AddRecord(Migger,"12:56.65","00:00.00","No")
        stage.AddRecord(Juraj,"16:13.36","00:00.00","No")
        stage.AddRecord(Erwto,"13:53.37","00:00.00","No")
        stage.AddRecord(MidnightRunner,"13:19.73","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"12:36.56","00:00.00","No")
        stage.AddRecord(Tornado,"13:07.23","00:00.00","No")
        stage.AddWorldRecord("10:29.81","10:21.16")

        stage = rally.stages[3]; //Hafren
        stage.AddRecord(SpartaX18,"14:01.55","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"14:13.30","00:00.00","No")
        stage.AddRecord(datsun,"14:15.59","00:00.00","No")
        stage.AddRecord(Migger,"14:20.88","00:00.00","No")
        stage.AddRecord(Juraj,"16:24.15","00:00.00","No")
        stage.AddRecord(Erwto,"14:38.10","00:00.00","No")
        stage.AddRecord(MidnightRunner,"14:08.57","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:24.24","00:00.00","No")
        stage.AddRecord(Tornado,"13:41.04","00:00.00","No")

        stage = rally.stages[4]; //Dyfi
        stage.AddRecord(XsaraTorrada,"14:48.14","00:00.00","No")
        stage.AddRecord(SpartaX18,"15:36.78","00:00.00","No")
        stage.AddRecord(Juraj,"17:19.04","00:00.00","No")
        stage.AddRecord(Migger,"14:31.78","00:00.00","No")
        stage.AddRecord(datsun,"14:45.85","00:00.00","No")
        stage.AddRecord(Erwto,"15:00.44","00:00.00","No")
        stage.AddRecord(MidnightRunner,"15:18.47","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:35.76","00:00.00","No")
        stage.AddRecord(Tornado,"14:25.19","00:00.00","No")

        stage = rally.stages[5]; //Gartheiniog
        stage.AddRecord(SpartaX18,"12:23.89","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"12:46.96","00:00.00","Yes")
        stage.AddRecord(Juraj,"14:27.48","00:00.00","No")
        stage.AddRecord(Migger,"12:38.73","00:00.00","No")
        stage.AddRecord(datsun,"12:40.31","00:00.00","No")
        stage.AddRecord(Erwto,"13:06.06","00:00.00","No")
        stage.AddRecord(MidnightRunner,"12:51.30","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"12:38.76","00:00.00","No")
        stage.AddRecord(Tornado,"12:32.43","00:00.00","No")
    }
    {
        rally = contest.rallies[1];  //Pirelli

        stage = rally.stages[0]; //Chirdonhead
        stage.AddRecord(Juraj,"22:01.24","00:00.00","No")
        stage.AddRecord(SpartaX18,"19:47.29","00:00.00","No")
        stage.AddRecord(Migger,"20:06.05","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"20:03.15","00:00.00","Yes")
        stage.AddRecord(datsun,"20:42.18","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"19:49.01","00:00.00","No")
        stage.AddRecord(MidnightRunner,"19:51.27","00:00.00","No")
        stage.AddRecord(Tornado,"19:33.88","00:00.00","No")
        stage.AddRecord(Erwto,"19:57.63","00:00.00","No")

        stage = rally.stages[1]; //Falstone
        stage.AddRecord(Juraj,"19:13.94","00:00.00","No")
        stage.AddRecord(SpartaX18,"16:18.79","00:00.00","No")
        stage.AddRecord(Migger,"16:51.76","00:00.00","No")
        stage.AddRecord(datsun,"17:10.57","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"16:27.30","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"17:14.41","00:00.00","Yes")
        stage.AddRecord(MidnightRunner,"16:58.72","00:00.00","No")
        stage.AddRecord(Tornado,"16:30.88","00:00.00","No")
        stage.AddRecord(Erwto,"17:06.48","00:00.00","No")

        stage = rally.stages[2]; //Kershope
        stage.AddRecord(Juraj,"17:43.39","00:00.00","No")
        stage.AddRecord(SpartaX18,"14:11.92","00:00.00","No")
        stage.AddRecord(Migger,"15:05.12","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:46.36","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"15:06.75","00:00.00","Yes")
        stage.AddRecord(datsun,"16:08.32","00:00.00","No")
        stage.AddRecord(Tornado,"14:15.68","00:00.00","No")
        stage.AddRecord(Erwto,"15:02.07","00:00.00","No")
        stage.AddRecord(MidnightRunner,"14:39.94","00:00.00","No")

        stage = rally.stages[3]; //Pundershaw
        stage.AddRecord(Juraj,"19:54.98","00:00.00","No")
        stage.AddRecord(SpartaX18,"17:57.01","00:00.00","No")
        stage.AddRecord(Migger,"18:18.64","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"17:54.53","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"17:56.57","00:00.00","Yes")
        stage.AddRecord(datsun,"18:44.27","00:00.00","No")
        stage.AddRecord(Tornado,"17:46.53","00:00.00","No")
        stage.AddRecord(Erwto,"18:42.61","00:00.00","No")
        stage.AddRecord(MidnightRunner,"17:34.81","00:00.00","No")

        stage = rally.stages[4]; //Riccarton
        stage.AddRecord(Juraj,"08:12.34","00:00.00","No")
        stage.AddRecord(SpartaX18,"07:17.94","00:00.00","No")
        stage.AddRecord(Migger,"07:33.47","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:04.15","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"08:19.34","00:00.00","Yes")
        stage.AddRecord(datsun,"07:55.75","00:00.00","No")
        stage.AddRecord(Tornado,"07:14.46","00:00.00","No")
        stage.AddRecord(Erwto,"09:49.88","00:00.00","No")
        stage.AddRecord(MidnightRunner,"07:52.92","00:00.00","No")

        stage = rally.stages[5]; //Newcastleton
        stage.AddRecord(Juraj,"16:32.31","00:00.00","No")
        stage.AddRecord(SpartaX18,"14:53.87","00:00.00","No")
        stage.AddRecord(Migger,"15:18.97","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"14:29.60","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"15:20.36","00:00.00","Yes")
        stage.AddRecord(datsun,"15:09.55","00:00.00","No")
        stage.AddRecord(Tornado,"14:38.99","00:00.00","No")
        stage.AddRecord(Erwto,"15:36.41","00:00.00","No")
        stage.AddRecord(MidnightRunner,"15:18.43","00:00.00","No")
    }
    {
        rally = contest.rallies[2];  //RSAC

        stage = rally.stages[0];
        stage.AddRecord(SpartaX18,"08:20.05","00:00.00","No")
        stage.AddRecord(Migger,"08:18.26","00:00.00","No")
        stage.AddRecord(Juraj,"09:25.84","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"08:12.06","00:00.00","No")
        stage.AddRecord(datsun,"08:51.96","00:00.00","No")
        stage.AddRecord(Tornado,"08:21.20","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"08:33.62","00:00.00","Yes")
        stage.AddRecord(MidnightRunner,"08:30.44","00:00.00","No")
        stage.AddRecord(Erwto,"08:17.12","00:00.00","No")

        stage = rally.stages[1];
        stage.AddRecord(SpartaX18,"04:50.32","00:00.00","No")
        stage.AddRecord(Migger,"04:53.97","00:00.00","No")
        stage.AddRecord(Juraj,"06:48.92","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"04:42.73","00:00.00","No")
        stage.AddRecord(Tornado,"04:54.38","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:09.27","00:00.00","Yes")
        stage.AddRecord(datsun,"04:55.93","00:00.00","No")
        stage.AddRecord(MidnightRunner,"04:50.98","00:00.00","No")
        stage.AddRecord(Erwto,"05:11.79","00:00.00","No")

        stage = rally.stages[2];
        stage.AddRecord(SpartaX18,"05:36.00","00:00.00","No")
        stage.AddRecord(Migger,"05:25.73","00:00.00","No")
        stage.AddRecord(Juraj,"06:18.81","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:22.71","00:00.00","No")
        stage.AddRecord(Tornado,"05:24.21","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:42.42","00:00.00","Yes")
        stage.AddRecord(datsun,"05:31.85","00:00.00","No")
        stage.AddRecord(MidnightRunner,"05:24.49","00:00.00","No")
        stage.AddRecord(Erwto,"05:36.95","00:00.00","No")

        stage = rally.stages[3];
        stage.AddRecord(SpartaX18,"06:20.25","00:00.00","No")
        stage.AddRecord(Migger,"06:38.78","00:00.00","No")
        stage.AddRecord(Juraj,"07:41.02","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"06:22.28","00:00.00","No")
        stage.AddRecord(Tornado,"06:35.71","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"06:39.32","00:00.00","Yes")
        stage.AddRecord(datsun,"06:30.25","00:00.00","No")
        stage.AddRecord(MidnightRunner,"06:37.81","00:00.00","No")
        stage.AddRecord(Erwto,"06:40.08","00:00.00","No")

        stage = rally.stages[4];
        stage.AddRecord(SpartaX18,"16:07.89","00:00.00","No")
        stage.AddRecord(Migger,"16:56.48","00:00.00","No")
        stage.AddRecord(Juraj,"18:42.01","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"16:09.06","00:00.00","No")
        stage.AddRecord(Tornado,"16:21.97","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"16:53.91","00:00.00","Yes")
        stage.AddRecord(datsun,"16:52.00","00:00.00","No")
        stage.AddRecord(MidnightRunner,"16:40.15","00:00.00","No")
        stage.AddRecord(Erwto,"16:59.57","00:00.00","No")

        stage = rally.stages[5];
        stage.AddRecord(Juraj,"22:59.23","00:00.00","No")
        stage.AddRecord(SpartaX18,"17:20.71","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"17:04.02","00:00.00","No")
        stage.AddRecord(Migger,"18:26.28","00:00.00","No")
        stage.AddRecord(Tornado,"17:18.04","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"18:34.58","00:00.00","Yes")
        stage.AddRecord(datsun,"19:18.93","00:00.00","No")
        stage.AddRecord(MidnightRunner,"17:34.21","00:00.00","No")
        stage.AddRecord(Erwto,"18:35.82","00:00.00","No")
    }
    {
        rally = contest.rallies[3];  //Seat Jim Clark

        stage = rally.stages[0];
        stage.AddRecord(Juraj,"03:58.49","00:00.00","No")
        stage.AddRecord(SpartaX18,"03:24.84","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"03:22.76","00:00.00","No")
        stage.AddRecord(Tornado,"03:22.86","00:00.00","No")
        stage.AddRecord(Migger,"03:32.40","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"03:22.08","00:00.00","Yes")
        stage.AddRecord(datsun,"03:17.48","00:00.00","No")
        stage.AddRecord(MidnightRunner,"03:27.12","00:00.00","No")
        stage.AddRecord(Erwto,"03:25.48","00:00.00","No")
        
        stage = rally.stages[1];
        stage.AddRecord(Juraj,"06:33.71","00:00.00","No")
        stage.AddRecord(SpartaX18,"05:33.20","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:25.11","00:00.00","No")
        stage.AddRecord(Tornado,"05:34.31","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:37.41","00:00.00","Yes")
        stage.AddRecord(Migger,"06:23.53","00:00.00","No")
        stage.AddRecord(datsun,"05:28.97","00:00.00","No")
        stage.AddRecord(MidnightRunner,"05:32.11","00:00.00","No")
        stage.AddRecord(Erwto,"05:54.21","00:00.00","No")

        stage = rally.stages[2];
        stage.AddRecord(Juraj,"05:32.56","00:00.00","No")
        stage.AddRecord(SpartaX18,"05:10.05","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:11.21","00:00.00","No")
        stage.AddRecord(Tornado,"05:03.01","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"04:59.51","00:00.00","Yes")
        stage.AddRecord(Migger,"05:55.91","00:00.00","No")
        stage.AddRecord(datsun,"05:00.18","00:00.00","No")
        stage.AddRecord(MidnightRunner,"04:56.57","00:00.00","No")
        stage.AddRecord(Erwto,"05:00.93","00:00.00","No")

        stage = rally.stages[3];
        stage.AddRecord(Juraj,"05:54.61","00:00.00","No")
        stage.AddRecord(SpartaX18,"05:26.36","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:12.75","00:00.00","No")
        stage.AddRecord(Tornado,"05:26.53","00:00.00","No")
        stage.AddRecord(Migger,"06:44.99","00:00.00","No")
        stage.AddRecord(datsun,"05:31.00","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:07.87","00:00.00","Yes")
        stage.AddRecord(MidnightRunner,"05:18.41","00:00.00","No")
        stage.AddRecord(Erwto,"05:14.78","00:00.00","No")

        stage = rally.stages[4];
        stage.AddRecord(Juraj,"02:06.22","00:00.00","No")
        stage.AddRecord(SpartaX18,"01:46.85","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"01:44.89","00:00.00","No")
        stage.AddRecord(Tornado,"01:48.24","00:00.00","No")
        stage.AddRecord(Migger,"01:52.96","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"01:42.94","00:00.00","Yes")
        stage.AddRecord(datsun,"01:44.37","00:00.00","No")
        stage.AddRecord(MidnightRunner,"01:47.85","00:00.00","No")
        stage.AddRecord(Erwto,"01:45.28","00:00.00","No")

        stage = rally.stages[5];
        stage.AddRecord(Juraj,"06:19.02","00:00.00","No")
        stage.AddRecord(SpartaX18,"06:07.04","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"05:59.56","00:00.00","No")
        stage.AddRecord(Tornado,"05:57.08","00:00.00","No")
        stage.AddRecord(Migger,"06:25.72","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"05:48.31","00:00.00","Yes")
        stage.AddRecord(datsun,"06:01.26","00:00.00","No")
        stage.AddRecord(MidnightRunner,"05:47.47","00:00.00","No")
        stage.AddRecord(Erwto,"05:52.92","00:00.00","No")
    }
    {
        rally = contest.rallies[4];  //Stena Line

        stage = rally.stages[0];
        stage.AddRecord(SpartaX18,"08:15.26","00:00.00","No")
        stage.AddRecord(Juraj,"09:41.70","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"08:16.33","00:00.00","No")
        stage.AddRecord(datsun,"08:46.45","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"08:25.26","00:00.00","Yes")
        stage.AddRecord(Migger,"08:36.55","00:00.00","No")
        stage.AddRecord(MidnightRunner,"08:11.01","00:00.00","No")
        stage.AddRecord(Erwto,"09:02.58","00:00.00","No")
        stage.AddRecord(Tornado,"08:11.35","00:00.00","No")

        stage = rally.stages[1];
        stage.AddRecord(SpartaX18,"10:12.28","00:00.00","No")
        stage.AddRecord(Juraj,"11:59.45","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"10:17.28","00:00.00","No")
        stage.AddRecord(datsun,"DNF","DNF","DNF")
        stage.AddRecord(XsaraTorrada,"10:20.41","00:00.00","Yes")
        stage.AddRecord(Migger,"10:39.14","00:00.00","No")
        stage.AddRecord(MidnightRunner,"10:04.65","00:00.00","No")
        stage.AddRecord(Erwto,"15:29.13","00:00.00","No")
        stage.AddRecord(Tornado,"10:09.11","00:00.00","No")

        stage = rally.stages[2];
        stage.AddRecord(SpartaX18,"09:44.48","00:00.00","No")
        stage.AddRecord(Juraj,"11:08.60","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"09:51.20","00:00.00","No")
        stage.AddRecord(datsun,"DNF","DNF","DNF")
        stage.AddRecord(Migger,"10:04.24","00:00.00","No")
        stage.AddRecord(MidnightRunner,"09:55.54","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"09:55.99","00:00.00","Yes")
        stage.AddRecord(Erwto,"10:09.77","00:00.00","No")
        stage.AddRecord(Tornado,"09:37.37","00:00.00","No")

        stage = rally.stages[3];
        stage.AddRecord(SpartaX18,"10:06.36","00:00.00","No")
        stage.AddRecord(Juraj,"11:20.43","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"10:14.34","00:00.00","No")
        stage.AddRecord(datsun,"DNF","DNF","DNF")
        stage.AddRecord(Migger,"10:36.17","00:00.00","No")
        stage.AddRecord(MidnightRunner,"10:27.73","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"10:21.96","00:00.00","Yes")
        stage.AddRecord(Erwto,"10:28.36","00:00.00","No")
        stage.AddRecord(Tornado,"10:25.69","00:00.00","No")

        stage = rally.stages[4];
        stage.AddRecord(SpartaX18,"07:49.34","00:00.00","No")
        stage.AddRecord(Juraj,"08:52.09","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:59.04","00:00.00","No")
        stage.AddRecord(datsun,"DNF","DNF","DNF")
        stage.AddRecord(Migger,"07:56.09","00:00.00","No")
        stage.AddRecord(MidnightRunner,"08:07.43","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"07:55.07","00:00.00","Yes")
        stage.AddRecord(Erwto,"08:05.08","00:00.00","No")
        stage.AddRecord(Tornado,"07:54.02","00:00.00","No")

        stage = rally.stages[5];
        stage.AddRecord(SpartaX18,"07:41.01","00:00.00","No")
        stage.AddRecord(Juraj,"08:28.08","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:49.57","00:00.00","No")
        stage.AddRecord(datsun,"DNF","DNF","DNF")
        stage.AddRecord(Migger,"08:08.84","00:00.00","No")
        stage.AddRecord(MidnightRunner,"07:36.74","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"07:54.16","00:00.00","Yes")
        stage.AddRecord(Erwto,"07:48.08","00:00.00","No")
        stage.AddRecord(Tornado,"07:38.34","00:00.00","No")
    }
    {
        rally = contest.rallies[5];  //Sony Manx

        stage = rally.stages[0]; 
        stage.AddRecord(Juraj,"04:47.89","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"04:43.77","00:00.00","No")
        stage.AddRecord(SpartaX18,"04:46.79","00:00.00","No")
        stage.AddRecord(datsun,"04:44.15","00:00.00","No")
        stage.AddRecord(Migger,"04:47.08","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"04:29.92","00:00.00","Yes")
        stage.AddRecord(Tornado,"04:27.57","00:00.00","No")
        stage.AddRecord(Erwto,"04:35.94","00:00.00","No")
        stage.AddRecord(MidnightRunner,"04:34.33","00:00.00","No")

        stage = rally.stages[1];
        stage.AddRecord(Juraj,"07:55.81","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"07:08.15","00:00.00","No")
        stage.AddRecord(SpartaX18,"07:11.87","00:00.00","No")
        stage.AddRecord(datsun,"07:33.91","00:00.00","No")
        stage.AddRecord(Migger,"07:16.25","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"07:06.95","00:00.00","Yes")
        stage.AddRecord(Tornado,"07:06.65","00:00.00","No")
        stage.AddRecord(Erwto,"07:45.63","00:00.00","No")
        stage.AddRecord(MidnightRunner,"07:04.13","00:00.00","No")

        stage = rally.stages[2];
        stage.AddRecord(Juraj,"10:50.37","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"09:55.11","00:00.00","No")
        stage.AddRecord(SpartaX18,"09:49.42","00:00.00","No")
        stage.AddRecord(datsun,"09:51.20","00:00.00","No")
        stage.AddRecord(Migger,"10:02.53","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"09:46.22","00:00.00","Yes")
        stage.AddRecord(Tornado,"09:41.73","00:00.00","No")
        stage.AddRecord(Erwto,"10:01.83","00:00.00","No")
        stage.AddRecord(MidnightRunner,"09:51.34","00:00.00","No")

        stage = rally.stages[3];
        stage.AddRecord(Juraj,"04:06.20","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"03:39.07","00:00.00","No")
        stage.AddRecord(SpartaX18,"03:36.22","00:00.00","No")
        stage.AddRecord(Migger,"03:44.87","00:00.00","No")
        stage.AddRecord(datsun,"03:34.23","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"03:32.59","00:00.00","Yes")
        stage.AddRecord(Tornado,"03:30.68","00:00.00","No")
        stage.AddRecord(Erwto,"03:44.86","00:00.00","No")
        stage.AddRecord(MidnightRunner,"03:46.76","00:00.00","No")

        stage = rally.stages[4];
        stage.AddRecord(Juraj,"10:26.32","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"09:15.21","00:00.00","No")
        stage.AddRecord(SpartaX18,"08:56.50","00:00.00","No")
        stage.AddRecord(Migger,"09:54.68","00:00.00","No")
        stage.AddRecord(datsun,"10:03.73","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"09:24.27","00:00.00","Yes")
        stage.AddRecord(Tornado,"09:12.49","00:00.00","No")
        stage.AddRecord(Erwto,"09:44.01","00:00.00","No")
        stage.AddRecord(MidnightRunner,"09:25.25","00:00.00","No")

        stage = rally.stages[5];
        stage.AddRecord(Juraj,"11:41.78","00:00.00","No")
        stage.AddRecord(SpartaRemixer,"10:26.68","00:00.00","No")
        stage.AddRecord(SpartaX18,"10:16.83","00:00.00","No")
        stage.AddRecord(Migger,"11:10.14","00:00.00","No")
        stage.AddRecord(datsun,"11:31.13","00:00.00","No")
        stage.AddRecord(XsaraTorrada,"10:19.51","00:00.00","Yes")
        stage.AddRecord(Tornado,"10:18.92","00:00.00","No")
        stage.AddRecord(Erwto,"10:23.82","00:00.00","No")
        stage.AddRecord(MidnightRunner,"10:19.63","00:00.00","No")
    }

    return contest
}
