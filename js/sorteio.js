document.addEventListener("DOMContentLoaded", function () {

  // ===== ELEMENTOS =====
  const bola = document.getElementById("bola");
  const lista = document.getElementById("listaNumeros");
  const botao = document.getElementById("btnSortear");

  // ===== SEGURANÇA =====
  if (!bola || !lista || !botao) {
    console.error("Erro: elementos não encontrados no HTML");
    return;
  }

  // ===== DADOS =====
  let numerosDisponiveis = [];
  let numerosSorteados = [];

  for (let i = 1; i <= 75; i++) {
    numerosDisponiveis.push(i);
  }

  // ===== CORES =====
  function corPorNumero(n) {
    if (n <= 15) return "#e74c3c";
    if (n <= 30) return "#3498db";
    if (n <= 45) return "#2ecc71";
    if (n <= 60) return "#f1c40f";
    return "#9b59b6";
  }

  // ===== SORTEAR =====
  function sortearNumero() {
    if (numerosDisponiveis.length === 0) {
      alert("Todos os números já foram sorteados!");
      return;
    }

    const index = Math.floor(Math.random() * numerosDisponiveis.length);
    const numero = numerosDisponiveis.splice(index, 1)[0];

    numerosSorteados.push(numero);

    // bola principal
    bola.classList.remove("bola-bingo");
    void bola.offsetWidth;
    bola.classList.add("bola-bingo");

    bola.textContent = numero;
    bola.style.background = corPorNumero(numero);

    // histórico
    const item = document.createElement("div");
    item.className = "numero-sorteado";
    item.textContent = numero;
    item.style.background = corPorNumero(numero);
    lista.appendChild(item);
  }

  // ===== EVENTO =====
  botao.addEventListener("click", sortearNumero);

});

