function limpar_item() {
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}

function limpar() {
    document.getElementById('resultado').innerHTML = '';
}

function inserir(num) {
    var n = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = n + num;
}

function calcular() {
    var valores = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(valores);
}