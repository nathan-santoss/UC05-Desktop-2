import { contextBridge } from "electron"

let numeroSorteado
contextBridge.exposeInIsolatedWorld('api', {
    name: 'Jogo de Adivinhação',
    version: '1.0.0',
    sortear: () => {if(numeroSorteado === null || numeroSorteado === undefined){numeroSorteado = sortearNum()}},
    pegarNum: () => numeroSorteado
    
})

const sortearNum = () => {
    const max = 100
    const min = 1
    const num = Math.floor(Math.random() * (max - min + 1) + min)
    return num
}