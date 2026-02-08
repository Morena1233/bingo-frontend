let numerosDisponiveis = Array.from({ length: 75 }, (_, i) => i + 1);

function corPorNumero(n) {
  if (n <= 15) return "#e74c3c";   // vermelho
  if (n <= 30) return "#3498db";   // azul
  if (n <= 45) return "#2ecc71";   // verde
  if (n <= 60) return "#f1c40f";   // amarelo
  return "#9b59b6";                // roxo
}

function sortearNumero() {
  if (numerosDisponiveis.length === 0) {
    alert("Todos os números já foram sorteados");
    return;
  }

  const index = Math.floor(Math.random() * numerosDisponiveis.length);
  const numero = numerosDisponiveis.splice(index, 1)[0];

  const bola = document.getElementById("bola");

  // reinicia animação
  bola.classList.remove("bola-bingo");
  void bola.offsetWidth;
  bola.classList.add("bola-bingo");

  bola.textContent = numero;
  bola.style.background = corPorNumero(numero);
}



