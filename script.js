var generatebutton = document.querySelector(".generate");
var QRcode = document.querySelector(".qrcodeval");
var QRcodeContainer = document.querySelector(".qrcode");

function gen() {
    var Enteredval = document.querySelector(".val");
    var Entervalue = Enteredval.value;
    if (Entervalue.trim() == "") {
        Enteredval.classList.add("shakes");
        setTimeout(() => {
            Enteredval.classList.remove("shakes");
        }, 500);
        QRcodeContainer.style.display = "none";
    }
    else {
        var source = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Entervalue;
        QRcode.src = source;
        // setTimeout(() => {
        QRcodeContainer.style.display = "block";
        QRcode.classList.add("qrcodeval1");
        // }, 200);
        
    }
}
document.addEventListener("keydown", function genqr(event) {
    if (event.key === "Enter") {
        var Enteredval = document.querySelector(".val");
        var Entervalue = Enteredval.value;
        if (Entervalue.trim() == "") {
            Enteredval.classList.add("shakes");
            setTimeout(() => {
                Enteredval.classList.remove("shakes");
            }, 500);
            QRcodeContainer.style.display = "none";
        }
        else {
            var source = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Entervalue;
            QRcode.src = source;
            QRcodeContainer.style.display = "block";
            QRcode.classList.add("qrcodeval1");
        }
    }
})

