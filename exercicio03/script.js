function ehPrimo() {
    let numero = parseInt(document.getElementById('numeroPrimo').value);
    if(numero < 2) {
        document.getElementById('resultadoPrimo').innerText = 'Não é primo';
        return;
    }
    for (let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            document.getElementById('resultadoPrimo'). innerText = 'Não é primo';
            return;
        }
    }
    document.getElementById('resultadoPrimo').innerText = 'É primo';
}