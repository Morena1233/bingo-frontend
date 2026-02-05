function salvarConfig() {
  const valor = document.getElementById("valor").value;
  const horario = document.getElementById("horario").value;

  localStorage.setItem("valorCartela", valor);
  localStorage.setItem("horarioSorteio", horario);

  document.getElementById("status").innerText =
    "Configuração salva com sucesso!";
}

