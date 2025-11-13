const mudarpagina = () => {
    const botoes = document.getElementById('botoes')
    botoes.addEventListener('click', (event) => {
        const destino = event.target.textContent
        if(destino === 'Cadastro'){
            window.api.mudarPagina(destino)
            return
        }
        window.api.mudarPagina(destino)
    })
}


