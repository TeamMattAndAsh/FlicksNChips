window.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  const img = document.querySelector("img");
  const h3 = document.querySelector("h3");
  const photoOne = document.querySelector("#photoOne");
  const photoTwo = document.querySelector("#photoTwo");
  const info = document.querySelector("#info");
  const recipeInfo = document.querySelector("#recipeInfo");
  const infoRecipeBottom = document.querySelector("#info-recipe");
  const recipeItemOne = document.querySelector("#recipeItemOne")
  const recipeItemTwo = document.querySelector("#recipeItemTwo")
  const recipeItemThree = document.querySelector("#recipeItemThree")
  const ul = document.querySelector("ul");
  const recipeTitle = document.querySelector("#recipeTitle");

  navigator.geolocation.getCurrentPosition(async (position) => {
    console.log(position);
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    let response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keys.recipeKey}&query=alfredo`
    );
    let data = await response.json();
    console.log(data);
    const recipeID = data.results[0].id;
    recipeInfo.innerText = data.results[0].title;
    photoTwo.src = data.results[0].image;

    let response2 = await fetch(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${keys.recipeKey}`
    );
    let data2 = await response2.json();
    console.log(data2);
    // infoRecipeBottom.innerText = `${data2.title}, ${data2.cuisines[0]}, ready in ${data2.readyInMinutes}`;
    recipeTitle.innerText = ""
    recipeItemOne.innerText = data2.title;
    recipeItemTwo.innerText = data2.cuisines[0];
    recipeItemThree.innerText = `ready in ${data2.readyInMinutes}`





    // h1.innerText = data2.title;
    // h1.style.color = "#fffcf2";
    // h3.innerHTML = `${data2.summary}`;
    // h3.style.color = "#fffcf2";
    // img.src = data2.results[0].urls.regular;
    // img.src = data2.results[0].urls.regular;

    let response3 = await fetch(
      `https://api.pexels.com/v1/search?query=alfredo`,
      {
        method: "GET",
        headers: {
          Authorization: `h8ihcSnaIEH4MUPNzgxnfJulOlu0zwU1LrgmHaPqcIutnkVZLdE2MlBx`,
        },
      }
    );

    let data3 = await response3.json();
    console.log(data3);
    console.log(data3.photos[0].src.medium);
    img.src = data3.photos[0].src.medium;
    photoTwo.src = data3.photos[1].src.medium;
  });
});
