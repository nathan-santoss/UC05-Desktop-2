const converter = (event) => {
    const moedaReal = parseFloat(document.getElementById('caixa').value)
    const selecionado = event.target.dataset.moeda

    document.getElementById('resultado').style.display = 'block'
    if(!moedaReal && moedaReal !== 0){
        document.getElementById('result').innerHTML = `Preenchimento inválido!`
        return
    }
    switch(selecionado){
        case 'dolar':
            const dolar = moedaReal/5.39
            document.getElementById('result').innerHTML = `O valor em DÓLAR é $${dolar.toFixed(2)}`
            break
        case 'euro':
            const euro = moedaReal/6.27
            document.getElementById('result').innerHTML = `O valor em EURO é ${euro.toFixed(2)} €`
            break
        case 'peso':
            const peso = moedaReal/0.003613
            document.getElementById('result').innerHTML = `O valor em PESO ARGENTINO é $${peso.toFixed(2)} `
            break
        case 'libra':
            const libra = moedaReal/7.17
            document.getElementById('result').innerHTML = `O valor em LIBRA é ${libra.toFixed(2)} £`
            break
        case 'franco':
            const franco = moedaReal/6.77
            document.getElementById('result').innerHTML = `O valor em FRANCO é ${franco.toFixed(2)} ₣ `
            break
    }
    document.getElementById('caixa').value = ''
}
document.querySelectorAll("button[data-moeda]").forEach(botao => {
    botao.addEventListener('click', converter)
})