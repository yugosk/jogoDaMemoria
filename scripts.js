const board = document.querySelector("ul")
const cartas = document.querySelectorAll("li")
let i = 0
let j = 0
let numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
while (numCartas%2!=0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
}
    while (i<(numCartas/2)){
        cartas.push(`<li class="carta${i}"></li>`)
        cartas.push(`<li class="carta${i}"></li>`)
        i++
    }
    cartas.sort(comparador)
    while (j<numCartas) {
        board.innerHTML += cartas[j]
        j++    
    }


function comparador() {
    return Math.random() - 0.5
}