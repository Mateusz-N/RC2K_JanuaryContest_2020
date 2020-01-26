contest = contestData();

console.log("Reading script.js")
console.log(contest)

document.getElementById("title").innerHTML = contest.name

function turnButtonRed(button){
    button.getElementsByClassName("leftArrow")[0].src = "resources/navlefthover.png";
    button.getElementsByClassName("rightArrow")[0].src = "resources/navrighthover.png";
    button.getElementsByTagName("span")[0].style.color = 'red';
}

function turnButtonWhite(button){
    button.getElementsByClassName("leftArrow")[0].src = "resources/navleft.png";
    button.getElementsByClassName("rightArrow")[0].src = "resources/navright.png";
    button.getElementsByTagName("span")[0].style.color = 'yellow';
}


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


function loadRallyTables(RallyID){
    let tables = document.getElementById("tables")
    tables.innerHTML = "";
    let stages = contest.rallies[RallyID].stages
    let nParticipants = contest.participants.length

    let summaryDiv = document.getElementById("rallyboards")
    summaryDiv.innerHTML = "";

    let graphDiv = document.getElementById('myChart');
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

    for(let i=0; i< stages.length; i++){
        let records = stages[i].records;
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
    

    Object.keys(participants_centiseconds).map(function(participant){
        let data = participants_centiseconds[participant];
        for(let i = 0; i< data.length; i++){
            data[i] = stage_minimum[i]/data[i]
        }
    });


    let datasets = Object.keys(participants_centiseconds).map(function(participant){
        let arr = {"label" : participant, "borderColor" : participants[participant].color, "data" : participants_centiseconds[participant], "fill": true}
        return arr;
    });

    let ctx = document.getElementById('myChart').getContext('2d');
    let data = {
        labels: labels,
        datasets: datasets
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
    if(typeof(chart) !== "undefined"){
        chart.data = data
        chart.update();
    }
    else{
        chart = new Chart(ctx, Data);
    } 
}

