/// <reference path="game.ts" />
// window.addEventListener("load", function() {    

      
//     let div: HTMLElement = document.createElement("div");
//     div.setAttribute ("class", "start");
//     document.body.appendChild(div); 
    
//     let link: HTMLElement = document.createElement("div");
//     link.setAttribute("class", "link");
//     link.innerHTML = "Start!";
//     div.appendChild(link)
    
//     link.addEventListener('click', startGame);

window.addEventListener("load", function() {
    new Game();
});