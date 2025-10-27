import { app, BrowserWindow } from "electron";

const criarJanela = () => {
    const janela = new BrowserWindow({width: 800, height: 400, resizable: false, maximizable: false, minimizable: false})
    janela.loadFile('./index.html')
    janela.setMenu(null)
    
    const momento = new Date()
    janela.once('ready-to-show', () => {
        console.log(`========= APP INICIADO (${momento.toLocaleTimeString('pt-BR')}) =========`);
    })
    janela.on('closed', () => {
        console.log(`========= APP FINALIZADO (${momento.toLocaleTimeString('pt-BR')}) =========`);
    })
}

app.whenReady().then(criarJanela)