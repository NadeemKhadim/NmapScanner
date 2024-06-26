document.getElementById('nmap-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const target = document.getElementById('target').value;
    const scanType = document.getElementById('scan-type').value;
    const outputElement = document.getElementById('output');
    const loadingElement = document.getElementById('loading');

    // Clear previous output
    outputElement.textContent = '';
    loadingElement.style.display = 'block';
    outputElement.style.display = 'none';

    try {
        const response = await fetch('/scan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ target, scanType })
        });

        const result = await response.json();
        loadingElement.style.display = 'none';
        if (result.error) {
            outputElement.textContent = `Error: ${result.error}`;
            outputElement.style.display = 'block';
        } else {
            const outputText = result.output;
            outputElement.textContent = '';
            outputElement.style.display = 'block';
            displayTypingAnimation(outputElement, outputText);
        }
    } catch (error) {
        loadingElement.style.display = 'none';
        outputElement.textContent = `Error: ${error.message}`;
        outputElement.style.display = 'block';
    }
});

function displayTypingAnimation(element, text) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 15);
        }
    }
    type();
}
