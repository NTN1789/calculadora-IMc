const calcular = document.getElementById("calcular");

function imc (){
        const nome = document.getElementById("nome") .value;
        const altura = document.getElementById("altura").value;
        const peso = document.getElementById("peso").value;
        const resultado = document.getElementById("resultado");

    if (nome !== "" && altura !== "" && peso!== "" ){
         

        const valorimc = (peso / (altura * altura)).toFixed(1);

             let classificacao = '' ;


        if (valorimc < 18.5){
            classificacao = 'abaixo do peso.';
        }  else if (valorimc  < 25) { 
                classificacao = 'com o peso ideal . parabéns !!! ';
        } else if (valorimc < 30){
            classificacao = 'levemente acima do peso';

        }  else if (valorimc < 35) {
            classificacao = 'com obesiedade grau I ';

        } else if (valorimc < 40){
             classificacao = 'com obesiedade grau II ';   
        }else {
            classificacao = 'com obesiedade grau . cuidado !! ';

        }


        resultado.textContent = `${nome} seu imc é  ${valorimc} e você está ${classificacao}`;
    
    }else{
           resultado.textContent = 'preencha todos os campos !!!';
    }

}
 
calcular.addEventListener("click", imc );



// sempre lembrar de ver o código e completar a parte do els








































