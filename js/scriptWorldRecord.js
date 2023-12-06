let contest = contestData();

currentWrDirection = "arcade";
currentRallyId = 0;


let buttonSpace = document.getElementById("buttons");
for(let i=0; i< contest.rallies.length; i++){
    let button = document.createElement("button")
    button.setAttribute("onclick","loadRallyTables("+ i +")");
    button.innerHTML = contest.rallies[i].name;
    buttonSpace.appendChild(button);
}
loadRallyTables();

function setCurrentWrSide(key){
    currentWrDirection = key;
    loadRallyTables();
}

function updateTitle(){
    document.getElementById("title").innerHTML = "World Records - " + capitalizeFirstLetter(currentWrDirection);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function loadRallyTables(RallyID = currentRallyId, direction = currentWrDirection){
    currentRallyId = RallyID;
    updateTitle();
    let tables = document.getElementById("tables")
    if(tables === null) return;
    tables.innerHTML = "";
    let stages = contest.rallies[RallyID].stages
    for(let i = 0; i< stages.length; i++){
        stages[i].CreateWorldRecordEntireStageTable(tables, direction); 
    }
}

