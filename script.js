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
    // Color Mode Button : 
let colorMode = document.createElement("button");
colorMode.className = "color-mode";
colorMode.textContent = "Color Mode";
let colorInput = document.createElement("input");
colorInput.className = "color-input";
colorInput.type = "color";
settingsContainer.appendChild(colorInput);
settingsContainer.appendChild(colorMode);
    // RainBow Button :
let rainBow = document.createElement("button");
rainBow.className = "random-color";
rainBow.textContent = "RainBow Mode";
settingsContainer.appendChild(rainBow);
let eraserButton = document.createElement("button");
eraserButton.className = "eraser-button";
eraserButton.textContent = "Erazer";
settingsContainer.appendChild(eraserButton);
    // Clear Button : 
let clearButton = document.createElement("button");
clearButton.className ="clear-button";
clearButton.textContent = "Clear";
settingsContainer.appendChild(clearButton);
    // Footer  Appending :
let footer = document.querySelector(".footer");
document.body.append(footer);

    // Removing The Squares :
function removeSquares(){
        let allSquares = document.querySelectorAll(".squares");
        allSquares.forEach(square => {
        square.remove();
    });
};

    // Generating The New Grid :
function newGrid(){
        // Deleting The Squares Before Generating New Grid : 
    removeSquares();
        // New Grid : 
    let sliderOutput = numbersOfSquares.textContent * numbersOfSquares.textContent;
    for (let i = 0; i < sliderOutput; i++) {
            let squareDivs = document.createElement("div");
            squareDivs.className = "squares";
            gridContainer.appendChild(squareDivs);
            gridContainer.style.display = "grid";
            gridContainer.style.gridTemplateColumns = `repeat(${numbersOfSquares.textContent}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${numbersOfSquares.textContent}, 1fr)`;
        };
    };
newGrid();

    // Slider Button to Generate new Grid : 
slider.addEventListener("mouseup",newGrid);
    // Selecting All The Squares :
let allSquares = document.querySelectorAll(".squares");

    // Random Color : 
function getRandomRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}
rainBow.addEventListener("click",() => {
    allSquares.forEach(square => square.addEventListener("mouseover",() => {
        square.style.backgroundColor = `${getRandomRGB()}`;
    }));
}); 
    // Eraser Button Event :
    eraserButton.addEventListener("click",() => {
        allSquares.forEach(square => square.addEventListener("mouseover",() => {
            square.style.cssText = "";
        }));
    });
    // Clear Button Event :
clearButton.addEventListener("click", () => {
    allSquares.forEach(square => square.style.cssText = "");
});
    // Color Mode Event :
colorMode.addEventListener("click", () => {
    allSquares.forEach(square => square.addEventListener("mouseover",() => {
        square.style.cssText = `background-color: ${colorInput.value}`;
    }));
});



