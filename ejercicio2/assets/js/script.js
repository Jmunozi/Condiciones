function calcularTotal() {
    var sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    var sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    var sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    var totalStickers = sticker1 + sticker2 + sticker3;

    if (totalStickers <= 10) {
        document.getElementById("resultado").innerText = "Llevas " + totalStickers + " stickers";
    } else {
        document.getElementById("resultado").innerText = "Ojo! Llevas más de 10 stickers";
    }
}