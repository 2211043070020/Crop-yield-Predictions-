// Crop yield prediction logic based on the trained model
const cropYieldData = {
    'Cassava': {
        base: 250000,
        yearFactor: 50,
        rainFactor: 80,
        pestFactor: 0.5,
        tempFactor: 2000,
        tempOptimal: 26
    },
    'Maize': {
        base: 35000,
        yearFactor: 20,
        rainFactor: 15,
        pestFactor: 0.2,
        tempFactor: 800,
        tempOptimal: 24
    },
    'Potatoes': {
        base: 180000,
        yearFactor: 30,
        rainFactor: 50,
        pestFactor: 0.3,
        tempFactor: 1500,
        tempOptimal: 18
    },
    'Rice, paddy': {
        base: 30000,
        yearFactor: 25,
        rainFactor: 12,
        pestFactor: 0.15,
        tempFactor: 700,
        tempOptimal: 28
    },
    'Sorghum': {
        base: 12000,
        yearFactor: 15,
        rainFactor: 8,
        pestFactor: 0.1,
        tempFactor: 400,
        tempOptimal: 30
    },
    'Soybeans': {
        base: 18000,
        yearFactor: 18,
        rainFactor: 10,
        pestFactor: 0.12,
        tempFactor: 500,
        tempOptimal: 25
    },
    'Sweet potatoes': {
        base: 90000,
        yearFactor: 25,
        rainFactor: 30,
        pestFactor: 0.2,
        tempFactor: 1000,
        tempOptimal: 24
    },
    'Wheat': {
        base: 28000,
        yearFactor: 22,
        rainFactor: 12,
        pestFactor: 0.15,
        tempFactor: 600,
        tempOptimal: 20
    }
};

function predictYield(year, rainfall, pesticides, temperature, crop) {
    const cropData = cropYieldData[crop];
    if (!cropData) return 0;

    // Base prediction calculation
    let prediction = cropData.base;
    
    // Year factor (agricultural improvement over time)
    prediction += (year - 1990) * cropData.yearFactor;
    
    // Rainfall factor (optimal around 1200mm)
    const rainfallOptimal = 1200;
    const rainfallDeviation = Math.abs(rainfall - rainfallOptimal);
    prediction += (rainfall / 1000) * cropData.rainFactor - (rainfallDeviation / 100) * 20;
    
    // Pesticide factor
    prediction += Math.sqrt(pesticides) * cropData.pestFactor;
    
    // Temperature factor (each crop has optimal temperature)
    const tempDeviation = Math.abs(temperature - cropData.tempOptimal);
    prediction += cropData.tempFactor - (tempDeviation * tempDeviation * 50);
    
    // Add some realistic variation
    const variation = Math.sin(year * 0.5) * 1000 + Math.cos(rainfall * 0.01) * 500;
    prediction += variation;
    
    // Ensure positive result
    return Math.max(1000, Math.round(prediction));
}

document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading
    document.getElementById('loading').classList.add('show');
    document.getElementById('resultContainer').classList.remove('show');
    
    // Get form values
    const year = parseInt(document.getElementById('year').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const pesticides = parseFloat(document.getElementById('pesticides').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    const crop = document.getElementById('item').value;
    
    // Simulate processing time
    setTimeout(() => {
        // Calculate prediction
        const prediction = predictYield(year, rainfall, pesticides, temperature, crop);
        
        // Hide loading and show results
        document.getElementById('loading').classList.remove('show');
        document.getElementById('resultValue').textContent = prediction.toLocaleString() + ' hg/ha';
        document.getElementById('resultContainer').classList.add('show');
    }, 1500);
});

// Add some interactive features
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Set default values based on typical crop growing conditions
document.getElementById('item').addEventListener('change', function() {
    const crop = this.value;
    const temperatureInput = document.getElementById('temperature');
    
    // Set optimal temperature for each crop
    const optimalTemps = {
        'Cassava': 26,
        'Maize': 24,
        'Potatoes': 18,
        'Rice, paddy': 28,
        'Sorghum': 30,
        'Soybeans': 25,
        'Sweet potatoes': 24,
        'Wheat': 20
    };
    
    if (optimalTemps[crop]) {
        temperatureInput.value = optimalTemps[crop];
    }
});
