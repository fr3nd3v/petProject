"use strict";
function createRGB(){
    return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) +")";
}

function createSquares(howmany){
    for(let i = 0; i < howmany; i++){
        let square = document.createElement('div');
        square.className = "quadro-style";
        square.style.backgroundColor = createRGB();
        document.querySelector(".grid").appendChild(square);
    }
    chooseRhightSquare();
}


function deleteSquare(event){
    let square = event.target.closest(".quadro-style");
    square.className = 'qudro-style_none';
}

function chooseRhightSquare(){
    let squares = document.querySelector(".grid").children;
    let rhightSquare = squares[Math.floor(Math.random() * (squares.length))];
    console.log(rhightSquare)
    document.querySelector("#about").textContent = rhightSquare.style.backgroundColor;
    
}

document.querySelector(".grid").addEventListener('click', function(event) {
    if(event.target.closest(".quadro-style")){
        let clickedSquare = event.target.closest(".quadro-style").style.backgroundColor;
        let rhightSquare = document.querySelector("#about").textContent;
        if(clickedSquare === rhightSquare){
            youWin();
        }
        else{
            deleteSquare(event);
        }
    };
})

function youWin(){
    let squares = document.querySelector(".grid").children;
    for(let i = 0; i < document.querySelector(".grid").children.length; i++){
        squares[i].className = "quadro-style";
        squares[i].style.backgroundColor = document.querySelector("#about").textContent;
    }
    document.querySelector("#about").textContent = "You WIN!!!";

}

document.querySelector("#reset").onclick = () =>{
    let grid = document.querySelector(".grid");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    document.querySelector("#start").style.display = ""
    document.querySelector("#about").textContent = "ok, lets choose";
}

document.querySelector("#start").onclick = () =>{
    createSquares(document.querySelector("#input").value)
    document.querySelector("#start").style.display = "none"
}