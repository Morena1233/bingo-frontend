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
