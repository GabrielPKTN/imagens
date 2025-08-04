"use strict"

const botaoTrocaImagem =  document.getElementById('troca-imagem')

function trocarImagem() {
    const imagem = document.getElementById('nome-imagem').value
    document.documentElement.style.setProperty('--bg-img', imagem)
}

botaoTrocaImagem.addEventListener('click', trocarImagem)