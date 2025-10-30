const captacao = () => {
    const teclado = document.getElementById('teclado')
    
    teclado.addEventListener('click', (event) => {
        const botao = event.target.textContent;
        if(botao === 'CE'){document.getElementById('caixa').value = ''} 
        else if(botao.trim() === '='){
            const caixa = document.getElementById('caixa').value
            window.api.operar(caixa)
            document.getElementById('caixa').value = window.api.resolucao()
        }
        else{document.getElementById('caixa').value += botao}
    })
}

window.addEventListener('load', captacao)