function validarSenha() {
    let senha = document.getElementById('senha').value;
    let temNumero = /\d/.test(senha);
    let temLetra = /[a-zA-Z]/.test(senha);
    let resultado = senha.length >=8 &&temNumero && temLetra ? 'Senha válida' : 'Senha inválida';
    document.getElementById('resultadoSenha').innerText = resultado;
}