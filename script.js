document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    const celsiusInput = document.getElementById('celsius');
    const resultElement = document.getElementById('result');

    convertBtn.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    });
});
