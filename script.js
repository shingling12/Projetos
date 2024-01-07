var resultado = document.getElementById("resultado");

var parentesE = false;
function btn(n) {
  resultado.textContent += n;
}

function limpar(j) {
  resultado.textContent = j;
  limparjuros();
  parentesE = false;
}

function cleaR() {
  var textoAtual = resultado.textContent;
  resultado.textContent = textoAtual.slice(0, -1);
}

function parentese() {
  if (parentesE == false) {
    resultado.textContent += "(";
    parentesE = true;
  } else {
    resultado.textContent += ")";
    parentesE = false;
  }
}

function limparjuros() {
  document.getElementById("capital").value = "";
  document.getElementById("taxa").value = "";
  document.getElementById("tempo").value = "";
}

const j1 = document.getElementById("juros");
var verify = false;

function juros() {
  var jU = document.getElementById("ks");
  if (verify == false) {
    jU.textContent = "J/simples";
    j1.style.display = "block";
    verify = true;
  } else if (verify == true) {
    jU.textContent = "J/compostos";
    verify = -1;
  } else {
    jU.textContent = "Juros";
    j1.style.display = "none";
    verify = false;
  }
}

function calcular() {
  var c1 = document.getElementById("capital").value;
  var t1 = document.getElementById("taxa").value;
  var tem1 = document.getElementById("tempo").value;

  if (verify == true) {
    resultado.innerHTML = c1 * (t1 / 100) * tem1;
  } else if (verify == -1) {
    resultado.textContent = c1 * (1 + t1 / 100) ** tem1 - c1;
  }

  var r0 = resultado.textContent;
  parseFloat(r0);
  parseFloat(r1);
  var r1 = r0
    .replace("÷", "/")
    .replace("×", "*")
    .replace("%", "/100*")
    .replace("^", "**")
    .replace(",", ".");
  r1 = eval(r1);
  r1.parentesE;
  resultado.textContent = parseFloat(r1);
  parentesE = false;
}
