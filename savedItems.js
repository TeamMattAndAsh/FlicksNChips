const results = document.querySelector("#results");
const cardContainer = document.getElementById("card-container");

for (let  i = localStorage.length - 1; i >= 0; i--) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  // console.log(`${key}: ${value}`);
  console.log(JSON.parse(value));
  let obj = JSON.parse(value);
  console.log(obj.movieTitle);


  const card = document.createElement("div");
  card.classList.add("col");
  card.style.border = "5px"

  const cardInner = document.createElement("div");
  cardInner.classList.add("card", "h-100");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = obj.movieTitle;

  const cardText = document.createElement("h5");
  cardText.classList.add("card-text");
  cardText.textContent = obj.recipeTitle;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardInner.appendChild(cardBody);
  card.appendChild(cardInner);
  cardContainer.appendChild(card);


}
