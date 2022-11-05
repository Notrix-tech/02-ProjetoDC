function CalcularIMC(){
    let mensagem = document.getElementById("mensagem");
    let altura = parseFloat (document.getElementById("altura").value);

    let peso = parseFloat (document.getElementById("peso").value);

    //let imc = peso/altura.pow(altura, 2);
    let imc = peso/(altura * altura);
    
    if(imc < 18.5){
        mensagem.innerText="Baixo Peso";

    } else if(imc >= 18.5 && imc <= 24.9){

        mensagem.innerText="Peso Normal";

    } else if(imc >= 25.0 && imc <= 29.9){
        mensagem.innerText="Exesso de peso";
    
    } else if(imc >= 30.0 && imc <= 34.9){
        mensagem.innerText="Obesidade de Classe nível 1";
        
    } else if (imc >= 35.0 && imc <= 39.9){
        mensagem.innerText="Obesidade de Classe nível 2";

    } else if(imc >= 40.0){
        mensagem.innerText="Obesidade de Classe nível 3";

    } else{
        mensagem.innerText="Obesidade de Classe nível Indefinido ";
    }

}