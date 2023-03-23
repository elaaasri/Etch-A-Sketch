// Main Container : 
let mainDiv = document.createElement("div");
mainDiv.id = "Main";
document.body.appendChild(mainDiv);
// Grid Container : 
let gridContainer = document.createElement("div");
gridContainer.id = "Grid-Container";
mainDiv.appendChild(gridContainer);
// The Start Grid 16*16 :
for (let i = 0; i < 256; i++) {
    let squareDivs = document.createElement("div");
    squareDivs.className = "Squares";
    gridContainer.appendChild(squareDivs);

    squareDivs.addEventListener("mouseover",function() {
        this.style.cssText = "background-color: blue";
    }); 
};
// Button To Change Number Of Squares : 
let Button = document.createElement("button");
Button.className = "Button";
Button.textContent = "Button";
mainDiv.prepend(Button);

Button.addEventListener("click", () => {
    let numbersOfSquares = prompt("Enter Number Of Squares : ");
    let output = numbersOfSquares * numbersOfSquares;
    // Setting The Limit Of The Number Of Squares : 
    if (numbersOfSquares > 64) {
        alert("Max Number Of Squares Is 100!")
        return numbersOfSquares;
    };
    // Removing The Squares :
    let allSquares = document.querySelectorAll(".Squares");
    allSquares.forEach(square => {
        square.remove();
    });
    // Generating The New Grid :
    for (let i = 0; i < output; i++) {
        let squareDivs = document.createElement("div");
        squareDivs.className = "Squares";
        gridContainer.appendChild(squareDivs);
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateColumns = `repeat(${numbersOfSquares}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numbersOfSquares}, 1fr)`;
        // Changing The Color When Hovering :
        squareDivs.addEventListener("mouseover",function() {
            this.style.cssText = "background-color: blue";
        }); 
    };
});