import { contextBridge } from "electron"

contextBridge.exposeInMainWorld('api',{
    name: 'calculator',

})

const captacao = () => {
    const caixa = document.getElementById('caixa')
    const teclado = document.getElementById('teclado')

    teclado.addEventListener('click', (event) => {
        const botao = event.target.textContent;
        if(botao === 'CE'){display.value}
        else if( botao === '='){
            
        }
    })
}

const calcular = () => {

}