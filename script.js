

const sumaButton = document.getElementById('suma')

/* const resultInput = document.getElementById('result')
 */
function suma() {
    let a = parseInt (document.getElementById("num1").value);
    let b = parseInt (document.getElementById("num2").value);
    let valorsuma = 0;
    valorsuma = a + b;
    document.getElementById("botonsuma").onclick = valorsuma;
    document.getElementById('result').innerHTML = valorsuma;
    console.log(valorsuma)
}

function resta() {
    let a = parseInt (document.getElementById("num1").value);
    let b = parseInt (document.getElementById("num2").value);
    let valorresta = 0;
    valorresta = a - b;
    document.getElementById("botonresta").onclick = valorresta;
    document.getElementById('result').innerHTML = `<div class="alert alert-success align-self-center"" role="alert">
    ${valorresta}</div>`    
;
    console.log(valorresta)
}

//Multiplicación
function mult() {
    let a = parseInt (document.getElementById("num1").value);
    let b = parseInt (document.getElementById("num2").value);
    let valormult = 0;
    valormult = a * b;
    document.getElementById("botonmult").onclick = valormult;
    document.getElementById('result').innerHTML = `<div class="alert alert-success align-self-center"" role="alert">
    ${valormult}</div>`    
;
    console.log(valormult)
}

//División
function div() {
    let a = parseInt (document.getElementById("num1").value);
    let b = parseInt (document.getElementById("num2").value);
    let valordiv = 0;
    valordiv = a / b;
    document.getElementById("botondiv").onclick = valordiv;
    document.getElementById('result').innerHTML = `<div class="alert alert-success align-self-center"" role="alert">
    ${valordiv}</div>`    
;
    console.log(valordiv)
}
