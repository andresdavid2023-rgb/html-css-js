const text1 = "Texto 1";
const text2 = "Texto 2";

const text = document.getElementById("text");
const button = document.getElementById("myButton");

button.addEventListener("click", () => { 


    if (text.textContent === text1) {

        text.textContent = text2;

        text.classList.remove("textoNormal");
        text.classList.add("textoRojo");
    } else {

        text.textContent = text1;

        text.classList.remove("textoRojo");
        text.classList.add("textoNormal");
    }
    });


