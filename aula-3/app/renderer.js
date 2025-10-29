
let sorteado
let chances = 5
const start = () => {
    window.api.sortear()
    sorteado = window.api.pegarNum()
    
    document.getElementById('game').style.display = 'block'
    document.getElementById('iniciar').style.display = 'none'

}


const mostrarDica = () => {
    const dica1 = sorteado-3
    const dica2 = sorteado+13
    document.getElementById('iniciar').style.display = 'none'
    document.getElementById('texto-dica').innerHTML = `O número está entre ${dica1} e ${dica2}!`
}


const tentar = () => {
    const tentativa = Number(document.getElementById('lance').value)
    document.getElementById('lance').value = ''
    
    if(isNaN(tentativa) || tentativa === 0){
        document.getElementById('resultado-lance').innerText = `Preenchimento incorreto`
        return
    }
    else if(tentativa !== sorteado && chances > 0){
        chances -= 1
        document.getElementById('tentativas').innerText = `Você possui ${chances} tentativas:`
        document.getElementById('resultado-lance').innerText = `Errou! Tente novamente!`
        if(chances === 0){
            document.getElementById('try').style.display = 'none'
            document.getElementById('resultado-lance').innerText = `Infelizmente você chegou ao limite de tentativas. O número sorteado foi ${sorteado}`
        }
        return
    }
    
    else{
        document.getElementById('try').style.display = 'none'
        document.getElementById('resultado-lance').innerText = `PARABÉNS!!! VOCÊ ACERTOU! o número foi ${sorteado}`
    }
}