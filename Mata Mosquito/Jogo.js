var altura = 0
var largura = 0
var vidas = 1
var tempo = 90
var criaMosquitoTempo = 0

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
}
else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
}
else if (nivel === 'hardcore') {
    criaMosquitoTempo = 750
}

//captura as proporções da tela//
function AjustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

AjustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'Vitoria.html'
    }
    else {
        document.getElementById('cronometro').innerHTML = tempo //valor contido entre as tags
    }
}, 1000)

//Cria Posições Randomicas e nao deixa sair da tela//
function PosicaoRandomica() {
    //remover mosquito anterior
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_Jogo.html'
        }
        else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaox = Math.floor(Math.random() * largura - 90)
    var posicaoy = Math.floor(Math.random() * altura - 90)

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaox < 0 ? 0 : posicaoy

    console.log(posicaox, posicaoy)

    //cria um elemento html e seus css//
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = TamanhoAleatorio() + " " + LadoAleatorio()
    mosca.style.left = posicaox + 'px'
    mosca.style.top = posicaoy + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosca)
}

function TamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function LadoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}