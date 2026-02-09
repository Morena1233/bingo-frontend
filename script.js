let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let cartelasPagas = JSON.parse(localStorage.getItem("cartelasPagas")) || [];

const btnCarrinho = document.getElementById("btnCarrinho");
const btnMinhasCartelas = document.getElementById("btnMinhasCartelas");
const areaCarrinho = document.getElementById("areaCarrinho");
const areaMinhasCartelas = document.getElementById("areaMinhasCartelas");
const qtdCarrinho = document.getElementById("qtdCarrinho");

function atualizarQtdCarrinho() {
  qtdCarrinho.innerText = carrinho.length;
}

atualizarQtdCarrinho();
btnCarrinho.onclick = () => {
  areaMinhasCartelas.style.display = "none";
  areaCarrinho.style.display = "block";

  areaCarrinho.innerHTML = "<h3>🛒 Carrinho</h3>";

  if (carrinho.length === 0) {
    areaCarrinho.innerHTML += "<p>Carrinho vazio</p>";
    return;
  }

  carrinho.forEach((c, i) => {
    areaCarrinho.innerHTML += `
      <p>Cartela ${c.id} – Números: ${c.numeros.join(", ")}</p>
    `;
  });

  areaCarrinho.innerHTML += `
    <button id="pagar">💰 Pagar cartelas</button>
  `;

  document.getElementById("pagar").onclick = pagarCartelas;
};
function pagarCartelas() {
  cartelasPagas = cartelasPagas.concat(carrinho);
  carrinho = [];

  localStorage.setItem("cartelasPagas", JSON.stringify(cartelasPagas));
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  atualizarQtdCarrinho();
  alert("Pagamento confirmado!");
}
btnMinhasCartelas.onclick = () => {
  areaCarrinho.style.display = "none";
  areaMinhasCartelas.style.display = "block";

  areaMinhasCartelas.innerHTML = "<h3>🎟️ Minhas Cartelas</h3>";

  if (cartelasPagas.length === 0) {
    areaMinhasCartelas.innerHTML += "<p>Nenhuma cartela comprada</p>";
    return;
  }

  cartelasPagas.forEach(c => {
    areaMinhasCartelas.innerHTML += `
      <p>ID: ${c.id} – Números: ${c.numeros.join(", ")}</p>
    `;
  });
};






