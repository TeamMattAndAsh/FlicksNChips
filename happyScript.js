const h1 = document.querySelector("h1");
const img = document.querySelector("img");
const h3 = document.querySelector("h3");
const photoOne = document.querySelector("#photoOne");
const photoTwo = document.querySelector("#photoTwo");
const info = document.querySelector("#info");
const recipeInfo = document.querySelector("#recipeInfo");
const infoRecipeBottom = document.querySelector("#info-recipe");
const recipeItemOne = document.querySelector("#recipeItemOne");
const recipeItemTwo = document.querySelector("#recipeItemTwo");
const recipeItemThree = document.querySelector("#recipeItemThree");
const ul = document.querySelector("ul");
const recipeTitle = document.querySelector("#recipeTitle");
const movieInfoOuter = document.querySelector(`#movieInfoOuter`)
const movieTitle = document.querySelector("#movieTitle");
const movieItemOne = document.querySelector("#movieItemOne");
const movieItemTwo = document.querySelector("#movieItemTwo");
const movieItemThree = document.querySelector("#movieItemThree");
const loader = document.querySelector(`.loader`);
const a = document.querySelector(`a`);
const link = document.createElement("a");
const target = document.querySelector("target");
const retryMovie = document.querySelector(`#retryMovie`);
const retryRecipe = document.querySelector(`#retryRecipe`)

window.addEventListener("DOMContentLoaded", async () => {
  const sad = [`Spicy`, `Barbaque`, `Italian`, `Mexican`, `Chinese`];
  let sadRand = sad[Math.floor(Math.random() * sad.length)];
  const recRand = Math.floor(Math.random() * 9);
  let response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keys.recipeKey}&query=${sadRand}`
  );
  let data = await response.json();
  console.log(data);
  const recipeID = data.results[recRand].id;
  recipeTitle.innerText = data.results[recRand].title;
  photoTwo.src = data.results[recRand].image;

  let response2 = await fetch(
    `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${keys.recipeKey}`
  );

  let data2 = await response2.json();
  loader.style.display = "none";
  console.log(data2);

  // infoRecipeBottom.innerText = `${data2.title}, ${data2.cuisines[0]}, ready in ${data2.readyInMinutes}`;
  recipeTitle.innerText = data2.title;
  // recipeItemOne.innerText = data2.title;
  recipeItemTwo.innerText = `ready in ${data2.readyInMinutes}`;
  link.setAttribute("href", `${data2.spoonacularSourceUrl}`);
  link.setAttribute("target", "_blank");
  link.textContent = `click here for recipe!`;
  recipeItemThree.appendChild(link);

  loader.innerHTML = "";

  let sadMovies = [28, 35, 18, 14, 10749, 10770, 53];
  let happyMovies = [12, 35, 80, 27, 10751, 9648, 878];
  let sadMoviesRand = sadMovies[Math.floor(Math.random() * sadMovies.length)];
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/list/${sadMoviesRand}?api_key=${keys.movieKey}&language=en-US&include_adult=false`
  );
  const movRand = Math.floor(Math.random() * 10);
  const movieData = await movieResponse.json();
  // console.log(movieData.items[movRand]);
  // console.log(movieData.items[movRand].original_title);
  movieTitle.innerText = movieData.items[movRand].original_title;
  movieItemOne.innerText = movieData.items[movRand].original_title;
  movieItemTwo.innerText = `Was released: ${movieData.items[movRand].release_date}`;
  movieItemThree.innerText = `People rated this movie a ${movieData.items[movRand].vote_average} out of 10`;
  photoOne.src = `https://image.tmdb.org/t/p/w500${movieData.items[movRand].poster_path}`;
});

retryMovie.addEventListener("click", async () => {
  // e.preventDefault();
  // movieInfoOuter.innerHTML = "";
  
  let sadMovies = [28, 35, 18, 14, 10749, 10770, 53];
  let happyMovies = [12, 35, 80, 27, 10751, 9648, 878];
  let happyMoviesRand =
    happyMovies[Math.floor(Math.random() * happyMovies.length)];
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/list/${happyMoviesRand}?api_key=${keys.movieKey}&language=en-US&include_adult=false`
  );
  const movRand = Math.floor(Math.random() * 10);
  const movieData = await movieResponse.json();
  loader.innerHTML = "";
  movieTitle.innerText = movieData.items[movRand].original_title;
  movieItemOne.innerText = movieData.items[movRand].original_title;
  movieItemTwo.innerText = `Was released: ${movieData.items[movRand].release_date}`;
  movieItemThree.innerText = `People rated this movie a ${movieData.items[movRand].vote_average} out of 10`;
  photoOne.src = `https://image.tmdb.org/t/p/w500${movieData.items[movRand].poster_path}`;
});

retryRecipe.addEventListener("click", async ()=>{
  const sad = [`Spicy`, `Barbaque`, `Italian`, `Mexican`, `Chinese`];
  let sadRand = sad[Math.floor(Math.random() * sad.length)];
  const recRand = Math.floor(Math.random() * 9);
  let response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keys.recipeKey}&query=${sadRand}`
  );
  let data = await response.json();
  console.log(data);
  const recipeID = data.results[recRand].id;
  recipeTitle.innerText = data.results[recRand].title;
  photoTwo.src = data.results[recRand].image;

  let response2 = await fetch(
    `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${keys.recipeKey}`
  );

  let data2 = await response2.json();
  loader.style.display = "none";
  console.log(data2);

  // infoRecipeBottom.innerText = `${data2.title}, ${data2.cuisines[0]}, ready in ${data2.readyInMinutes}`;
  recipeTitle.innerText = data2.title;
  // recipeItemOne.innerText = data2.title;
  recipeItemTwo.innerText = `ready in ${data2.readyInMinutes}`;
  link.setAttribute("href", `${data2.spoonacularSourceUrl}`);
  link.setAttribute("target", "_blank");
  link.textContent = `click here for recipe!`;
  recipeItemThree.appendChild(link);


})