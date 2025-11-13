const enviarDados = () => {
    const caixas = document.querySelectorAll('input')
    const vazio = caixas.some(caixa => caixa.value === '')
    if(vazio){
        alert('Preencha todos os dados!')
        return}
    const pessoa = {
        nome: (document.getElementById('caixa-nome').value).trim(),
        dat_nasc: (document.getElementById('caixa-nascimento').value).trim(),
        email: (document.getElementById('caixa-email').value).trim(),
        login_user: (document.getElementById('caixa-login').value).trim(),
        senha1: document.getElementById('caixa-senha').value,
        senha2: document.getElementById('caixa-senha2').value
    }
    if (pessoa.senha1 !== pessoa.senha2){
        alert('A senhas não conferem!')
        return
    }
    window.api.guardarCliente(pessoa)
    window.api.mudarPagina('inicio')
}
