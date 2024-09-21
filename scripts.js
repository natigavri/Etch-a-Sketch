let defGrid = 16;
const grid = document.querySelector("#grid");
for (let i = 0; i < defGrid; i++) {
    for(let j = 0; j < defGrid; j++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "square");
        grid.appendChild(newDiv);

    }
}