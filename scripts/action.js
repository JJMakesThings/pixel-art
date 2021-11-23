const outer = document.getElementById("art-container");

let gridSize = 16;

function createElement(elemPercent){
    let element = document.createElement("div");
    element.classList.add("art-element");
    element.style.width = `${elemPercent}%`;
    element.style.height = `${elemPercent}%`;
    element.style.opacity = "";
    element.addEventListener("mouseenter", function(){
        if (shadingButton.classList.contains("shader")){
            let alpha = parseFloat(this.style.opacity);
            if (isNaN(alpha)){
                this.style.opacity = ".1";
            }else if(alpha<1){
                alpha=alpha+.1;
                this.style.opacity = `${alpha}`;
            };
        }else {
            this.style.opacity = "1";
        };
        this.style.backgroundColor = "black";
    });
    outer.appendChild(element);
};

function createContainer(gridSize){
    elemPercent = 100/gridSize;
    for (i=0; i<(gridSize**2) ; i++){
        createElement(elemPercent);
    };
};

const resetButton = document.getElementById("button-reset");
resetButton.addEventListener("click", function(){
    outer.innerHTML='';
    let newGridSize = window.prompt("What grid size would you like? (max:100)", 16);
    if (isNaN(newGridSize)||newGridSize<1||newGridSize>100){
        newGridSize = 16;
    };
    newGridSize = Math.floor(newGridSize);
    createContainer(newGridSize);
});

const shadingButton = document.getElementById("button-shader");
shadingButton.addEventListener("click", function(){
    if (this.classList.contains("shader")){
        this.classList.remove("shader");
        this.innerText="Turn ON Shader";
    }else {
        this.classList.add("shader");
        this.innerText="Turn OFF Shader";
    };
});


createContainer(gridSize);

