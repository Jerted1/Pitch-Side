const API_KEY = 'd8111c3233a64fd7b09494daa6a3f0ee';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?team=33&next=5', options)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('fixtures-content');
    container.innerHTML = ""; // Clear any default text like "Loading..."

    if (data.response && data.response.length > 0) {
      data.response.forEach(match => {
        const div = document.createElement('div');
        div.className = 'card'; // Optional: add styling if you have a `.card` class in CSS
