document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão dentro da div com a classe 'login-button'
    var loginButton = document.querySelector('.login-button button');
    
    console.log("Botão:", loginButton); // Saída para verificar se o botão foi corretamente selecionado
    
    // Adiciona um ouvinte de evento de clique ao botão
    loginButton.addEventListener('click', function(event) {
        // Impede o comportamento padrão do botão (envio de formulário)
        event.preventDefault();
        
        console.log("Botão clicado!"); // Saída para verificar se o evento de clique está sendo detectado
        
        // Redireciona para a página desejada
        window.location.href = '../../Login/Main.html';
    });
});


// Função para obter os dados do formulário e redirecionar para outra página
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Obter os valores dos campos do formulário
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Verificar se os campos obrigatórios foram preenchidos
    if (firstName && lastName && email && number && password && confirmPassword) {
        // Criar um objeto com os dados do formulário
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            number: number,
            password: password,
            confirmPassword: confirmPassword
        };

        // Redirecionar para outra página (substitua 'outra_pagina.html' pelo URL desejado)
        window.location.href = '../../TelaPrincipal/Main.html';
        // Redirecionar para outra página
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.'); // Exibir mensagem de alerta se algum campo estiver vazio
    }
}

// Adicionar um ouvinte de evento ao botão "Continuar"
document.querySelector('.continue-button button').addEventListener('click', handleFormSubmit);
