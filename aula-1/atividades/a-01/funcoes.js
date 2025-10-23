const checarNumero = () => {       
    const num = document.getElementById('caixa').value
    let ehPar = validiacao(num)
    if(num === '' || isNaN(num)){
        document.getElementById('result').innerHTML = `Digite um número!`
    }
    else if(num >= 0){
        if(ehPar){
            document.getElementById('result').innerHTML = `O número '${num}' é POSITIVO e PAR`
        }
        else{
            document.getElementById('result').innerHTML = `O número '${num}' é POSITIVO e IMPAR`
        }
    }
    else{
        document.getElementById('result').innerHTML = `O número '${num}' é NEGATIVO e IMPAR`
    }
    document.getElementById('caixa').value = ''
}


const validiacao = (numero) => {
    let ehPar
    if(numero % 2 === 0){ehPar = true}
    else{ehPar = false}
    return ehPar
}