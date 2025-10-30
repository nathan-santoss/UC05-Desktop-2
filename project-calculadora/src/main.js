import {app, BrowserWindow} from 'electron'
import * as path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const criarJanela = () => {
    const janela = new BrowserWindow({
        fullscreen: true,
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
            sandbox: false,
            preload: path.join(__dirname, 'preload.js'),
        }
    })
   
    janela.setMenu(null);
    janela.webContents.openDevTools()
    janela.loadFile(path.join(__dirname,'../app/index.html'))

}

app.whenReady().then(criarJanela)