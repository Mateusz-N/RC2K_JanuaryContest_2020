let contest = contestData();
let resultSyncPromise;

if(contest.name === "Magnetic Fields Memorial Invitational 2023") {
    resultSyncPromise = retrieveContestData();    
}
main(contest);

async function retrieveContestData() {
    // Fetch last updated date from Firebase
    const lastUpdated = await firestore.collection("metadata").doc("lastUpdated").get();
    const localStorageLastUpdated = localStorage.getItem("lastUpdated");
    const lastUpdatedDateString = lastUpdated.data().date.toString();
    const updatePending = localStorageLastUpdated !== lastUpdatedDateString;
    console.log(updatePending ? "Database update pending!" : "Website up to date with database!");

    // Retrieve results from database if needed
    var localStorageContestResults = localStorage.getItem("results");
    if(localStorageContestResults == null || updatePending){
        let date = new Date().getTime();
        return contest.getResultsFromFirebase()
            .then(results => {
                console.log("Retrieveing results from database...")
                localStorage.setItem("results", JSON.stringify(results));
                contest.updateRecords(results);
                let date2 = new Date().getTime();
                console.log("Results retrieved in " + (date2 - date) + " milliseconds")
                localStorage.setItem("lastUpdated", lastUpdatedDateString);
            })
            .catch(error => {
                // Handle errors, if needed
                console.error(error);
            });
    }
    else {
        console.log("Retrieveing results from local storage...")
        contest.updateRecords(JSON.parse(localStorageContestResults));
    }
}


async function main(contest) {
    console.log("Reading script.js")
    console.log(contest)
    bgRoll();

    document.getElementById("title").innerHTML = contest.name

    // Entry list generator (START)
    let generateEntries = document.getElementById("generateEntries");
    contest.participants.sort(compareGroups);
    
    
    for(let i=0; i<contest.participants.length; i++) {
        let participant = contest.participants[i];
        let flagImg = `<img src="../../resources/flags/${participant.user.country}.png" style="height: 20px; min-width: 32px; border: 1px solid #CCC;" onerror="this.src='../../resources/flags/unknown.png'" />`;
        if (generateEntries) {
            generateEntries.innerHTML += 
            `<tr>
                <td>${participant.num}</td>
                <td>${participant.user.name}</td>
                <td>${flagImg}</td>
                <td>${contest.name === "Magnetic Fields Memorial Invitational 2023" ? contest.getGroupByNumber(participant.groupNumber).getName() : participant.group.name}</td>
                <td>${participant.car}</td>
                <td><button id="showModalBtn" class = "altBtn" onclick='showDriverProfile("${participant.user.name}")'>Show</button></td>
            </tr>`
        }
    }
    // Entry list generator (END)
    
    let buttonSpace = document.getElementById("buttons");
    let tables = document.getElementById("tables");
    
    if(tables) {
        // Wait for database sync to reveal the tables
        const loadingIcon = document.createElement("img");
        loadingIcon.setAttribute("id", "loadingIcon");
        loadingIcon.setAttribute("src", "../../resources/loading_white.png");
        loadingIcon.setAttribute("alt", "Loading...");
        loadingIcon.style.display = "inline";
        document.body.insertBefore(loadingIcon, tables);

        await resultSyncPromise
        loadingIcon.style.display = "none";
        for(const table of document.querySelectorAll(".tables, canvas.tables")) {
            table.style.display = "block";
        }
        if(buttonSpace){
            for(let i=0; i< contest.rallies.length; i++){
                let button = document.createElement("button")
                button.setAttribute("onclick","loadRallyTables("+ i +")");
                button.innerHTML = contest.rallies[i].name;
                buttonSpace.appendChild(button);
            }
            loadRallyTables(0)
        }
        else {
            loadRallyTables(6);
        }
    }

    const quickUpdates = document.getElementsByClassName('updateContent');
    const quickUpdatesAmount = quickUpdates.length;
    let quickUpdateContent;
    for(let i = 0; i < quickUpdatesAmount; i++) {
        quickUpdateContent = quickUpdates[i].firstElementChild;
        if(quickUpdateContent.innerHTML.trim().length == 0) {
            quickUpdateContent.innerHTML = "The day hasn't finished yet. Please Check back later!";
            quickUpdateContent.style.color = "gray";
            quickUpdateContent.style.textAlign = "center";
        }
    }
}

// Roll a random background pic
function bgRoll() {
    const bgm = ['../../resources/SBISL02.png','../../resources/MTLSL04.png','../../resources/OSCSL08.png','../../resources/PGTSL04.png','../../resources/PTWSL02.png','../../resources/STCSL01.png'];
 
    $('body').css({
        'background-image' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ')',
    });
}

// Compare function for sorting participants by Group (descending order)
function compareGroups(participant1, participant2) {
    if (participant1.groupNumber < participant2.groupNumber) {
        return -1;
    }
    if (participant1.groupNumber > participant2.groupNumber) {
        return 1;
    }
    return 0;
}

function showDriverProfile(participantName) {
    const participant = contest.getParticipantByName(participantName);
    document.getElementById("modalDriverProfile").style.display = "flex";
    let driverProfileImgFilename = `${contest.name === "Magnetic Fields Memorial Invitational 2023" ? contest.getGroupByNumber(participant.groupNumber).getName() : participant.group.name}_${participant.user.name}`;
    document.getElementById("driverProfileImg").setAttribute("src", `../../resources/driver_profiles/MFMI${contest.name.substr(-2, 2)}/${driverProfileImgFilename.toLowerCase().replaceAll(' ','')}.png`);
}

function closeModal(event) {
    if(event.target != document.getElementById("driverProfileImg")) {   // If clicked anything but the image (so either the "X" or just outside the modal)
        document.getElementById("modalDriverProfile").style.display = "none";
    }
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
}


function loadRallyTables(RallyID){
    let tables = document.getElementById("tables")
    if(tables === null) return;
    tables.innerHTML = "";
    let stages;
    let nParticipants = contest.participants.length

    let summaryDiv = document.getElementById("rallyboards") || document.getElementById("finalboard")
    summaryDiv.innerHTML = "";

    let graphDiv = document.getElementById('myChart');
    graphDiv.innerHTML = "";
    
    let graphDiv_record = document.getElementById('myChart_record')
    graphDiv_record.innerHTML = "";

    let stagesToOmit = []
    if(RallyID !== 6){
        stages = contest.rallies[RallyID].stages;
        if(!hasLegFinished(stages[stages.length - 1])) {
            for(const stage of contest.getCurrentLeg().stages) {
                stagesToOmit.push(stage);
            }
        }
        for(let i = 0; i< stages.length; i++){
            stages[i].CreateContestEntireStageTable(tables, 0) 
        }
        contest.rallies[RallyID].getSummary(nParticipants, stagesToOmit).CreateContestEntireStageTable(summaryDiv, 1)
    }
    else{
        for(const rally of contest.rallies) {
            if(!hasLegFinished(rally.stages[rally.stages.length - 1])) {
                for(const stage of contest.getCurrentLeg().stages) {
                    stagesToOmit.push(stage);
                }
                break;
            }
        }
        contest.finish(stagesToOmit)
        contest.AddRally(contest.summaryRally);
        console.log("FinalSummary")
        stages = contest.summaryRally.stages;
        for(let i = 0; i< stages.length; i++){
            stages[i].CreateContestEntireStageTable(tables,2)
        }
        contest.rallies[RallyID].getSummary(nParticipants, stagesToOmit).CreateContestEntireStageTable(summaryDiv, 3)
    }
   
    //CHART.js 
    let stage_minimum = []
    let participants_centiseconds = []
    let participants = []
    let stage_records = []

    for(let i=0; i< stages.length; i++){
        if(hasLegFinished(stages[i])) { // If this leg hasn't finished yet, don't display the results
            let records = stages[i].records;
            stage_records[i] = stages[i].wr["simulation"][0]; //0 = first place
            stage_minimum[i] = Number.POSITIVE_INFINITY;
            for(let j=0; j< records.length; j++){
                let record = records[j]
                if(record.status.didFinish){
                    const participantName = record.participant.user.name
                    const centiseconds = record.finalTime.centiseconds
                    if(participants_centiseconds[participantName] === undefined)
                        participants_centiseconds[participantName] = [];
                    participants_centiseconds[participantName][i] = centiseconds;
                    participants[participantName] = record.participant;
                    if(centiseconds < stage_minimum[i]) 
                        stage_minimum[i] = centiseconds;
                }
            }
        }
    }
    let labels = stages.map((S)=>S.name)
    let participants_centiseconds_record = clone(participants_centiseconds);

    Object.keys(participants_centiseconds).forEach(participant => {
        let data = participants_centiseconds[participant];
        for(let i = 0; i< data.length; i++){
            data[i] = stage_minimum[i]/data[i]
        }
    });


    Object.keys(participants_centiseconds_record).forEach(participant => {
        let data = participants_centiseconds_record[participant];
        for(let i = 0; i< data.length; i++){
            data[i] = stage_records[i].finalTime.centiseconds/data[i]
        }
    });


    let datasets = Object.keys(participants_centiseconds).map(participant => {
        let arr = {"label" : participant, "borderColor" : participants[participant].color, "data" : participants_centiseconds[participant], "fill": true}
        return arr;
    });

    let datasets_record = Object.keys(participants_centiseconds_record).map(participant => {
        let arr = {"label" : participant, "borderColor" : participants[participant].color, "data" : participants_centiseconds_record[participant], "fill": true}
        return arr;
    });

    let ctx = document.getElementById('myChart').getContext('2d');
    let ctx_record = document.getElementById('myChart_record').getContext('2d');

    let data = {
        "labels": labels,
        "datasets": datasets
    };

    let data_record = {
        "labels": labels,
        "datasets": datasets_record
    };


    let Data = {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: data,
    
        // Configuration options go here
        options: {
            responsive:true,
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            title: {
                display: true,
                text: 'Average velocity compared to first place'
            }
        }
    }

    let Data_record = {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        'data': data_record,
    
        // Configuration options go here
        options: {
            responsive:true,
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            title: {
                display: true,
                text: 'Average velocity compared to simulation world record'
            }
        }
    }
    let chart, chart_record
    if(typeof(chart) !== "undefined"){
        chart.data = data
        chart.update();
    }
    else{
        chart = new Chart(ctx, Data);
    } 

    if(typeof(chart_record) !== "undefined"){
        chart_record.data = data_record
        chart_record.update();
    }
    else{
        chart_record = new Chart(ctx_record, Data_record);
    } 
}

function hasLegFinished(stage) {
    if(contest.name !== "Magnetic Fields Memorial Invitational 2023") {
        return true;
    }
    const currentLeg = contest.getCurrentLeg();
    const legOfThisStage = contest.getLegOfStage(stage);
    return legOfThisStage.date < currentLeg.date;
}