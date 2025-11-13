const realizarLogin = () => {
    const user = document.getElementById('user').value
    const password = document.getElementById('pass').value
    const cliente = {
        usuario: user,
        senha: password
    }
    window.api.checarLogin(cliente)
    console.log('cliente teste enviado = ', cliente)
    let pessoa
    window.api.resultado((event, c) => pessoa = c)
    
    if(pessoa === 'inválido'){
        alert('invalido') 
        return
    }
    console.log('cliente teste existe = ', pessoa)
    
    document.getElementById('login-user').style.display = none
    document.getElementById('recep').style.display = block
    document.getElementById("user-logado").innerText = `Bem vindo ${pessoa.nome}!`
}