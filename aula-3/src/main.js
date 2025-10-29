import {app, BrowserWindow} from 'electron'
import {path} from 'node:path'
import { contextIsolated } from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const criarJanela = () => {
    const janela = new BrowserWindow({
        width: 800, height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    })
    janela.setMenu(null)
    janela.loadFile('../app/index.html')
    
}

app.whenReady().then(criarJanela)