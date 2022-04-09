const board = document.querySelector(".jogo")
const cartas = []
const imagensFrente = [
    `<img src="imgs/bobrossparrot.gif" class="frente"/>`,
    `<img src="imgs/explodyparrot.gif" class="frente"/>`,
    `<img src="imgs/fiestaparrot.gif" class="frente"/>`,
    `<img src="imgs/metalparrot.gif" class="frente"/>`,
    `<img src="imgs/revertitparrot.gif" class="frente"/>`,
    `<img src="imgs/tripletsparrot.gif" class="frente"/>`,
    `<img src="imgs/unicornparrot.gif" class="frente"/>`
]
const imagemVerso = `<img src="imgs/back.png" class="verso"/>`
let i = 0
let j = 0

let numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
while (numCartas%2!=0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
}
    while (i<(numCartas/2)){
        cartas.push(`<div class="carta">${imagemVerso + imagensFrente[i]}</div>`)
        cartas.push(`<div class="carta">${imagemVerso + imagensFrente[i]}</div>`)
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