function ConverterDoDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);

    var valorEmReal = (valorEmDolarNumerico*5).toFixed(2);
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDoEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
    console.log(valorEmEuroNumerico);

    var valorEmReal = (valorEmEuroNumerico*5.24).toFixed(2);
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDaLibra() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmLibraNumerico = parseFloat(valor);
    console.log(valorEmLibraNumerico);

    var valorEmReal = (valorEmLibraNumerico*6.14).toFixed(2);
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}