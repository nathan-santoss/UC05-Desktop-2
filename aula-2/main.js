import { app, BrowserWindow } from "electron";

const criarJanela = () => {
    const janela = new BrowserWindow({width: 800, height: 800})
    janela.loadFile('./index.html')
    janela.setMenu(null)
}

app.whenReady().then(() => criarJanela())