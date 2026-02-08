document.addEventListener("DOMContentLoaded", () => {

  const bola = document.getElementById("bola");
  const btnSortear = document.getElementById("btnSortear");
  const btnReset = document.getElementById("btnReset");
  const historico = document.getElementById("historico");

  const TOTAL_NUMEROS = 75;

  let numerosSorteados = JSON.parse(
    localStorage.getItem("numerosSorteados")
  ) || [];

  // Atualiza histórico ao carregar a página
  atualizarHistorico();

  btnSortear.addEventListener("click", sortearNumero);
  btnReset.addEventListener("click", resetarJogo);

  function sortearNumero() {
    if (numerosSorteados.length >= TOTAL_NUMEROS) {
      alert("Todos os números já foram sorteados!");
      return;
    }

    let numero;
    do {
      numero = Math.floor(Math.random() * TOTAL_NUMEROS) + 1;
    } while (numerosSorteados.includes(numero));

    numerosSorteados.push(numero);
    localStorage.setItem(
      "numerosSorteados",
      JSON.stringify(numerosSorteados)
    );

    bola.textContent = numero;
    atualizarHistorico();
  }

  function atualizarHistorico() {
    historico.innerHTML = "";

    numerosSorteados.forEach(num => {
      const div = document.createElement("div");
      div.className = "bola-historico";
      div.textContent = num;
      historico.appendChild(div);
    });
  }

  function resetarJogo() {
    if (!confirm("Tem certeza que deseja resetar o jogo?")) return;

    numerosSorteados = [];
    localStorage.removeItem("numerosSorteados");
    bola.textContent = "?";
    historico.innerHTML = "";
  }

});


