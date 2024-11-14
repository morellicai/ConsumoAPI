import { navBar } from './ui.js'; 
navBar();

const navigator = document.querySelectorAll('.menu2');
let statusSelecionado = 'alive'; // Valor padrão
let personagemSelecionado = 'rick'; // Valor padrão

const botaoVivo = document.querySelector('#alive');
const botaoMorto = document.querySelector('#dead');

botaoVivo.addEventListener('click', () => {
    statusSelecionado = 'alive';
    console.log('status selecionado = vivo');
    atualizar();
});

botaoMorto.addEventListener('click', () => {
    statusSelecionado = 'dead';
    console.log('status selecionado = morto');
    atualizar();
});

const personagens = {
    'Rick': 'rick',
    'Morty': 'morty',
    'Summer': 'summer',
    'Beth': 'beth',
    'Jerry': 'jerry'
};

navigator.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.id;
        const personagem = personagens[id];
        if(personagem){
            personagemSelecionado = personagem;
            console.log('personagem selecionado:', personagemSelecionado);
            atualizar();
        } else {
            console.log('link inválido');
        }
    });
});

// Exporta funções getter para os valores
export function getStatusSelecionado() {
    return statusSelecionado;
}

export function getPersonagemSelecionado() {
    return personagemSelecionado;
}

// Função para notificar mudanças
function atualizar() {
    console.log('Função atualizar chamada');
    import('../app.js').then(module => {
        console.log('Chamando init() em main.js com:', {
            personagemSelecionado,
            statusSelecionado
        });
        module.init(); // Chama a função `init` para atualizar os dados
    }).catch(error => {
        console.error('Erro ao carregar main.js:', error);
    });
}

