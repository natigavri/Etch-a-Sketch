let gridSize = 16;
const grid = document.querySelector("#grid");
for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let j = 0; j < gridSize; j++){
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

function reGrid(newGridSize) {
    const grid = document.querySelector("#grid");
    while(grid.hasChildNodes()) {
      grid.removeChild(grid.firstChild); 
    }
    for (let i = 0; i < newGridSize; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for(let j = 0; j < newGridSize; j++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "square");
            row.appendChild(newDiv);
    
        }
        grid.appendChild(row);
    } 
}
const gridSizeBtn = document.querySelector(".gridSizeBtn");
gridSizeBtn.addEventListener('click', (event) => {
    let newGridSize = Number(prompt("Enter grid size (2-100):"));
    if (newGridSize > 1 && newGridSize < 101) {
        reGrid(newGridSize);
    }
    });