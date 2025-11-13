const mudarpagina = () => {
    const botoes = document.getElementById('botoes')
    botoes.addEventListener('click', (event) => {
        const destino = event.target.textContent
        if(destino === 'Cadastro'){
            window.api.mudarPagina('inicio', destino)
            return
        }
        window.api.mudarPagina('inicio', destino)
    })
}


