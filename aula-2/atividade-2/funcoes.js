const calcular = () => {
    const divsBimestre = document.querySelectorAll('div.bimestre')  
    const caixas = document.querySelectorAll('.bimestre input')
    
    const primeiro = document.getElementById('bimestre1').value
    const segundo = document.getElementById('bimestre2').value
    const terceiro = document.getElementById('bimestre3').value
    const quarto = document.getElementById('bimestre4').value
    const notas = [primeiro, segundo, terceiro, quarto]

    let invalido = notas.some(nota => nota.trim() === '' || isNaN(Number(nota)))
    
    document.getElementById('resultado-div').style.display = 'block'

    divsBimestre.forEach(div => div.style.display = 'none')
    caixas.forEach(caixa => caixa.value = '')

    if(invalido){
        document.getElementById('resultado').innerHTML = `Preencha corretamente as notas!`
        return
    }
    let resultado = notas.reduce((ac, nota) => ac + Number(nota), 0)
    document.getElementById('resultado').innerHTML = `O resultado da média do aluno é = ${resultado}`
    
}

const reiniciar = () => {
    const divsBimestre = document.querySelectorAll('div.bimestre')  
    document.getElementById('resultado-div').style.display = 'none'
    divsBimestre.forEach(div => div.style.display = 'block')
}
