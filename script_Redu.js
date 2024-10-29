document.getElementById('check-button').addEventListener('click', () => {
    const pattern = document.getElementById('regex-input').value;
    const text = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    try {
        const matches = text.match(new RegExp(pattern, 'g')) || [];
        resultDiv.innerHTML = matches.length 
            ? `<strong>Coincidencias:</strong> ${matches.join(', ')}` 
            : "No se encontraron coincidencias.";
        resultDiv.style.color = matches.length ? "#4caf50" : "#ff0000";
    } catch {
        resultDiv.innerHTML = "Error: Expresión regular no válida.";
        resultDiv.style.color = "#ff0000";
    }
});
