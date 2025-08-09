"use strict"

const botaoTrocaImagem =  document.getElementById('troca-imagem')
const botaoAuto = document.getElementById('slide-show')

function slideFade() {
    document.documentElement.style.setProperty('--bg-auto', `slider 12s infinite`)
}

function trocarImagem() {

    const imagens = ['', 'black clover', 'mushoku tensei', 'one punch man', 'pokemon', 'solo leveling', 'yu yu hakusho']

    document.documentElement.style.setProperty('--bg-auto', '')
    let nomeImagem = document.getElementById('nome-imagem').value.trim()

    if (!isNaN(nomeImagem)) {
        for (let anime of imagens) {
            if (nomeImagem == imagens.indexOf(anime)) {
                nomeImagem = anime
            }
        }
    }

    nomeImagem = nomeImagem.toLowerCase()

    while (nomeImagem.includes(' ')) {
        nomeImagem = nomeImagem.replace(' ', '_')
    }

    const caminhoImagem = `url(./img/${nomeImagem}`

    document.documentElement.style.setProperty('--bg-img', `${caminhoImagem}.jpg)`)
}

botaoTrocaImagem.addEventListener('click', trocarImagem)
botaoAuto.addEventListener('click', slideFade)
