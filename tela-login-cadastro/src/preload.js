import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    name: 'new-user',
    inicial_to_cadastro: () => ipcRenderer.send('inicial-cadastro')
})