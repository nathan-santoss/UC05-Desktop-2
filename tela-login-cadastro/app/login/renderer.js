const realizarLogin = () => {
    const user = document.getElementById('user').value
    const password = document.getElementById('pass').value
    const cliente = {
        usuario: user,
        senha: password
    }
    window.api.checarLogin(cliente)
    console.log('cliente teste enviado = ', cliente)

    window.api.resultado((event, pessoa) =>{
        document.getElementById('login-user').style.display = 'none'
        document.getElementById('recep').style.display = 'block'
        document.getElementById("user-logado").innerHTML = `Bem vindo ${pessoa.nome.toUpperCase()}!`
    })
}