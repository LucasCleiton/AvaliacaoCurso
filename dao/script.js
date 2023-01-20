/*var btn = document.querySelector('#show-or-hide');

var container = document.querySelector('.container');

btn.addEventListener('click', function () {
    if (container.style.display == 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});*/


var salvar = document.querySelector('#salvar');

var resultado = document.querySelector('#resultado');

salvar.addEventListener('click', function () {
    if (resultado.style.display == 'none') {

        resultado.style.display = 'block';
        salvar.style.display = 'none';

    } else {
        resultado.style.display = 'block';
    }
});