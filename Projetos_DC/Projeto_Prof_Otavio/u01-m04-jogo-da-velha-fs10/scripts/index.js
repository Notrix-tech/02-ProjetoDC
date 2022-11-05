let gammer = "X";
let hasWinner = false;
let draw = false;

function checkDraw() {
  let elements = document.getElementById("tabuleiro").children;
  draw = true;
  for (let index = 0; index < elements.length; index++) {
    if (elements[index].innerText.length === 0) {
      draw = false;
    }
  }
  return draw;
}

function checkWinner() {
  let elements = document.getElementById("tabuleiro").children;
  if (
    elements[0].innerText === elements[1].innerText &&
    elements[1].innerText === elements[2].innerText &&
    elements[0].innerText.length !== 0
  ) {
    elements[0].style = "background-color: red";
    elements[1].style = "background-color: red";
    elements[2].style = "background-color: red";
    return true;
  }
  if (
    elements[3].innerText === elements[4].innerText &&
    elements[4].innerText === elements[5].innerText &&
    elements[3].innerText.length !== 0
  ) {
    elements[3].style = "background-color: red";
    elements[4].style = "background-color: red";
    elements[5].style = "background-color: red";
    return true;
  }
  if (
    elements[6].innerText === elements[7].innerText &&
    elements[7].innerText === elements[8].innerText &&
    elements[6].innerText.length !== 0
  ) {
    elements[6].style = "background-color: red";
    elements[7].style = "background-color: red";
    elements[8].style = "background-color: red";
    return true;
  }
  if (
    elements[0].innerText === elements[3].innerText &&
    elements[3].innerText === elements[6].innerText &&
    elements[0].innerText.length !== 0
  ) {
    elements[0].style = "background-color: red";
    elements[3].style = "background-color: red";
    elements[6].style = "background-color: red";
    return true;
  }
  if (
    elements[1].innerText === elements[4].innerText &&
    elements[4].innerText === elements[7].innerText &&
    elements[1].innerText.length !== 0
  ) {
    elements[1].style = "background-color: red";
    elements[4].style = "background-color: red";
    elements[7].style = "background-color: red";
    return true;
  }
  if (
    elements[2].innerText === elements[5].innerText &&
    elements[5].innerText === elements[8].innerText &&
    elements[2].innerText.length !== 0
  ) {
    elements[2].style = "background-color: red";
    elements[5].style = "background-color: red";
    elements[8].style = "background-color: red";
    return true;
  }
  if (
    elements[0].innerText === elements[4].innerText &&
    elements[4].innerText === elements[8].innerText &&
    elements[0].innerText.length !== 0
  ) {
    elements[0].style = "background-color: red";
    elements[4].style = "background-color: red";
    elements[8].style = "background-color: red";
    return true;
  }
  if (
    elements[2].innerText === elements[4].innerText &&
    elements[4].innerText === elements[6].innerText &&
    elements[2].innerText.length !== 0
  ) {
    elements[2].style = "background-color: red";
    elements[4].style = "background-color: red";
    elements[6].style = "background-color: red";
    return true;
  }
  return false;
}

function mark(element) {
  if (element.innerText.length === 0 && !hasWinner) {
    element.innerText = gammer;
    hasWinner = checkWinner();
    if (!hasWinner) {
      draw = checkDraw();
      if (draw) {
        document.getElementById(
          "messages"
        ).innerText = `Não houve ganhador. EMPATOU!`;
      } else {
        if (gammer === "X") {
          gammer = "O";
        } else {
          gammer = "X";
        }
      }
    } else {
      document.getElementById(
        "messages"
      ).innerText = `O jogador '${gammer}' VENCEU!`;
    }
  }
}
