function sortear() {
  var resultado = Math.random() < 0.5 ? "Sim, eu devo" : "Nao, eu nao devo";
  document.getElementById("resultado").innerHTML = resultado + " ";
  if (resultado === "Sim, eu devo") {
    document.getElementById("resultado").style.color = "green";
  } else {
    document.getElementById("resultado").style.color = "red";
  }
}
