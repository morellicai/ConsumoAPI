export default function criarCard(data) {
    const card = document.createElement('div');
    card.innerHTML = `
    <div class='card'>
        <img src='${data.image}'>
        <p>Nome: ${data.name}</p>
        <p>Genero: ${data.gender}</p>
        <p>Especie: ${data.especies}</p>
        <p>Origem: ${data.origin.name}</p>
    </div>    
    `
    return card;
}