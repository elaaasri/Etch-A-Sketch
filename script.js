// Main Container : 
let mainDiv = document.createElement("div");
mainDiv.className = "main";
document.body.appendChild(mainDiv);
// Grid Container : 
let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
mainDiv.appendChild(gridContainer);
// Settings Container :
let settingsContainer = document.createElement("div");
settingsContainer.className = "settings";
mainDiv.prepend(settingsContainer);
// Slider Button :
let slider = document.querySelector(".slider");
let numbersOfSquares = document.querySelector("p");
settingsContainer.prepend(slider);
// RainBow Button :
let rainBow = document.createElement("button");
rainBow.className = "random-color";
rainBow.textContent = "RainBow Mode";
settingsContainer.appendChild(rainBow);
// Eraser Button :
let eraserButton = document.createElement("button");
eraserButton.className = "eraser";
eraserButton.textContent = "Erazer";
settingsContainer.appendChild(eraserButton);
// Color Mode Button : 
let colorMode = document.createElement("input");
colorMode.className = "color-mode";
colorMode.type = "color";
settingsContainer.appendChild(colorMode);
// Clear Button : 
let clearButton = document.createElement("button");
clearButton.className ="clear-button";
clearButton.textContent = "Clear";
settingsContainer.appendChild(clearButton);
 // Removing The Squares :
function removeSquares(){
        let allSquares = document.querySelectorAll(".squares");
        allSquares.forEach(square => {
        square.remove();
    });
};
// Generating The New Grid :
slider.addEventListener("mouseup",() => {
    // Deleting The Squares Before Generating New Grid : 
    removeSquares();
    // New Grid : 
    let output = numbersOfSquares.textContent * numbersOfSquares.textContent;
    for (let i = 0; i < output; i++) {
        let squareDivs = document.createElement("div");
        squareDivs.className = "squares";
        gridContainer.appendChild(squareDivs);
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateColumns = `repeat(${numbersOfSquares.textContent}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numbersOfSquares.textContent}, 1fr)`;
    };
});
// RainBow Mode When Hovering : 
    rainBow.addEventListener("click",() => {
        let allSquares = document.querySelectorAll(".squares");
        allSquares.forEach(square => square.addEventListener("mouseover",() => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
        }));    
    });
// Eraser Button Event :
    eraserButton.addEventListener("click",() => {
        let allSquares = document.querySelectorAll(".squares");
        allSquares.forEach(square => square.addEventListener("mouseover",() => {
            square.style.cssText = "";
        }));    
    });
// Color Mode When Hovering :
    colorMode.addEventListener("change", () => {
        let allSquares = document.querySelectorAll(".squares");
        allSquares.forEach(square => square.addEventListener("mouseover",() => {
            square.style.cssText = `background-color: ${colorMode.value}`;
        }));
    });
// Clear Button Event :
clearButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".squares");
    allSquares.forEach(square => square.remove());
});




















