"use strict"

const botaoTrocaImagem =  document.getElementById('troca-imagem')

function trocarImagem() {
    let nomeImagem = document.getElementById('nome-imagem').value.trim()
    nomeImagem = nomeImagem.toLowerCase()

    while (nomeImagem.includes(' ')) {
        nomeImagem = nomeImagem.replace(' ', '_')
    }

    const caminhoImagem = `url(./img/${nomeImagem}`

    document.documentElement.style.setProperty('--bg-img', `${caminhoImagem}.jpg)`)
}

botaoTrocaImagem.addEventListener('click', trocarImagem)