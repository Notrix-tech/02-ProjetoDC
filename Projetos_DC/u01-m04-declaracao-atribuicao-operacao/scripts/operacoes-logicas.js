function showValue(direction) {
  const iframeMain = document.getElementById("iframeMain");
  const divMain = iframeMain.contentWindow.document.getElementById("divMain");
  if (direction === "FORWARD" && arrValuesIndex < arrValues.length) {
    let result;
    let value = arrValues[arrValuesIndex].value;
    const isLabel = arrValues[arrValuesIndex].isLabel;
    if (isLabel) {
      divElement = document.createElement("div");
      divMain.appendChild(divElement);
      arrValuesIndex++;
      divElement.innerHTML = `<span id="idLabel">${value}</span></br>`;
      isResultHidden = true;
    } else {
      if (value.trim().startsWith("{")) {
        //
        // Evitar erro quando 'value' for um 'Object'
        //
        //     https://stackoverflow.com/questions/4010775/javascript-eval-and-object-evaluation
        //
        result = eval("(" + value + ")");
      } else {
        result = eval(value);
      }
      if (isResultHidden) {
        divElement = document.createElement("div");
        divMain.appendChild(divElement);
      } else {
        arrValuesIndex++;
      }
      divElement.innerHTML = `
<pre>
  <code>
<span id="idValue">${
        result === undefined ? "let value;" : `let value = ${value};`
      }</span></br>
<span class="classResult" ${isResultHidden ? "hidden" : ""}>      
  value        -> ${result}
  typeof value -> ${typeof result}
</span>
  </code>
</pre>`;
      isResultHidden = !isResultHidden;
    }
  } else if (direction === "BACKWARD" && arrValuesIndex > 0) {
    const childrenElement = divMain.children.item(--arrValuesIndex);
    childrenElement.remove();
  }
  iframeMain.contentWindow.scroll(1, 999999);
}

let arrValuesIndex = 0;
let isResultHidden = true;
let divElement;

let arrValues = [
  {
    value: `TABELA VERDADE 'AND'`,
    isLabel: true,
  },
  {
    value: `true && true`,
    isLabel: false,
  },
  {
    value: `true && false`,
    isLabel: false,
  },
  {
    value: `false && true`,
    isLabel: false,
  },
  {
    value: `false && false`,
    isLabel: false,
  },
  {
    value: `TABELA VERDADE 'OR'`,
    isLabel: true,
  },
  {
    value: `true || true`,
    isLabel: false,
  },
  {
    value: `true || false`,
    isLabel: false,
  },
  {
    value: `false || true`,
    isLabel: false,
  },
  {
    value: `false || false`,
    isLabel: false,
  },
  {
    value: `TABELA VERDADE 'NOT'`,
    isLabel: true,
  },
  {
    value: `!true`,
    isLabel: false,
  },
  {
    value: `!false`,
    isLabel: false,
  },
];
