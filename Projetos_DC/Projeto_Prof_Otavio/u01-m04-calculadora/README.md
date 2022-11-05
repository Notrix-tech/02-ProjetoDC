# u01-m04-calculadora

https://prof-otavio-medeiros.github.io/u01-m04-calculadora/

Este projeto, embora incompleto, tenta trazer alguns elementos um pouco mais avançados tanto a nível de **CSS** quanto a nível de **JavaScript**. São eles:

## CSS

### Uso de 'var'

- --var1
- var(--var1)

### Uso de 'display flex'

- display: flex;
- justify-content: end;
- align-items: center;

### Uso de 'display grid'

- display: grid;
- grid-template-rows: repeat(5, var(--keyWidith));
- grid-template-columns: repeat(4, var(--keyHeight));
- justify-content: space-around;
- gap: var(--keyGap);

### Uso de 'border-radius'

- border-radius: 50%;

## JavaScript

### Uso de 'arrays'

- const arrBinaryOperators = ["÷", "x", "-", "+"];
- if (arrBinaryOperators.includes(key.innerText)) {...}

### Manipulação de elementos do 'DOM'

- let currentDisplay = document.getElementById("containerDisplay");
- currentDisplay.innerText = ("" + displayVal).substring(0, displayLen);

### Uso de 'switch / case'

- switch (key.innerText) {case "C": currentDisplay.innerText = "0"; break; ...}

### Operador condicional ternário

- binaryOperator = key.innerText === "x" ? "*" : key.innerText;

### Função 'eval()'

- memory = eval(memory + binaryOperator + display);

**SUCESSO**