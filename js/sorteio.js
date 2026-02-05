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

  numerosSorteados.push(numero);
  document.getElementById("numero").innerText = numero;
}

