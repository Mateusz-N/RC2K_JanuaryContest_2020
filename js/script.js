contest = contestData();

console.log("Reading script.js")
console.log(contest)

document.getElementById("title").innerHTML = contest.name

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
        let divStage = document.createElement('div')
        divStage.className = "divStage"

        let divTitleImage = document.createElement('div')
        divTitleImage.className = "divTitleImage"

        let newTitle = document.createElement('h4')
        newTitle.innerHTML = stages[i].name
        divTitleImage.appendChild(newTitle)

        let newImage = document.createElement("img")
        newImage.src = stages[i].imageURL
        newImage.className = "mapImage"
        divTitleImage.appendChild(newImage)
        
        divStage.appendChild(divTitleImage)

        let newTable = document.createElement('table')
        newTable.setAttribute("class", "table")
        newTable.innerHTML = 
            `<thead class="thead-dark">
                <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Time</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>`
        let records = stages[i].records
        for(let j = 0; j< records.length; j++)
        {
            newTable.innerHTML+= 
            `
            <tr>
                <th scope="row">`+(j+1)+`</th>
                <td>`+ records[j].participant.name +`</td>
                <td>`+ records[j].time + `</td>
                <td>`+ (9-j)+`</td>
            </tr>
            `
        }
        newTable.innerHTML+= `</tbody>`
        
        divStage.appendChild(newTable)
        tables.appendChild(divStage)
    }
}


