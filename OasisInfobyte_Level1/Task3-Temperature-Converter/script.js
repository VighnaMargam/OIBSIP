document.getElementById('convertBtn').addEventListener('click', function() {
    const tempValue = document.getElementById('tempInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultArea = document.getElementById('resultArea');

    // 1. Validation: Check if input is empty or not a number
    if (tempValue === "" || isNaN(tempValue)) {
        resultArea.innerHTML = "❌ Please enter a number!";
        resultArea.style.color = "red";
        return;
    }

    const temp = parseFloat(tempValue);
    let resultText = "";
    resultArea.style.color = "#007bff";

    // 2. Conversion Logic
    if (unit === "C") {
        // From Celsius to Fahrenheit and Kelvin
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        resultText = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    } 
    else if (unit === "F") {
        // From Fahrenheit to Celsius and Kelvin
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        resultText = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    } 
    else if (unit === "K") {
        // From Kelvin to Celsius and Fahrenheit
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        resultText = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    // 3. Display the final result with units
    resultArea.innerHTML = resultText;
});