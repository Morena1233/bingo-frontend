let numerosSorteados = [];

function sortearNumero() {
  if (numerosSorteados.length >= 75) {
    alert("Todos os números já foram sorteados");
    return;
  }

  let numero;
  do {
    numero = Math.floor(Math.random() * 75) + 1;
  } while (numerosSorteados.includes(numero));

  numerosSorteados.unshift(numero);

  document.getElementById("numero").innerText = numero;

  atualizarHistorico();
}

function atualizarHistorico() {
  const lista = document.getElementById("listaNumeros");
  lista.innerHTML = "";

  numerosSorteados.slice(0, 10).forEach(n => {
    const span = document.createElement("span");
    span.className = "bola";
    span.innerText = n;
    lista.appendChild(span);
  });
}
