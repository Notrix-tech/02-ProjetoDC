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
  value        -> ${typeof result === 'string' ? `"${result}"` : result }
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
    value: `DECLARAÇÃO`,
    isLabel: true,
  },
  {
    value: ``,
    isLabel: false,
  },
  {
    value: `ATRIBUIÇÕES`,
    isLabel: true,
  },
  {
    value: `"Digital College"`,
    isLabel: false,
  },
  {
    value: `10`,
    isLabel: false,
  },
  {
    value: `3.141592658`,
    isLabel: false,
  },
  {
    value: `12345432n`,
    isLabel: false,
  },
  {
    value: `true`,
    isLabel: false,
  },
  {
    value: `false`,
    isLabel: false,
  },
  {
    value: `null`,
    isLabel: false,
  },
  {
    value: `{nome: "Otávio", idade: 58}`,
    isLabel: false,
  }
];
