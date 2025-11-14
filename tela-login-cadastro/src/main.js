import {app, BrowserWindow, ipcMain, dialog, Menu} from 'electron'
import * as path from 'path'
import { title } from 'process'
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
            sandbox: false,
            preload: __preload
        }
    })
    html = path.join(__dirname, '../app/login/index_login.html')
    janela_login.loadFile(html)
    // janela_login.webContents.openDevTools()
    janela_login.setMenu(null)
}
app.whenReady().then(() => {
    criarJanela_inicial()
    inializacao()
})

// ACIMA ESTÃO AS CONFIGURAÇÕES DAS JANELAS

// ABAIXO ESTÃO AS CONFIGURAÇÕES DO Main.JS

let clientes = [] // array de objetos (pessoas)

ipcMain.on('mudarPagina', (event, origem, destino) => {
    if(origem === 'inicio' && destino === 'Cadastro'){
        janela_inicial.close()
        criarJanela_cadastro()
    }
    else if(origem === 'inicio' && destino === 'Login'){
        janela_inicial.close()
        criarJanela_login()
    }
    else if(origem === 'Cadastro'){
        janela_cadastro.close()
        criarJanela_inicial()
    }
})
// funcionalidade para guardar o cadastro do cliente >>>>
ipcMain.on('guardar-cliente', (event, cliente) => clientes.push(cliente))

// modificação de alertas da janela >>>>>>
let meuAlerta = {
        type: 'info',
        title: undefined,
        message: undefined
}
const inializacao = () => {
    meuAlerta.title = 'Bem vindo!'
    meuAlerta.message = 'Aplicação iniciada. Siga as instruções na tela!'
    dialog.showMessageBox(meuAlerta)
}

ipcMain.on('enviandoAlerta', (event, conteudo) => {
    if(conteudo === 'dadosVazios'){
        meuAlerta.title = 'DADOS INVÁLIDOS!'
        meuAlerta.message = 'É necessário preencher todos os dados do formulário!'
    }
    else if(conteudo === 'senhasInvalidas'){
        meuAlerta.title = 'DADOS INVÁLIDOS!'
        meuAlerta.message = 'As senhas digitadas não coincidem'
    }
    else if(conteudo === 'cadastro-efetuado'){
        meuAlerta.title = 'Formulário preenchido'
        meuAlerta.message = 'Cadastro realizado com sucesso. Siga para o login!'
    }
    dialog.showMessageBox(meuAlerta)
})

// checagem de dados do cliente >>>>>>>>>>
ipcMain.on('checandoCliente', (event, cliente) => {
    const clienteEncontrado = clientes.find(c => c.login_user === cliente.usuario && c.senha1 === cliente.senha)
    if(clienteEncontrado){
        event.reply('resultado-checagem', clienteEncontrado)
        return
    }
    else if(cliente === ''){
        meuAlerta.title = 'DADOS INVÁLIDOS!'
        meuAlerta.message = 'Preencha os dados do login!'
    }
    else{
        meuAlerta.title = 'DADOS INVÁLIDOS!'
        meuAlerta.message = 'Usuário ou senha incorretos. Verifique novamente!'
    }
    dialog.showMessageBox(meuAlerta)
})


