async function fetchCSV() {
    const response = await fetch('data.csv');
    const data = await response.text();
    return data.split('\n').filter(line => line.trim() !== '');
}

function getRandomLine(lines) {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
}

async function displayRandomLine() {
    const lines = await fetchCSV();
    const randomLine = getRandomLine(lines);
    document.getElementById('randomLine').textContent = randomLine;
}

// Load a random line when the page is loaded
window.onload = displayRandomLine;