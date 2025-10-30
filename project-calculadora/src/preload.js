import { contextBridge } from "electron"

let resultado
contextBridge.exposeInMainWorld('api',{
    name: 'calculator',
    operar: (entrada) => resultado = eval(entrada),
    resolucao: () => resultado
})
