import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    name: 'new-user',
    mudarPagina: (destino) => ipcRenderer.send('mudarPagina', destino)
})