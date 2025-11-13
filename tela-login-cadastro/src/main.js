import {app, BrowserWindow, ipcMain, dialog, Menu} from 'electron'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __preload = path.join(__dirname, 'preload.js')
let html = null

let janela = null
const criarJanela_inicial = () => {
    janela = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: __preload
        }
    })
    html = path.join(__dirname, '../app/inicial/index_inicial.html')
    // janela.webContents.openDevTools()
    janela.setMenu(null)

}

app.whenReady().then(() => {
    criarJanela_inicial()
})