let bitCount = 8; // Default bit count
const lightbulbContainer = document.getElementById('lightbulbs');
const binaryValueDisplay = document.getElementById('binaryValue');
const decimalValueDisplay = document.getElementById('decimalValue');

function initializeLightbulbs() {
    lightbulbContainer.innerHTML = ''; // Clear existing lightbulbs
    for (let i = 0; i < bitCount; i++) {
        const bulb = document.createElement('img');
        bulb.src = 'images/bulboff.png'; // Default to OFF
        bulb.dataset.index = i;
        bulb.classList.add('lightbulb');
        bulb.addEventListener('click', toggleBulb);
        lightbulbContainer.appendChild(bulb);
    }
    updateValues();
}

function toggleBulb(event) {
    const bulb = event.currentTarget;
    bulb.src = bulb.src.includes('bulboff.png') ? 'images/bulbon.png' : 'images/bulboff.png';
    updateValues();
}

function updateValues() {
    const bulbs = document.querySelectorAll('.lightbulb');
    let binaryValue = '';
    bulbs.forEach(bulb => {
        binaryValue += bulb.src.includes('bulbon.png') ? '1' : '0';
    });
    binaryValueDisplay.textContent = binaryValue;
    decimalValueDisplay.textContent = parseInt(binaryValue, 2) || 0;
}

function changeBitCount(newBitCount) {
    bitCount = newBitCount;
    initializeLightbulbs();
}

// Initialize the lightbulbs on page load
initializeLightbulbs();






