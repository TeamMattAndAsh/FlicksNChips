window.addEventListener("DOMContentLoaded", async () => {
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
  const movieItemOne = document.querySelector("#movieItemOne");
  const movieItemTwo = document.querySelector("#movieItemTwo");
  const movieItemThree = document.querySelector("#movieItemThree");
  const loader = document.querySelector(`.loader`);
  const a = document.querySelector(`a`);
  const link = document.createElement("a");
  const target = document.querySelector("target");

  const sad = [
    `italian`,
    `soup`,
    `pasta`,
    `mexican`,
    `dessert`,
    `chicken`,
    `fried`,
  ];
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

//https://api.themoviedb.org/3/list/{list_id}?api_key=<<api_key>>&language=en-US
// h1.innerText = data2.title;
// h1.style.color = "#fffcf2";
// h3.innerHTML = `${data2.summary}`;
// h3.style.color = "#fffcf2";
// img.src = data2.results[0].urls.regular;
// img.src = data2.results[0].urls.regular;

// var response3 = await fetch(
//   `https://api.pexels.com/v1/search?query=${data2.title}`,
//   {
//     method: "GET",
//     headers: {
//       Authorization: `h8ihcSnaIEH4MUPNzgxnfJulOlu0zwU1LrgmHaPqcIutnkVZLdE2MlBx`,
//     },
//   },)

//   let data3 = await response3.json();
//   const rand10 = Math.floor(Math.random() * 10);
//   console.log(data3);
//   console.log(data3.photos[0].src.medium);
//   // photoOne.src = data3.photos[0].src.original;
//   photoTwo.src = data3.photos[movRand].src.original;
// );
