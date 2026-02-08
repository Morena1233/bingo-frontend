document.addEventListener("DOMContentLoaded", () => {

  let numeros = [];
  const bola = document.getElementById("bola");
  const historico = document.getElementById("historico");

  window.sortear = function () {
    if (numeros.length >= 75) {
      alert("Todos os números já foram sorteados!");
      return;
    }

    let numero;
    do {
      numero = Math.floor(Math.random() * 75) + 1;
    } while (numeros.includes(numero));

    numeros.push(numero);

    bola.classList.remove("animar");
    void bola.offsetWidth; // reinicia animação
    bola.classList.add("animar");

    bola.innerText = numero;

    const span = document.createElement("span");
    span.innerText = numero;
    historico.prepend(span);
  };

});


