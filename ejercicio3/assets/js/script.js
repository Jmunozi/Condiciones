function verificarPassword() {

    var valor1 = document.getElementById("number1").value;
    var valor2 = document.getElementById("number2").value;
    var valor3 = document.getElementById("number3").value;


    var password = valor1 + valor2 + valor3;

    if (password === "911") {
        document.getElementById("confirmar").innerText = "Password 1 correcto";
    } else if (password === "714") {
        document.getElementById("confirmar").innerText = "Password 2 es correcto";
    } else {
        document.getElementById("confirmar").innerText = "Password incorrecto";
    }
}