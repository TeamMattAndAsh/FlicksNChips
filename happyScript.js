document.addEventListener("DOMContentLoaded", async () => {
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
  const movieInfoOuter = document.querySelector(`#movieInfoOuter`);
  const movieTitle = document.querySelector("#movieTitle");
  const movieItemOne = document.querySelector("#movieItemOne");
  const movieItemTwo = document.querySelector("#movieItemTwo");
  const movieItemThree = document.querySelector("#movieItemThree");
  const loader = document.querySelector(`.loader`);
  const a = document.querySelector(`a`);
  const link = document.createElement("a");
  const target = document.querySelector("target");
  const retryMovie = document.querySelector(`#retryMovie`);
  const retryRecipe = document.querySelector(`#retryRecipe`);
  const submitButton = document.querySelector("#submitButton");

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );

  let data = await response.json();
  console.log(data);
  console.log(data.meals[0].strMeal);
  recipeTitle.innerText = data.meals[0].strMeal;
  photoTwo.src = data.meals[0].strMealThumb;
  recipeTitle.innerText = data.meals[0].strMeal;
  recipeItemTwo.innerText = `Type: ${data.meals[0].strArea}`;
  link.setAttribute("href", `${data.meals[0].strSource}`);
  link.setAttribute("target", "_blank");
  link.textContent = `click here for recipe!`;
  recipeItemThree.appendChild(link);

  loader.style.display = "none";

  let sadMovies = [28, 35, 18, 14, 10749, 10770, 53];
  let happyMovies = [12, 35, 80, 27, 10751, 9648, 878];
  const movRand = Math.floor(Math.random() * 8);
  let happyMoviesRand = happyMovies[Math.floor(Math.random() * happyMovies.length)];
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/list/${happyMoviesRand}?api_key=${keys.movieKey}&language=en-US&include_adult=false`
  );
  const movieData = await movieResponse.json();
  console.log(movieData);

  movieTitle.innerText = movieData.items[movRand].title;
  movieItemOne.innerText = movieData.items[movRand].title;
  movieItemTwo.innerText = `Was released: ${movieData.items[movRand].release_date}`;
  movieItemThree.innerText = `People rated this movie a ${movieData.items[movRand].vote_average} out of 10`;
  photoOne.src = `https://image.tmdb.org/t/p/w500${movieData.items[movRand].poster_path}`;

  let count = 0;
  submitButton.addEventListener("click", () => {
    count++;
    class items {
      constructor() {
        this.movieTitle = movieData.items[movRand].title;
        this.movieImage = `https://image.tmdb.org/t/p/w500${movieData.items[movRand].poster_path}`;
        this.recipeTitle = data.meals[0].strMeal;
        this.recipeImage = data.meals[0].strSource;
      }
    }
    console.log(count);
    console.log(localStorage.length);
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(new items()));
  });

  retryMovie.addEventListener("click", async () => {
    // e.preventDefault();
    let sadMovies = [28, 35, 18, 14, 10749, 10770, 53];
    let happyMovies = [12, 35, 80, 27, 10751, 9648, 878];
    let happyMoviesRand =
      happyMovies[Math.floor(Math.random() * happyMovies.length)];
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/list/${happyMoviesRand}?api_key=${keys.movieKey}&language=en-US&include_adult=false`
    );
    const movRand = Math.floor(Math.random() * 5);
    const movieData = await movieResponse.json();

    movieTitle.innerText = movieData.items[movRand].title;
    movieItemOne.innerText = movieData.items[movRand].title;
    movieItemTwo.innerText = `Was released: ${movieData.items[movRand].release_date}`;
    movieItemThree.innerText = `People rated this movie a ${movieData.items[movRand].vote_average} out of 10`;
    photoOne.src = `https://image.tmdb.org/t/p/w500${movieData.items[movRand].poster_path}`;
  });
});

retryRecipe.addEventListener("click", async () => {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  let data = await response.json();
  console.log(data);
  console.log(data.meals[0].strMeal);
  recipeTitle.innerText = data.meals[0].strMeal;
  photoTwo.src = data.meals[0].strMealThumb;
  // infoRecipeBottom.innerText = `${data2.title}, ${data2.cuisines[0]}, ready in ${data2.readyInMinutes}`;
  recipeTitle.innerText = data.meals[0].strMeal;
  // recipeItemOne.innerText = data2.title;
  recipeItemTwo.innerText = `Type: ${data.meals[0].strArea}`;
  link.setAttribute("href", `${data.meals[0].strSource}`);
  link.setAttribute("target", "_blank");
  link.textContent = `click here for recipe!`;
  recipeItemThree.appendChild(link);
});
