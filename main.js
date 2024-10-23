const form = document.getElementById('form-deposito');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('numA').value;
    const valorB = document.getElementById('numB').value;
    const mensagemSucesso = '<b>Tudo certo!</b> Número do <b>campo B</b> é maior do que no <b>campo A.</b>';
    const mensagemErro = '<b>Erro!</b> Número do <b>campo A</b> é maior do que no <b>campo B.</b>';
    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message');

    if (valorB > valorA) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';

        document.getElementById('numA').value = '';
        document.getElementById('numB').value = '';
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

        document.getElementById('numA').value = '';
        document.getElementById('numB').value = '';
    }
})