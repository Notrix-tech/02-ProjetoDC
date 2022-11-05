let jogadorAtual = document.getElementById("jogadorInicial").value;
let started = false;

document.getElementById("jogador").innerText = "Jogador: " + jogadorAtual;
document.getElementById("message").innerText = "Jogo Não Iniciado";

function setCurrentPlayer(jogador) {
  document.getElementById("jogador").innerText = "Jogador: " + jogador;
}

function setFirstPlayer() {
  jogadorAtual = document.getElementById("jogadorInicial").value;
  setCurrentPlayer(jogadorAtual);
}

function restart() {
  jogadorAtual = document.getElementById("jogadorInicial").value;
  started = true;
  for (let element of document.getElementsByClassName("grid-container")[0]
    .children) {
    element.style.backgroundColor = "#faebd7";
    element.innerText = "";
  }
  setCurrentPlayer(jogadorAtual);
  document.getElementById("message").innerText = "Jogo em Andamento";
  document.getElementById("restart").type = "hidden";
}

function init(element) {
  restart();
  mark(element);
}

function checkWinSequence(jogadas, posicao01, posicao02, posicao03) {
  if (
    jogadas[posicao01].innerText === jogadas[posicao02].innerText &&
    jogadas[posicao02].innerText === jogadas[posicao03].innerText &&
    jogadas[posicao03].innerText &&
    jogadas[posicao03].innerText.length !== 0
  ) {
    jogadas[posicao01].style.backgroundColor = "yellow";
    jogadas[posicao02].style.backgroundColor = "yellow";
    jogadas[posicao03].style.backgroundColor = "yellow";
    return true;
  } else {
    return false;
  }
}

function checkWin() {
  let jogadas = document.getElementsByClassName("grid-container")[0].children;
  if (
    checkWinSequence(jogadas, 0, 1, 2) ||
    checkWinSequence(jogadas, 3, 4, 5) ||
    checkWinSequence(jogadas, 6, 7, 8) ||
    checkWinSequence(jogadas, 0, 3, 6) ||
    checkWinSequence(jogadas, 1, 4, 7) ||
    checkWinSequence(jogadas, 2, 5, 8) ||
    checkWinSequence(jogadas, 0, 4, 8) ||
    checkWinSequence(jogadas, 2, 4, 6)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkNoWin() {
  let noWin = true;
  for (let element of document.getElementsByClassName("grid-container")[0]
    .children) {
    noWin = noWin && element.innerText !== "";
  }
  if(noWin) {
    for (let element of document.getElementsByClassName("grid-container")[0]
    .children) {
      element.style.backgroundColor = "aqua";
  }
  }
  return noWin;
}

function mark(element) {
  let gameOver = true;
  if (element.innerText.length === 0 && started) {
    element.innerText = jogadorAtual;
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    setCurrentPlayer(jogadorAtual);
    document.getElementById("message").innerText = "Jogo em Andamento";
    if (checkWin()) {
      document.getElementById("message").innerText =
        "O Jogador '" + element.innerText + "' Venceu!";
    } else if (checkNoWin()) {
      document.getElementById("message").innerText = "Jogo Sem Ganhadores!";
    } else {
      gameOver = false;
    }
    if (gameOver) {
      document.getElementById("restart").type = "button";
      started = false;
    }
  } else if (!started) {
    if (document.getElementById("restart").type === "hidden") {
      init(element);
    } else {
      document.getElementById("message").innerText = "Reinicie o Jogo";
    }
  } else if (document.getElementById("restart").type === "hidden") {
    document.getElementById("message").innerText = "Posição em Uso!";
  }
}
