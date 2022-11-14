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

    operation = eval(Math.pow(parseFloat(base), parseFloat(expoente)));
    document.getElementById("resulpoten").innerHTML = operation;
}


// Radiciação

function rooting(){
    radicando = document.getElementById("radicando").value;
    index = document.getElementById("index").value;

    operation = eval(Math.sqrt(parseFloat(radicando), parseFloat(index)));
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
    delta = eval(Math.pow(parseFloat(bvalue), 2) - 4 * parseFloat(avalue) * parseFloat(cvalue));
    x1 = eval((- parseFloat(bvalue) + Math.sqrt(parseFloat(delta))) / (2 * parseFloat(avalue)));
    x2 = eval((- parseFloat(bvalue) - Math.sqrt(parseFloat(delta))) / (2 * parseFloat(avalue)));

    if(delta == 0){
        resultado = "X = " + x1;
    }
    else if(delta < 0){
        resultado = "Delta negativo. Não existe raízes reais";
    }
    else{
        resultado = "S = {" + x1 + ", " + x2 + "}";
    }

    document.getElementById("resuldelta").innerHTML = "Δ = " + delta
    document.getElementById("resultado").innerHTML = resultado
    
}
