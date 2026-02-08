let cartela = [];

function gerarAutomatica() {
  cartela = [];
  while (cartela.length < 30) {
    let n = Math.floor(Math.random() * 75) + 1;
    if (!cartela.includes(n)) cartela.push(n);
  }
  mostrar();
}

function mostrar() {
  const div = document.getElementById("numeros");
  div.innerHTML = "";
  cartela.forEach(n => {
    const span = document.createElement("span");
    span.innerText = n;
    span.className = "bola";
    div.appendChild(span);
  });
}

function salvarCartela() {
  localStorage.setItem("cartela", JSON.stringify(cartela));
  alert("Cartela salva!");
}
{
  id: "CART-123456",
  numeros: [3, 8, 12, 19, 25, ...], // 30 números
  compradaEm: "2026-02-08T18:30",
  status: "ativa"
}
