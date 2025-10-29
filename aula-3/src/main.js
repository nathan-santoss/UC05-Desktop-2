import {app, BrowserWindow} from 'electron'
import * as path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const criarJanela = () => {
    const janela = new BrowserWindow({
        width: 800, height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
            sandbox: false
        },
    })
    janela.setMenu(null)
    janela.loadFile(path.join(__dirname, '../app/index.html'))
    janela.webContents.openDevTools()
    
}

app.whenReady().then(criarJanela)