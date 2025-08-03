async function searchMovie() {
  const movieName = document.getElementById("movieInput").value;
  if (!movieName) return;

  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=f7b6022b&t=${movieName}`);
    const data = await res.json();

    const container = document.getElementById("result-container");
    container.innerHTML = `
      <h2>${data.Title}</h2>
      <img src="${data.Poster}" alt="${data.Title}" style="max-width: 200px" />
      <p><strong>Year:</strong> ${data.Year}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
      <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
    `;
  } catch (err) {
    console.error(err);
  }
}
