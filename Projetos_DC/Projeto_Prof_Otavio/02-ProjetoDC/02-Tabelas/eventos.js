
let opativo = false;
let tpoper = '+';

function selecionarNumero(conteudo){
    var elementId = document.getElementById('visor').innerHTML;

    if ( elementId == '0' || opativo) {
        elementId = conteudo;
    } else {
        elementId = elementId.concat(conteudo) 
    }
    
    document.getElementById('visor').innerHTML = elementId;
    

}

function zerar(){
    document.getElementById('visor').innerHTML = '0';
    

}

function operacao(TpOperacao){
     elementAnt = document.getElementById('visor').innerHTML;
     tpoper = TpOperacao;  
     opativo = true; 
 
}

function resultado(){
    if(tpoper =='+'){
        resultado  = parseFloat(elementAnt) + parseFloat(document.getElementById('visor').innerHTML)
    } else if (tpoper =='-') {
        resultado  = parseFloat(elementAnt) -  parseFloat(document.getElementById('visor').innerHTML)
    } else if (tpoper =='/') {
        resultado  = parseFloat(elementAnt) /  parseFloat(document.getElementById('visor').innerHTML)
    } else if (tpoper =='*') {
        resultado  = parseFloat(elementAnt) *  parseFloat(document.getElementById('visor').innerHTML)
    }
    
    
    opativo = false;
    document.getElementById('visor').innerHTML = resultado


}

