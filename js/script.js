contest = contestData();

console.log("Reading script.js")
console.log(contest)

document.getElementById("title").innerHTML = contest.name

// Compare function for sorting participants by Group (ascending order)
function compareGroups(participant1, participant2) {
    if (participant1.group.charAt(1) < participant2.group.charAt(1)) {
        return 1;
    }
    if (participant1.group.charAt(1) > participant2.group.charAt(1)) {
        return -1;
    }
    return 0;
}

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
                <td>${participant.group}</td>
                <td>${participant.car}</td>
            </tr>`
        }
    }
// Entry list generator (END)

let buttonSpace = document.getElementById("buttons");

if(buttonSpace){
    for(let i=0; i< contest.rallies.length; i++){
        // let button = document.createElement("img")
        // button.setAttribute("onclick","loadRallyTables("+ i +")");
        // button.setAttribute("src", `../../resources/rally${i}.png`);
        // button.setAttribute("width", "100px");
        let button = document.createElement("button")
        button.setAttribute("onclick","loadRallyTables("+ i +")");
        button.innerHTML = contest.rallies[i].name;
        buttonSpace.appendChild(button);
    }
    loadRallyTables(0)
}
else{
    contest.generateFinalSummary()
    contest.AddRally(contest.summaryRally);
    console.log("FinalSummary")
    loadRallyTables(6);
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
    let stages = contest.rallies[RallyID].stages
    let nParticipants = contest.participants.length

    let summaryDiv = document.getElementById("rallyboards") || document.getElementById("finalboard")
    summaryDiv.innerHTML = "";

    let graphDiv = document.getElementById('myChart');
    graphDiv.innerHTML = "";
    
    let graphDiv_record = document.getElementById('myChart_record')
    graphDiv_record.innerHTML = "";


    if(RallyID !== 6){
        for(let i = 0; i< stages.length; i++){
            stages[i].CreateContestEntireStageTable(tables, 0) 
        }
        contest.rallies[RallyID].generateSummary(nParticipants).CreateContestEntireStageTable(summaryDiv, 1)
    }
    else{
        for(let i = 0; i< stages.length; i++){
            stages[i].CreateContestEntireStageTable(tables,1)
        }
        contest.rallies[RallyID].generateSummary(nParticipants).CreateContestEntireStageTable(summaryDiv, 2)
    }
   
    //CHART.js 
    
    let stage_minimum = []
    let participants_centiseconds = []
    let participants = []
    let stage_records = []

    for(let i=0; i< stages.length; i++){
        let records = stages[i].records;
        stage_records[i] = stages[i].wr["simulation"][0]; //0 = first place
        stage_minimum[i] = Number.POSITIVE_INFINITY;
        for(let j=0; j< records.length; j++){
            let record = records[j]
            if(record.time !== "DNF"){
                if(participants_centiseconds[record.participant.user.name] === undefined)
                participants_centiseconds[record.participant.user.name] = [];
                participants_centiseconds[record.participant.user.name][i] = record.centiseconds;
                participants[record.participant.user.name] = record.participant;
                if(record.centiseconds < stage_minimum[i]) stage_minimum[i] = record.centiseconds;
            }
        }
    }
    let labels = stages.map((S)=>S.name)
    let participants_centiseconds_record = clone(participants_centiseconds);

    Object.keys(participants_centiseconds).map(function(participant){
        let data = participants_centiseconds[participant];
        for(let i = 0; i< data.length; i++){
            data[i] = stage_minimum[i]/data[i]
        }
    });


    Object.keys(participants_centiseconds_record).map(function(participant){
        let data = participants_centiseconds_record[participant];
        for(let i = 0; i< data.length; i++){
            data[i] = stage_records[i].centiseconds/data[i]
        }
    });


    let datasets = Object.keys(participants_centiseconds).map(function(participant){
        let arr = {"label" : participant, "borderColor" : participants[participant].color, "data" : participants_centiseconds[participant], "fill": true}
        return arr;
    });

    let datasets_record = Object.keys(participants_centiseconds_record).map(function(participant){
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