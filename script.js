var lamp = document.getElementById("lamp");
var acesa = false;

lamp.addEventListener("click", function(){
    
    if (acesa == false) {
        lamp.src = "assets/lamp_on.png";
        lamp.alt = "Lâmpada acesa";
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
        acesa = true
    } else {
        lamp.src = "assets/lamp_off.png";
        lamp.alt = "Lâmpada apagada";
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)";
        acesa = false
    }
})

document.getElementById("lamp").addEventListener("click", ligarDesligar);