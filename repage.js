// redirecionamento.js

// Função para redirecionar para uma nova URL após 5 segundos
function redirecionar() {
    // Corrigindo o caminho para o arquivo Main.html
    setTimeout(function() {
        window.location.href = 'https://johnpaz01.github.io/Site-AG/Login/Main.html';
    }, 5000); // Tempo em milissegundos (5 segundos)
}

// Chamar a função de redirecionamento imediatamente quando o script for carregado
redirecionar();
