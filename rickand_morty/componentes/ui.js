import criarCard from "./card.js";
function mostrarCard(container, dados) {
    container.innerHTML = "";
    dados.results.forEach((item) => {
    const card = criarCard(item);
    container.appendChild(card);
  });
}

function navBar() {
  const body = document.querySelector("body");
  const navBar = document.createElement("nav");
  navBar.className = "nav-bar";
  navBar.innerHTML = `
        <p class="family">Familia Smith</p>
        <ul class="nav">
            <li><a class="menu menu2" id='Rick' href="#">Rick</a></li>
            <li><a class="menu menu2" id='Morty' href="#">Morty</a></li>
            <li><a class="menu menu2" id='Summer' href="#">Summer</a></li>
            <li><a class="menu menu2" id='Beth' href="#">Beth</a></li>
            <li><a class="menu menu2" id='Jerry' href="#">Jerry</a></li>
        </ul>
        <div class="die-alive">
            <ul class="nav">
                <li><a class="menu" id='alive' href="#">Vivo</a></li>
                <li><a class="menu" id='dead' href="#">Morto</a></li>
            </ul>
        </div>
        `;
  body.appendChild(navBar);
  return navBar;
}

export { mostrarCard, navBar };
