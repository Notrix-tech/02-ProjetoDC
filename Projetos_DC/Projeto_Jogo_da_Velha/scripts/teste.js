
let x = 10;

function a(){
    let x = 15;
    console.log(`dentro antes de mudar: ${x}`);
    x = 20;
    console.log(`dentro depois de mudar: ${x}`);
}
a();
console.log(`Fora: ${x}`);