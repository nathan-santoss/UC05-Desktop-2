const enviarDados = () => {
    const pessoa = {
        nome: (document.getElementById('caixa-nome').value).trim(),
        dat_nasc: (document.getElementById('caixa-nascimento').value).trim(),
        email: (document.getElementById('caixa-email').value).trim(),
        login_user: (document.getElementById('caixa-login').value).trim(),
        senha1: document.getElementById('caixa-senha').value,
        senha2: document.getElementById('caixa-senha2').value
    }

    const form = document.getElementById('caixas-formulario')
    const caixas = form.querySelectorAll('input')
    const vazio = Array.from(caixas).some(caixa => (caixa.value).trim() === '')
    caixas.forEach(caixa => {
        caixa.value = ''
    });
    if(vazio){
        window.api.alerta('dadosVazios')
        return
    }
    else if (pessoa.senha1 !== pessoa.senha2){
        window.api.alerta('senhasInvalidas')
        return
    }
    window.api.guardarCliente(pessoa)
    window.api.mudarPagina('Cadastro', 'inicio')
}
