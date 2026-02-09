document.addEventListener("DOMContentLoaded", function () {

  console.log("cartelas.js carregado");

  const btnComprar = document.getElementById("btnComprar");
  const listaCartelas = document.getElementById("listaCartelas");

  if (!btnComprar || !listaCartelas) {
    console.error("Elementos da página não encontrados");
    return;
  }

  const TOTAL_NUMEROS = 75;
  const NUMEROS_POR_CARTELA = 30;

  let cartelas = [];

  // ===== CARREGAR CARTELAS =====
  function carregarCartelas() {
    const salvas = localStorage.getItem("cartelasCompradas");
    if (salvas) {
      cartelas = JSON.parse(salvas);
      cartelas.forEach(renderizarCartela);
    }
  }

  // ===== SALVAR =====
  function salvarCartelas() {
    localStorage.setItem("cartelasCompradas", JSON.stringify(cartelas));
  }

  // ===== GERAR NUMEROS =====
  function gerarNumerosCartela() {
    let numeros = [];

    while (numeros.length < NUMEROS_POR_CARTELA) {
      const n = Math.floor(Math.random() * TOTAL_NUMEROS) + 1;
      if (!numeros.includes(n)) {
        numeros.push(n);
      }
    }

    return numeros.sort((a, b) => a - b);
  }

  // ===== CRIAR CARTELA =====
  function comprarCartela() {
    const cartela = {
      id: "CART-" + Date.now(),
      numeros: gerarNumerosCartela(),
      criadaEm: new Date().toLocaleString()
    };

    cartelas.push(cartela);
    salvarCartelas();
    renderizarCartela(cartela);
  }

  // ===== MOSTRAR CARTELA =====
  function renderizarCartela(cartela) {
    const div = document.createElement("div");
    div.className = "cartela";

    const titulo = document.createElement("h3");
    titulo.textContent = `Cartela ${cartela.id}`;

    const grid = document.createElement("div");
    grid.className = "grid-cartela";

    cartela.numeros.forEach(num => {
      const item = document.createElement("div");
      item.className = "numero-cartela";
      item.textContent = num;
      grid.appendChild(item);
    });

    div.appendChild(titulo);
    div.appendChild(grid);
    listaCartelas.appendChild(div);
  }

  // ===== EVENTO =====
  btnComprar.addEventListener("click", comprarCartela);

  carregarCartelas();

});
<script>
function criarCampos() {
  const qtd = Number(document.getElementById("qtdCartelas").value);
  const area = document.getElementById("areaCartelas");
  area.innerHTML = "";

  for (let c = 0; c < qtd; c++) {
    const div = document.createElement("div");
    div.innerHTML = `<h3>Cartela ${c + 1}</h3>`;

    for (let i = 0; i < 15; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.min = 1;
      input.max = 75;
      input.placeholder = "Nº";
      input.className = "numero-cartela";
      div.appendChild(input);
    }

    area.appendChild(div);
  }
}
function criarCampos() { ... }

function comprarCartelas() { ... }


