const grid = document.querySelector(".grid");
const clearButton = document.querySelector("#clear-btn");
const eraserButton = document.querySelector("#eraser-btn");
const colorButton = document.querySelector("#color-btn");
const color = document.querySelector("#color");
const rangeBar = document.querySelector("#range-bar");
const sizeBar = document.querySelector("#size-bar");
let mode = "color";

createGrid(rangeBar.value);
let gridItems = document.querySelectorAll(".grid > div");
gridItems.forEach(item => item.addEventListener('mouseover', () => paint(item)));
rangeBar.addEventListener("input", ()=>updateGrid());
selectMode();

function createGrid(sizeGrid)
{
    for(let j=0; j<sizeGrid; j++)
    {
        const size = 600/sizeGrid;
        const divSize = size.toString() + "px";
        const divs = [];
        for(let i = 0; i<sizeGrid; i++)
        {
            divs[i] = document.createElement("div");
            divs[i].style.height = divSize;
            divs[i].style.width = divSize;
            grid.appendChild(divs[i]);
        }
    }
    showSizeGrid();
}

function deleteGrid()
{
    gridItems.forEach(item =>{
        grid.removeChild(item);
        item.remove();
    });
}

function showSizeGrid()
{
    sizeBar.textContent = `${rangeBar.value} x ${rangeBar.value}`;
}

function selectMode()
{
    clearButton.addEventListener("click", ()=> gridItems.forEach(item =>item.style.background = "#ffffff"));
    eraserButton.addEventListener("click", ()=> mode = "eraser");
    colorButton.addEventListener("click", ()=> mode = "color");
}

function paint(item)
{
    switch(mode)
    {
        case "color":
            item.style.background = color.value;
            break;
        case "eraser":
            item.style.background = "#ffffff";
            break; 
    }
}

function updateGrid()
{
    mode = "color";
    deleteGrid();
    createGrid(rangeBar.value);
    gridItems = document.querySelectorAll(".grid > div");
    gridItems.forEach(item => item.addEventListener('mouseover', () => paint(item)));
}
