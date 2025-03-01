async function fetchData() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    document.getElementById('result').innerHTML = `
        <p>${data.setup}</p>
        <p><strong>${data.punchline}</strong></p>
    `;
}