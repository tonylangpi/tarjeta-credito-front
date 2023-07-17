const form = document.querySelector("#tarjeta-credito");

const cardNumber = document.querySelector("#numero-tarjeta");
const cardHolder = document.querySelector("#nombre-texto");
const cardExpiration = document.querySelector("#Fecha-tarjeta");
const cardCVV = document.querySelector("#cvv-texto");

const cardNumberText = document.querySelector(".numero-vl");
const cardHolderText = document.querySelector(".nombre-texto");
const cardExpirationText = document.querySelector(".expiracion");
const cardCVVText = document.querySelector(".cvv-texto");
const cardCVVTextAtras = document.querySelector(".cvv-atras");

cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumberText.innerText = "1234 5678 9101 1121";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumberText.innerHTML = valuesOfInput
        }
    }
})

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "NOAH JACOB";
    } else {
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
})

cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardExpirationText.innerHTML = "02/40";
    } else {
        const valuesOfInput = e.target.value.replace("/", "");

        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        } else {
            cardExpirationText.innerHTML = valuesOfInput;
        }
    }
})

cardCVV.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardCVVText.innerHTML = "123";
        cardCVVTextAtras.innerHTML = "235";
    } else {
        cardCVVText.innerHTML = e.target.value;
        cardCVVTextAtras.innerHTML = e.target.value;
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    alert("haz hecho tu pago correctamente!");
})