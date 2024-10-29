const regexInput = document.getElementById('regex-input');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');
const checkButton = document.getElementById('check-button');

function checkRegex() {
    const pattern = regexInput.value;
    const text = textInput.value;

    // Validar si la expresión regular es correcta
    try {
        const regex = new RegExp(pattern, 'g');
        const matches = text.match(regex) || [];

        if (matches.length > 0) {
            resultDiv.innerHTML = `<strong>Coincidencias encontradas:</strong> ${matches.join(', ')}`;
            resultDiv.style.color = "#4caf50";
        } else {
            resultDiv.innerHTML = "No se encontraron coincidencias.";
            resultDiv.style.color = "#ff0000";
        }
    } catch (error) {
        resultDiv.innerHTML = "Error: Expresión regular no válida.";
        resultDiv.style.color = "#ff0000";
    }
}

// Agregar evento al botón
checkButton.addEventListener('click', checkRegex);
