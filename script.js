// script.js
document.addEventListener("DOMContentLoaded", () => {
    alert("¡Bienvenido al mundo de los videojuegos!");

    const toggleButton = document.querySelector("#toggle-info");
    const extraInfo = document.querySelector("#extra-info");

    toggleButton.addEventListener("click", () => {
        if (extraInfo.style.display === "none") {
            extraInfo.style.display = "block";
        } else {
            extraInfo.style.display = "none";
        }
    });

    const form = document.querySelector("#contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const emailInput = document.querySelector("#email");
            if (!emailInput.value) {
                e.preventDefault();
                alert("Por favor, introduce tu correo electrónico.");
            }
        });
    }
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-form");

    form.addEventListener("submit", (e) => {
        const emailInput = document.querySelector("#email");
        const nombreInput = document.querySelector("#nombre");
        const celularInput = document.querySelector("#celular");

        // Validar que los campos no estén vacíos
        if (!nombreInput.value.trim()) {
            e.preventDefault();
            alert("Por favor, introduce tu nombre.");
            return;
        }

        if (!emailInput.value.trim()) {
            e.preventDefault();
            alert("Por favor, introduce tu correo electrónico.");
            return;
        }

        if (!celularInput.value.trim()) {
            e.preventDefault();
            alert("Por favor, introduce tu celular.");
            return;
        }

        // Validación exitosa
        alert("¡Formulario enviado con éxito!");
    });
});
