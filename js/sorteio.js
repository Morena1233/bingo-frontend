// ==============================
// CONFIGURAÇÃO DO BINGO
// ==============================
const TOTAL_NUMEROS = 30;

// ==============================
// VARIÁVEIS
// ==============================
let numerosDisponiveis = [];
let numerosSorteados = [];

// ==============================
// ELEMENTOS DA TELA
// ==============================
const bolaAtual = document.getElementById("bola-atual");
const listaSorteados = document.getElementById("lista-sorteados");
const btnSortear = document.getElementById("btn-sortear");

// ==============================
// INICIALIZAÇÃO
// ==============================
function iniciarBingo() {
  numerosDisponiveis = [];
  numerosSorteados = [];
  listaSorteados.innerHTML = "";

  for (let i = 1; i <= TOTAL_NUMEROS; i++) {
    numerosDisponiveis.push(i);
  }

  bolaAtual.textContent = "?";
}

iniciarBingo();

// ==============================
// FUNÇÃO DE SORTEIO
// ==============================
function sortearNumero() {
  if (numerosDisponiveis.length === 0) {
    alert("Todos os números já foram sorteados!");
    return;
  }

  const indice = Math.floor(Math.random() * numerosDisponiveis.length);
  const numero = numerosDisponiveis[indice];

  // Remove dos disponíveis
  numerosDisponiveis.splice(indice, 1);

  // Salva nos sorteados
  numerosSorteados.push(numero);

  // Mostra na bola gigante
  bolaAtual.textContent = numero;

  // Atualiza histórico
  atualizarLista();
}

// ==============================
// ATUALIZA A LISTA DE SORTEADOS
// ==============================
function atualizarLista() {
  listaSorteados.innerHTML = "";

  numerosSorteados.forEach(num => {
    const span = document.createElement("span");
    span.classList.add("bola-pequena");
    span.textContent = num;
    listaSorteados.appendChild(span);
  });
}

// ==============================
// EVENTO DO BOTÃO
// ==============================
btnSortear.addEventListener("click", sortearNumero);




