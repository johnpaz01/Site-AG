document.getElementById('open_btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = '../../Login/Main.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const mainSections = document.querySelectorAll('main');
    const sideItems = document.querySelectorAll('#sidebar .side-item');
 
    function handleItemClick(event) {
        const currentIndex = Array.from(sideItems).indexOf(event.currentTarget);

        // Oculta todas as seções principais
        mainSections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Exibe apenas a seção principal correspondente ao item de menu clicado
        mainSections[currentIndex].style.display = 'block';

        // Remove a classe 'active' de todos os itens de menu
        sideItems.forEach(function(item) {
            item.classList.remove('active');
            removeEventListener
        });

        // Adiciona a classe 'active' apenas ao item de menu clicado
        event.currentTarget.classList.add('active');
        ativarBotao();
        clicarBotaoRemoverGif();

    }

    // Adiciona um event listener para cada item de menu
    sideItems.forEach(function(item) {
        item.addEventListener('click', handleItemClick);
    });

    // Simula um clique no item do menu "Início" para exibir automaticamente a seção correspondente
    const inicioItem = document.querySelector('#sidebar .side-item:first-child');
    inicioItem.click();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente carregado.');

    document.getElementById('gifInput').addEventListener('change', function() {
        console.log('Evento de mudança do input de arquivo acionado.');
        desativarBotao();
        const file = this.files[0];
        const gifDisplay = document.querySelector('.gifDisplay'); // Alterado para querySelector
        const removeButton = document.getElementById('removeGif');
        const uploadButton = document.getElementById('btnSubmitForm');

        if (file) {
            console.log('Arquivo selecionado:', file.name);
            const reader = new FileReader();
            reader.onload = function(e) {
                console.log('Arquivo lido com sucesso:', e.target.result);
                if(gifDisplay) {
                    gifDisplay.src = e.target.result;
                    gifDisplay.style.display = 'block';
                } else {
                    console.error('Elemento gifDisplay não encontrado.');
                }
                if(removeButton) {
                    removeButton.style.display = 'inline-block';
                } else {
                    console.error('Botão para remover a imagem não encontrado.');
                }
                if(uploadButton) {
                    uploadButton.style.display = 'inline-block';
                } else {
                    console.error('Botão de upload não encontrado.');
                }
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('removeGif').addEventListener('click', function() {
        console.log('Botão de remover imagem clicado.');
        ativarBotao();
        document.getElementById('gifInput').value = '';
        document.querySelector('.gifDisplay').src = ''; // Alterado para querySelector
        this.style.display = 'none';
        document.querySelector('.gifDisplay').style.display = 'none'; // Alterado para querySelector
    });
});


var botao = document.getElementById("open_btn");


function ativarBotao() {
    botao.style.display = "block"; // ou "inline-block" dependendo do comportamento desejado
}

// Função para desativar a visibilidade do botão
function desativarBotao() {
    botao.style.display = "none";
}

function clicarBotaoRemoverGif() {
    document.getElementById('removeGif').click();
}





