let mainDiv = document.querySelector(".main");
let gridContainer = document.querySelector(".grid-container");
let settingsContainer = document.querySelector(".settings");
let slider = document.querySelector(".slider");
let numbersOfSquares = document.querySelector("p");
let colorMode = document.querySelector(".color-mode");
let colorInput = document.querySelector(".color-input");
let rainBow = document.querySelector(".random-color");
let eraserButton = document.querySelector(".eraser-button");
let clearButton = document.querySelector(".clear-button");

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
            gridContainer.style.gridTemplateColumns = `repeat(${numbersOfSquares.textContent}, 1fr)`;
            gridContainer.style.gridTemplateRows = `repeat(${numbersOfSquares.textContent}, 1fr)`;
        };
    };
newGrid();

    // Slider Button to Generate new Grid : 
slider.addEventListener("mouseup",newGrid);

    // Random Color : 
function getRandomRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red},${green},${blue})`;
};

rainBow.addEventListener("click",() => {
    let allSquares = document.querySelectorAll(".squares");
    allSquares.forEach(square => square.addEventListener("mouseover",() => {
        square.style.backgroundColor = `${getRandomRGB()}`;
    }));
}); 

    // Eraser Button Event :
eraserButton.addEventListener("click",() => {
    let allSquares = document.querySelectorAll(".squares");
    allSquares.forEach(square => square.addEventListener("mouseover",() => {
        square.style.cssText = "";
    }));
});

    // Clear Button Event :
clearButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".squares");
    allSquares.forEach(square => square.style.cssText = "");
});

    // Color Mode Event :
colorMode.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".squares");
    allSquares.forEach(square => square.addEventListener("mouseover",() => {
        square.style.cssText = `background-color: ${colorInput.value}`;
    }));
});



