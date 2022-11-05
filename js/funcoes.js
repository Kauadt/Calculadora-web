// Operações básicas

function OpBasic(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    
    operador = document.querySelector("input[name=opt]:checked").value;
    resultado = eval(parseInt(num1) + operador + parseInt(num2));
    document.getElementById("mostrar-resultado").innerHTML = resultado;
    }



// Potenciação


function potentiation(){
    base = document.getElementById("base").value;
    expoente = document.getElementById("expoente").value;

    operation = eval(Math.pow((base), (expoente)));
    document.getElementById("resulpoten").innerHTML = operation;
}


// Radiciação

function rooting(){
    radicando = document.getElementById("radicando").value;
    index = document.getElementById("index").value;

    operation = eval(Math.sqrt((radicando), (index)));
    document.getElementById("resulraiz").innerHTML = operation;
}


// Área triângulo retângulo


   function RightTriangle(){
    base = document.getElementById("base").value;
    height = document.getElementById("height").value;

    operation = eval((parseInt(base) * parseInt(height)) / 2);
    document.getElementById("resularea").innerHTML = operation;
   }


// Fórmula quadratica


    function QuadraticFormula(){
        avalue = document.getElementById("avalue").value;
        bvalue = document.getElementById("bvalue").value;
        cvalue = document.getElementById("cvalue").value;
         delta = "Δ = " + eval(Math.pow(parseFloat(bvalue), 2)  - (4 * parseFloat(avalue) * parseFloat(cvalue)));


        x1 = "X1: " + eval(parseFloat((-bvalue + Math.sqrt(delta)) / (2 * avalue)));
        x2 = "X2: " + eval(parseFloat((-bvalue - Math.sqrt(delta)) / (2 * avalue)));               
        document.getElementById("resuldelta").innerHTML = delta;
        document.getElementById("resulx").innerHTML = x1;
        document.getElementById("resulxx").innerHTML = x2; 

        // Ajustar, incompleto.
    }




/* Funcionalidades: 
 - 4 operações básicas OK
 - Potencia OK
 - Raiz OK
 - Área de um triangulo retangulo OK
 - Formula quadratica ... 
 - Formatar css 85%
 - Bootstrap OK
*/