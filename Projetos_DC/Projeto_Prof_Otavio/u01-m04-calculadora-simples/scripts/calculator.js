function calculateResult() {
  let val01 = parseFloat(document.getElementById("val01").value);
  let val02 = parseFloat(document.getElementById("val02").value);
  let operation = document.getElementById("operation").value;
  let result = document.getElementById("result");
  if (val01 !== NaN && val02 !== NaN) {
    if (operation === "+") {
      result.value = val01 + val02;
    }
    //
    // codifique as demais operações
    //    
  }
}
