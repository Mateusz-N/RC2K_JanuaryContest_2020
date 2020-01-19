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
for(let i=0; i< contest.rallies.length; i++){
    let button = document.createElement("button")
    button.setAttribute("onclick","loadRallyTables("+ i +")");
    button.innerHTML = contest.rallies[i].name;
    buttonSpace.appendChild(button);
}

loadRallyTables(0)

function loadRallyTables(RallyID){
    let tables = document.getElementById("tables")
    tables.innerHTML = "";
    let stages = contest.rallies[RallyID].stages

    for(let i = 0; i< stages.length; i++){
        stages[i].CreateStageTable(tables)
    }
    let summaryDiv = document.getElementById("rallyboards")
    summaryDiv.innerHTML = "";
    contest.rallies[RallyID].generateSummary().CreateStageTable(summaryDiv, contest.participants.length)
}


