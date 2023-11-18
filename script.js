// this

function createSquares(number){
    let container = document.querySelector(".container");
    let newdiv;
    let dimension = 960 / Math.sqrt(number);
    for (let i = 0; i < number; i++){
        newdiv = document.createElement("div");
        newdiv.classList.add("square");
        newdiv.style.width = `${dimension}px`;
        newdiv.style.height = `${dimension}px`;
        newdiv.id = i;
        container.append(newdiv);
    }
}

function clear() {
    let container = document.querySelector(".container");
    container.innerHTML = "";
}


let button = document.querySelector(".reset");
button.addEventListener('click', (event) => {
    clear();
    let size = prompt("How many squares per axis do you want?");
    createSquares(size * size);
});



let container = document.querySelector(".container");
container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "black";
});

createSquares(16*16);