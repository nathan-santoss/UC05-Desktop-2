import {app, BrowserWindow, ipcMain, dialog, Menu, ipcMain} from 'electron'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __preload = path.join(__dirname, 'preload.js')
let html = null

let janela_inicial = null
const criarJanela_inicial = () => {
    janela_inicial = new BrowserWindow({
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
    janela_inicial.loadFile(html)
    // janela.webContents.openDevTools()
    janela_inicial.setMenu(null)

}
// janela de cadastro abaixo
let janela_cadastro = null
const criarJanela_cadastro = () => {
    janela_cadastro = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: __preload
        }
    })
    html = path.join(__dirname, '../app/cadastro/index_cadastro.html')
    janela_cadastro.loadFile(html)
    // janela.webContents.openDevTools()
    janela_cadastro.setMenu(null)

}


app.whenReady().then(() => {
    criarJanela_inicial()
})


ipcMain.on('inicial-cadastro', (event) => {
    janela_inicial.close()
    criarJanela_cadastro()
})