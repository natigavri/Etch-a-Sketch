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

addEventListener("mouseover", (e) => {
    if(e.target.parentNode.className === 'row'){
        const ranColor = () => Number(Math.floor(Math.random() * 256));
        let opacity = Number(e.target.style.opacity);
        if(opacity < 1) {
            opacity += 0.1;
            e.target.style.opacity = opacity;
            e.target.style.backgroundColor = `rgba(${ranColor()}, ${ranColor()}, ${ranColor()})`;
        }else{
            e.target.style.backgroundColor = `rgba(${ranColor()}, ${ranColor()}, ${ranColor()})`;
        }
    }
})