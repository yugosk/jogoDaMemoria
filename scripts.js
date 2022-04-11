const board1 = document.querySelector(".jogo1")
const board2 = document.querySelector(".jogo2")
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
let numJogadas = 0
const travarTela = document.querySelector(".impedir-clique")

let numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
while (numCartas%2!=0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
}
while (i<(numCartas/2)){
    cartas.push(`<div class="carta" onclick="virarCarta(this)">${imagemVerso + imagensFrente[i]}</div>`)
    cartas.push(`<div class="carta" onclick="virarCarta(this)">${imagemVerso + imagensFrente[i]}</div>`)
    i++
}
cartas.sort(comparador)
while (j<numCartas/2) {
    board1.innerHTML += cartas[j]
    j++    
}
while (j<numCartas) {
    board2.innerHTML += cartas[j]
    j++    
}

function jogarDeNovo() {
    i = 0
    j = 0
    numJogadas = 0
    document.querySelector(".jogo1").innerHTML = ""
    document.querySelector(".jogo2").innerHTML = ""
    numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
    while (numCartas%2!=0 || numCartas < 4 || numCartas > 14) {
        numCartas = Number(prompt("Com quantas cartas deseja jogar?"));
    }
    while (i<(numCartas/2)){
        cartas.push(`<div class="carta" onclick="virarCarta(this)">${imagemVerso + imagensFrente[i]}</div>`)
        cartas.push(`<div class="carta" onclick="virarCarta(this)">${imagemVerso + imagensFrente[i]}</div>`)
        i++
    }
    cartas.sort(comparador)
    while (j<numCartas/2) {
        board1.innerHTML += cartas[j]
        j++    
    }
    while (j<numCartas) {
        board2.innerHTML += cartas[j]
        j++    
    }
}

function virarCarta(elemento) {
    elemento.classList.toggle("virada")
    numJogadas++
    verificar()
}

function verificar() {
    const par = document.querySelectorAll(".virada")
    if (par.length >= 2) {
        const c1 = par[0].querySelector(".frente")
        const c2 = par[1].querySelector(".frente")
        if (c1.src === c2.src) {
            par[0].onclick = ""
            par[0].classList.add("certo")
            par[1].onclick = ""
            par[1].classList.add("certo")
            setTimeout(cartasCertas, 150)
        } else {
            travarTela.style.display = "inline"
            setTimeout(cartasErradas, 650)
        }
    }
}

function cartasCertas() {
    const par = document.querySelectorAll(".virada")
    par[0].style.transition = "none"
    par[0].classList.remove("virada")
    par[1].style.transition = "none"
    par[1].classList.remove("virada")
    travarTela.style.display = "none"
    numCartas -= 2
    if (numCartas === 0) {
        alert(`Você ganhou em ${numJogadas} jogadas!`)
        let jogarNovamente = prompt("Quer jogar novamente? ('sim' ou 'não')")
        if (jogarNovamente === "sim"){
            jogarDeNovo()
        } else if (jogarNovamente === "não") {
                alert("Espero que tenha gostado!")
        } else {
            while (jogarNovamente !== "não" || jogarNovamente !== "sim") {
                jogarNovamente = prompt(`Insira uma resposta válida!\nQuer jogar novamente? ('sim' ou 'não')`)
                if (jogarNovamente === "sim"){
                    jogarDeNovo()
                } else {
                        alert("Espero que tenha gostado!")
                }
            }
        }   
    }
}

function cartasErradas() {
    const par = document.querySelectorAll(".virada")
    par[0].classList.remove("virada")
    par[1].classList.remove("virada")
    travarTela.style.display = "none"
}

function comparador() {
    return Math.random() - 0.5
}
