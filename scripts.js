let defGrid = 16;
const grid = document.querySelector("#grid");
for (let i = 0; i < defGrid; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let j = 0; j < defGrid; j++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "square");
        row.appendChild(newDiv);

    }
    grid.appendChild(row);
}