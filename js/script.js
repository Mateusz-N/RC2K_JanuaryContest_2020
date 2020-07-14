contest = contestData();

console.log("Reading script.js")
console.log(contest)

document.getElementById("title").innerHTML = contest.name

// Entry list generator (START)
let generateEntries = document.getElementById("generateEntries");

    for(let i=0; i<contest.participants.length; i++) {
        let flagImg = `<img src="/resources/flag_${contest.participants[i].country}.png" style="height: 16px; border: 1px solid #CCC;"></img>`;
        if (generateEntries) {
            generateEntries.innerHTML += 
            `<tr>
                <td>${flagImg} ${contest.participants[i].name} ${flagImg}</td>
                <td>${contest.participants[i].car}</td>
            </tr>`
        }
    }
// Entry list generator (END)

let buttonSpace = document.getElementById("buttons")

if(buttonSpace){
    for(let i=0; i< contest.rallies.length; i++){
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

    let summaryDiv = document.getElementById("rallyboards")
    summaryDiv.innerHTML = "";

    let graphDiv = document.getElementById('myChart');
    graphDiv.innerHTML = "";
    
    let graphDiv_record = document.getElementById('myChart_record')
    graphDiv.innerHTML = "";


    if(RallyID !== 6){
        for(let i = 0; i< stages.length; i++){
            stages[i].CreateStageTable(tables, 0) 
        }
        contest.rallies[RallyID].generateSummary(nParticipants).CreateStageTable(summaryDiv, 1)
    }
    else{
        for(let i = 0; i< stages.length; i++){
            stages[i].CreateStageTable(tables,1)
        }
        contest.rallies[RallyID].generateSummary(nParticipants).CreateStageTable(summaryDiv, 2)
    }
   
    //CHART.js 
    
    let stage_minimum = []
    let participants_centiseconds = []
    let participants = []
    let stage_records = []

    for(let i=0; i< stages.length; i++){
        let records = stages[i].records;
        stage_records[i] = stages[i].wr[1];  //0 = Arcade  1 = Simulation
        stage_minimum[i] = Number.POSITIVE_INFINITY;
        for(let j=0; j< records.length; j++){
            let record = records[j]
            if(record.time !== "DNF"){
                if(participants_centiseconds[record.participant.name] === undefined)
                participants_centiseconds[record.participant.name] = [];
                participants_centiseconds[record.participant.name][i] = record.centiseconds;
                participants[record.participant.name] = record.participant;
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

