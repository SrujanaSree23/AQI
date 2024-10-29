async function fetchAQI() {
    const city = document.getElementById('city').value;
    const response = await fetch(`/api/aqi/${city}`);
    
    if (!response.ok) {
        document.getElementById('result').innerText = 'Error fetching AQI data.';
        return;
    }
    
    const data = await response.json();
    displayAQI(data);
}

function displayAQI(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (data.error) {
        resultDiv.innerText = data.error;
    } else {
        resultDiv.innerHTML = `
            <h2>AQI for ${data.city}</h2>
            <p><strong>AQI Value:</strong> ${data.aqi}</p>
            <p><strong>Category:</strong> ${getAQICategory(data.aqi)}</p>
        `;
    }
}

function getAQICategory(aqi) {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
}
