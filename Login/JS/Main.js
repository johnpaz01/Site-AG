document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitBtn');
    var loginForm = document.getElementById('loginForm');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        pegarDados();
    });

    function pegarDados() {
        var usuario = document.getElementById('usuario').value;
        var senha = document.getElementById('senha').value;
        console.log('Usuário:', usuario);
        console.log('Senha:', senha);
        
        // Verifica se usuário e senha são iguais a "2305" e "index", respectivamente
        if (usuario === '2305' && senha === '2305') {
            // Redireciona para o arquivo HTML desejado
            window.location.href = '../../TelaPrincipal/Main.html';
        } else {
            // Se as credenciais estiverem erradas, exiba uma mensagem de erro
            alert('Credenciais inválidas. Tente novamente.');
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento <a> dentro da div com a classe 'register-link'
    var registerLink = document.querySelector('.register-link a');
    
    // Adiciona um ouvinte de evento de clique ao link
    registerLink.addEventListener('click', function(event) {
        // Impede o comportamento padrão do link (navegação para a URL)
        event.preventDefault();
        
        // Redireciona para a página desejada
        window.location.href = '../../Cadastro/Main.html';
    });
});



