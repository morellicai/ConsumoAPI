import { buscarDados } from './componentes/api.js';
import { mostrarCard } from './componentes/ui.js';
import { getPersonagemSelecionado, getStatusSelecionado } from './componentes/button.js';

export async function init() {
    const personagemSelecionado = getPersonagemSelecionado();
    const statusSelecionado = getStatusSelecionado();
    console.log('Função init chamada com:', { personagemSelecionado, statusSelecionado });
    try {
        const personagemSelecionado = getPersonagemSelecionado();
        const statusSelecionado = getStatusSelecionado();
        const dadosExternos = await buscarDados(personagemSelecionado, statusSelecionado);
        console.log('Dados da API:', dadosExternos)
        const appContainer = document.getElementById('app');
        mostrarCard(appContainer, dadosExternos);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chama `init` pela primeira vez para exibir o valor padrão
init();
