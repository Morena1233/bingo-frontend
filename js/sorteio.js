document.addEventListener("DOMContentLoaded", function () {

  console.log("JS carregado corretamente");

  // ===== ELEMENTOS =====
  const bola = document.getElementById("bola");
  const somBingo = document.getElementById("somBingo");

  const lista = document.getElementById("listaNumeros");
  const botao = document.getElementById("btnSortear");
  const somBola = document.getElementById("somBola");


  if (!bola || !lista || !botao) {
    console.error("Elementos do HTML não encontrados");
    return;
  }

  // ===== DADOS =====
  let numerosDisponiveis = [];
  let numerosSorteados = [];

  // ===== CORES =====
  function corPorNumero(n) {
    if (n <= 15) return "#e74c3c";
    if (n <= 30) return "#3498db";
    if (n <= 45) return "#2ecc71";
    if (n <= 60) return "#f1c40f";
    return "#9b59b6";
  }

  // ===== SALVAR =====
  function salvar() {
    localStorage.setItem("numerosDisponiveis", JSON.stringify(numerosDisponiveis));
    localStorage.setItem("numerosSorteados", JSON.stringify(numerosSorteados));
  }

  // ===== CARREGAR =====
  function carregar() {
    const disp = localStorage.getItem("numerosDisponiveis");
    const sort = localStorage.getItem("numerosSorteados");

    if (disp && sort) {
      numerosDisponiveis = JSON.parse(disp);
      numerosSorteados = JSON.parse(sort);

      lista.innerHTML = "";

      numerosSorteados.forEach(n => {
        const item = document.createElement("div");
        item.className = "numero-sorteado";
        item.textContent = n;
        item.style.background = corPorNumero(n);
        lista.appendChild(item);
      });

      if (numerosSorteados.length > 0) {
        const ultimo = numerosSorteados[numerosSorteados.length - 1];
        bola.textContent = ultimo;
        bola.style.background = corPorNumero(ultimo);
      }
    } else {
      for (let i = 1; i <= 75; i++) {
        numerosDisponiveis.push(i);
      }
    }
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

    bola.classList.remove("bola-bingo");
    void bola.offsetWidth;
    bola.classList.add("bola-bingo");

    bola.textContent = numero;
    if (somBola) {
  somBola.currentTime = 0;
  somBola.play();
}

    bola.style.background = corPorNumero(numero);

    const item = document.createElement("div");
    item.className = "numero-sorteado";
    item.textContent = numero;
    item.style.background = corPorNumero(numero);
    lista.appendChild(item);

    salvar();
  }

  // ===== EVENTO =====
  botao.addEventListener("click", sortearNumero);

  // ===== INICIAR =====
  carregar();

});
