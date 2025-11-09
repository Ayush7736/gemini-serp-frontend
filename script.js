const API_URL = 'https://gemini-serp-backend.onrender.com/api/search'; // change to your backend URL

document.getElementById('search').onclick = async () => {
  const q = document.getElementById('q').value.trim();
  if (!q) return alert('Type something!');
  const result = document.getElementById('result');
  result.textContent = 'Searching...';
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: q })
  });
  const data = await res.json();
  result.innerHTML = `
    <h3>Summary:</h3>
    <p>${data.summary}</p>
    <h3>Links:</h3>
    <ul>${data.results.map(r => `<li><a href="${r.link}" target="_blank">${r.title}</a></li>`).join('')}</ul>
  `;
};
