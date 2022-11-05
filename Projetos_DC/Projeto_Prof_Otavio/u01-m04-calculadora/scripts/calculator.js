const arrDigitsAndDot = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const arrUnaryOperators = ["C", "√", "x²", "∓"];
const arrBinaryOperators = ["÷", "x", "-", "+"];
let binaryOperator = null;
let memory = null;
let display = null;
let displayLen = 15;
let currentDisplay = document.getElementById("containerDisplay");

function setDisplay(displayVal) {
  display = displayVal;
  /*
    - Adequar para refletir valores em NOTAÇÃO CIENTÍFICA
  */
  currentDisplay.innerText = ("" + displayVal).substring(0, displayLen);
}

function handleKey(key) {
  if (arrDigitsAndDot.includes(key.innerText)) {
    /*
      - Impedir a entrada de mais do que 'displayLen' dígitos
    */
    if (currentDisplay.innerText === "0" || memory == display) {
      setDisplay(key.innerText);
    } else {
      setDisplay(display + key.innerText);
    }
  } else {
    if (arrUnaryOperators.includes(key.innerText)) {
      switch (key.innerText) {
        case "C":
          currentDisplay.innerText = "0";
          binaryOperator = null;
          memory = null;
          display = null;
          break;
        case "√":
          setDisplay(Math.sqrt(display));
          break;
        case "x²":
          setDisplay(Math.pow(display, 2));
          break;
        case "∓":
          setDisplay(-display);
          break;
      }
    }
    if (arrBinaryOperators.includes(key.innerText) && binaryOperator == null) {
      binaryOperator = key.innerText === "x" ? "*" : key.innerText;
      memory = display;
    }
    if (key.innerText === "=") {
      memory = eval(memory + binaryOperator + display);
      display = memory;
      setDisplay(display);
      binaryOperator = null;
    }
  }
}
