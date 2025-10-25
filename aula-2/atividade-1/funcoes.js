const converter = (event) => {
    const moedaReal = document.getElementById('caixa').value
    const selecionado = event.target.dataset.moeda
    switch(selecionado){
        case 'dolar':
            break
        case 'euro':
            break
        case 'peso':
            break
        case 'libra':
            break
        case 'libra':
            break
        default:
            break
    }
    
}
document.querySelectorAll("button[data-moeda]").forEach(botao => {
    botao.addEventListener('click', converter)
})