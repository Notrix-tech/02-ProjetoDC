let gammer = "X";
let winner = false;
let gameOver = false;

function checkWinner() {
  let elements = document.getElementById("container").children;
  if (
    elements[0].innerText === elements[1].innerText &&
    elements[1].innerText === elements[2].innerText &&
    elements[2].innerText.length !== 0
  ) {
    elements[0].style = "background-color: yellow;";
    elements[1].style = "background-color: yellow;";
    elements[2].style = "background-color: yellow;";
    return true;
  } else if (
    elements[3].innerText === elements[4].innerText &&
    elements[4].innerText === elements[5].innerText &&
    elements[5].innerText.length !== 0
  ) {
    elements[3].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[5].style = "background-color: yellow;";
    return true;
  } else if (
    elements[6].innerText === elements[7].innerText &&
    elements[7].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    elements[6].style = "background-color: yellow;";
    elements[7].style = "background-color: yellow;";
    elements[8].style = "background-color: yellow;";
    return true;
  } else if (
    elements[0].innerText === elements[3].innerText &&
    elements[3].innerText === elements[6].innerText &&
    elements[6].innerText.length !== 0
  ) {
    elements[0].style = "background-color: yellow;";
    elements[3].style = "background-color: yellow;";
    elements[6].style = "background-color: yellow;";
    return true;
  } else if (
    elements[1].innerText === elements[4].innerText &&
    elements[4].innerText === elements[7].innerText &&
    elements[7].innerText.length !== 0
  ) {
    elements[1].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[7].style = "background-color: yellow;";
    return true;
  } else if (
    elements[2].innerText === elements[5].innerText &&
    elements[5].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    elements[2].style = "background-color: yellow;";
    elements[5].style = "background-color: yellow;";
    elements[8].style = "background-color: yellow;";
    return true;
  } else if (
    elements[0].innerText === elements[4].innerText &&
    elements[4].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    elements[0].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[8].style = "background-color: yellow;";
    return true;
  } else if (
    elements[2].innerText === elements[4].innerText &&
    elements[4].innerText === elements[6].innerText &&
    elements[6].innerText.length !== 0
  ) {
    elements[2].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[6].style = "background-color: yellow;";
    return true;
  }
  return false;
}

function checkGameOver() {
  let elements = document.getElementById("container").children;
  let gameOver = true;
  for (let indice = 0; indice < elements.length; indice++) {
    if (elements[indice].innerText.length === 0) {
      gameOver = false;
    }
  }
  if (gameOver) {
    for (let indice = 0; indice < elements.length; indice++) {
      elements[indice].style = "background-color: red;";
    }
  }
  return gameOver;
}

function mark(element) {
  if (!winner && !gameOver) {
    if (element.innerText.length === 0) {
      element.innerText = gammer;
      winner = checkWinner();
      if (winner) {
        document.getElementById("messages").innerText = "Vencedor: " + gammer;
      } else {
        gameOver = checkGameOver();
        if (gameOver) {
          document.getElementById("messages").innerText = "Fim de Jogo";
          return;
        }
      }
      if (gammer === "X") {
        gammer = "O";
      } else {
        gammer = "X";
      }
    } else {
      alert("Elemento já preenchido");
    }
  }
}
