function gerarTabuadaFor(){
    let f1 = document.getElementById('fator1').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""

    if (f1 === ""){
        resultado.innerHTML =
        "Por favor digite um número!";
        return;
    };
}

//Usando laço de repetição com  FOR

let f2 = 0;

while(f1 * f2 <= 100){

    let linha  = `${f1} x ${f2} = ${f1 * f2}`;
    resultado.innerHTML += `<div class"linha">${linha}</div>`;
    f2++;
}