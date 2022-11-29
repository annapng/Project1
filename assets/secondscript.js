const recipeContainer = document.querySelector("#recipe-container");
const key ='802a019a602c480da05b17676eeb3ce3';
// https://api.spoonacular.com/recipes/analyzeInstructions

var recipeList = JSON.parse(localStorage.getItem("recipe"));
var chosenIndex = JSON.parse(localStorage.getItem("current-recipe"));
var chosenRecipe = recipeList.results[chosenIndex];
console.log (recipeList);
console.log (chosenIndex);
console.log (chosenRecipe);
console.log (chosenRecipe.id);

/*
var search = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}/${chosenRecipe.id}/card`);
console.log(search);


$.getJSON(`https://api.spoonacular.com/recipes/${chosenRecipe.id}/ingredientWidget.json?apiKey=${key}`, function(ingredientData){
  var ingredientList = [];
   ingredientList = ingredientData.ingredients;
   console.log(ingredientList);
   window.ingredientList = ingredientList;
});
*/

var card = fetch(`https://api.spoonacular.com/recipes/${chosenRecipe.id}/card/?apiKey=${key}`)
  .then((response) => {
    var card = response; 
    console.log(card)
    var cardURL = card.url;
    image(cardURL);
    console.log(cardURL);



  });

function image(cardURL) {

  fetch(cardURL)
  .then((response) => {
    return response.json();
   /* console.log(response);
    console.log(response.PromiseResult);
    console.log(response.url); */

  })

  .then((response) => {
    console.log(response);
    console.log(response.url);
    var image = response.url;
    renderRecipe(image);

  })
  
}




function renderRecipe (image) {

    recipeContainer.insertAdjacentHTML(`afterbegin`, 
    `<div id="recipe-img">
      <img src="${image}" alt="photo of recipe">
    </div>
  </div>`);


  
}

renderRecipe();

var tryAgain = document.getElementById("tryAgain");

tryAgain.addEventListener ("click",() => {
    document.location.href = "./index.html"});


