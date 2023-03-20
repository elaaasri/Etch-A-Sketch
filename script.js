let mainDiv = document.createElement("div");
mainDiv.id = "Main";
document.body.appendChild(mainDiv);

let containerDiv = document.createElement("div");
containerDiv.className = "Grid-Container";
mainDiv.appendChild(containerDiv);

for (let i = 0; i < 256; i++) {
    var squareDivs = document.createElement("div");
    squareDivs.className = "Squares";
    squareDivs.textContent = "box";
    containerDiv.appendChild(squareDivs);

    squareDivs.addEventListener("mouseover",function() {
        console.log("zbe");
        this.style.cssText = "background-color: blue";
    });
};

let Button = document.createElement("button");
Button.className = "Button";
Button.textContent = "Button";
mainDiv.prepend(Button);


