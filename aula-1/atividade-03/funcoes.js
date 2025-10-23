let temp

const kelvin = () => {
    temp = parseFloat(document.getElementById('entrada-celcius').value)
    document.getElementById('resultado-div').style.display = 'block'
    if(isNaN(temp)){
        document.getElementById('resultado').innerHTML = `Digite apenas números!`
    }
    else{
        const kelvin = (temp + 273.15).toFixed(2)
        document.getElementById('resultado').innerHTML = `A temperatura em KELVIN é = ${kelvin}`
    }
    document.getElementById('entrada-celcius').value = ''
}
const fahrenheit = () => {
    temp = parseFloat(document.getElementById('entrada-celcius').value)
    document.getElementById('resultado-div').style.display = 'block'
    if(isNaN(temp)){
        document.getElementById('resultado').innerHTML = `Digite apenas números!`
    }
    else{
        const fahrenheit = (temp * (9/5)) + 32
        document.getElementById('resultado').innerHTML = `A temperatura em FAHRENHEIT é = ${fahrenheit.toFixed(2)}`
    }
    document.getElementById('entrada-celcius').value = ''
}

