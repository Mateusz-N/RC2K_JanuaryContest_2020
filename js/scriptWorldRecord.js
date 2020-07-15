contest = contestData();

document.getElementById("title").innerHTML = "World Records";

let buttonSpace = document.getElementById("buttons");
for(let i=0; i< contest.rallies.length; i++){
    let button = document.createElement("button")
    button.setAttribute("onclick","loadRallyTables("+ i +")");
    button.innerHTML = contest.rallies[i].name;
    buttonSpace.appendChild(button);
}
loadRallyTables(0);


function loadRallyTables(RallyID){
    let tables = document.getElementById("tables")
    if(tables === null) return;
    tables.innerHTML = "";
    let stages = contest.rallies[RallyID].stages
    for(let i = 0; i< stages.length; i++){
        stages[i].CreateWorldRecordEntireStageTable(tables, 0) 
    }
}
