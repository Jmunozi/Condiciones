document.addEventListener("DOMContentLoaded", function () {

    const imagen = document.querySelector(".diario");

    imagen.addEventListener("click", function () {

    if (imagen.style.border === "4px solid green") {

        imagen.style.border = "none";
    } else {

        imagen.style.border = "4px solid green";
    }
    });
});