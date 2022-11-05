let arrNum = [1, 3, 5, 7, 9];

let index = 0;
console.log(typeof arrNum);//objeto tem propriedades e metodos;

console.log(Array.isArray(arrNum));//saber se esse cara é array

while(index < arrNum.length) {
    console.log(arrNum[index])
    index ++;
}
console.log("Fim");