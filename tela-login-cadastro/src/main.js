import {app, BrowserWindow, ipcMain, dialog, Menu} from 'electron'
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

// janela de login abaixo
let janela_login = null
const criarJanela_login = () => {
    janela_login = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: __preload
        }
    })
    html = path.join(__dirname, '../app/login/index_login.html')
    janela_login.loadFile(html)
    // janela.webContents.openDevTools()
    janela_login.setMenu(null)
}


app.whenReady().then(() => {
    criarJanela_inicial()
})


ipcMain.on('mudarPagina', (event, destino) => {
    janela_inicial.close()
    if(destino === 'Cadastro'){criarJanela_cadastro()}
    else{criarJanela_login()}
})



