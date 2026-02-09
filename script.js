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
function adicionarCartela(numerosEscolhidos) {
  const cartela = {
    id: "CART-" + Date.now(),
    numeros: numerosEscolhidos
  };

  carrinho.push(cartela);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarQtdCarrinho();
}
document.addEventListener("DOMContentLoaded", () => {
  const btnContinuar = document.getElementById("btnContinuar");

  if (!btnContinuar) return;

  btnContinuar.onclick = () => {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();

    if (!nome || !telefone || !cpf) {
      alert("Preencha todos os campos");
      return;
    }

    // salvar cliente
    const cliente = { nome, telefone, cpf };
    localStorage.setItem("cliente", JSON.stringify(cliente));

    // ir para escolha das cartelas
    window.location.href = "cartelas.html";
  };
});









