import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    name: 'new-user',
    mudarPagina: (origem, destino) => ipcRenderer.send('mudarPagina', origem, destino),
    guardarCliente: (cliente) => ipcRenderer.send('guardar-cliente', cliente),
    alerta: (conteudo) => ipcRenderer.send('enviandoAlerta', conteudo),
    

    checarLogin: (cliente) => ipcRenderer.send('checandoCliente', cliente),
    resultado: (resultado) => ipcRenderer.on('resultado-checagem', resultado)
})