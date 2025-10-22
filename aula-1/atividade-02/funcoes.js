let nota1
let nota2

const guardarNota1 = () => {
    nota1 = parseFloat(document.getElementById('nota1').value)*40/100
    document.getElementById('nota-1-div').style.display = 'none'
    document.getElementById('nota-2-div').style.display = 'block'
};
const guardarNota2 = () => {
    nota2 = parseFloat(document.getElementById('nota2').value)*60/100
    const mediaFinal = (nota1 + nota2)
    document.getElementById('nota-2-div').style.display = 'none'
    document.getElementById('result-div').style.display = 'block'
    if(isNaN(mediaFinal)){
        document.getElementById('result').innerHTML = `Digite apenas números!`
    }
    else{
        document.getElementById('result').innerHTML = `Sua média final é = ${mediaFinal.toFixed(2)} pontos`
        document.getElementById('reset-div').style.display = 'block'

    }
}


const concordou = () => {
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''

    document.getElementById('result-div').style.display = 'none'
    document.getElementById('nota-1-div').style.display = 'block'
    document.getElementById('reset-div').style.display = 'none'

    
}
const encerrar = () => {
    document.getElementById('result-div').style.display = 'none'
    document.getElementById('reset-div').style.display = 'none'
}