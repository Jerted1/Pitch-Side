const API_KEY = 'd8111c3233a64fd7b09494daa6a3f0ee'; // Replace with your real key

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

// Example: Get next 5 games for Manchester United (team ID: 33)
fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?team=33&next=5', options)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('fixtures-content');
    data.response.forEach(match => {
      const div = document.createElement('div');
      const home = match.teams.home.name;
      const away = match.teams.away.name;
      const date = new Date(match.fixture.date).toLocaleString();
      div.innerHTML = `<p>${home} vs ${away}<br><small>${date}</small></p>`;
      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));
