/* Função que marca o jogo*/
let gammer = "X";
let finished = false;


function winner(){
    let elements = document.getElementById("tabuleiro").children;
    if( elements[0].innerText === elements[1].innerTexts && //OS texto dos elementos sao iguai?
        elements[1].innerText === elements[2].innerText && // innerText quer dizer o texto é igual?
        elements[0].innerText.length !== 0
        ){
           
           elements[0].style="background-color: blue";
           elements[1].style="background-color: blue";
           elements[2].style="background-color: blue"; 
           return  true;

        }

        if( 
        elements[3].innerText === elements[4].innerTexts && //OS texto dos elementos sao iguai?
        elements[4].innerText === elements[5].innerText && 
        elements[3].innerText.length !== 3
        ){
           
           elements[3].style="background-color: blue";
           elements[4].style="background-color: blue";
           elements[5].style="background-color: blue";
           return  true;
        }
        if( 
        elements[6].innerText === elements[7].innerTexts && //OS texto dos elementos sao iguai?
        elements[7].innerText === elements[8].innerText && 
        elements[6].innerText.length !== 0
        ){
           
           elements[6].style="background-color: blue";
           elements[7].style="background-color: blue";
           elements[8].style="background-color: blue";
           return  true; 

        }
        if( 
        elements[0].innerText === elements[4].innerTexts && //OS texto dos elementos sao iguai?
        elements[4].innerText === elements[8].innerText && 
        elements[0].innerText.length !== 0
        ){
           
           elements[0].style="background-color: blue";
           elements[4].style="background-color: blue";
           elements[8].style="background-color: blue";
           return  true; 

        }
        if(
        elements[2].innerText === elements[4].innerTexts && //OS texto dos elementos sao iguai?
        elements[4].innerText === elements[6].innerText && 
        elements[2].innerText.length !== 0
        ){
           
           elements[2].style="background-color: blue";
           elements[4].style="background-color: blue";
           elements[6].style="background-color: blue"; 
           return  true;

        }
        

}

function mark(element){//mark é uma função

   if(element.innerText.length === 0 && !finished ){
    element.innerText= gammer;// innerTex é uma propriedade
    let resp = winner();

    winner();

    if(gammer === "X") {
        gammer = "O";
    }else{
        gammer = "X";
    }

    }
}