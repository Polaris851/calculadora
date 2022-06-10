const inputCheck = document.querySelector('input[name=theme]');
const rootElement = document.documentElement;

const lightTheme = {
    '--bg-color': '#d8d8d8',
    '--text-color': '#000',
}

const darkTheme = {
    '--bg-color': '#060114',
    '--text-color': '#fff',
}

function changeTheme(theme) {
    for(let prop in theme) {
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value);
}

inputCheck.addEventListener('change', function() {
    const isChecked = inputCheck.checked;
    if(isChecked) {
        changeTheme(darkTheme);
        document.getElementById('theme-img').src = "./image/sun.png";
    } else {
        changeTheme(lightTheme);
        document.getElementById('theme-img').src = "./image/moon.png";
    }
})

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