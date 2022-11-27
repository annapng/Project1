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


$.getJSON(`https://api.spoonacular.com/recipes/${chosenRecipe.id}/ingredientWidget.json?apiKey=${key}`, function(ingredientData){
  var ingredientList = [];
   ingredientList = ingredientData.ingredients;
   console.log(ingredientList);
});


$.getJSON(`https://api.spoonacular.com/recipes/${chosenRecipe.id}/analyzedInstructions?apiKey=${key}`, function(stepData) {
  var stepList = [];
  console.log(stepData);
  stepList = stepData.steps;
  console.log(stepList);
});



function renderRecipe () {

    recipeContainer.insertAdjacentHTML(`afterbegin`, `<div class="recipe"> 
    <div id="recTitle">${chosenRecipe.title}</div>
    <div id="recipe-img">;
      <img src="${chosenRecipe.image}" alt="photo of recipe">
    </div>
  </div>`);


  var ingUl = document.getElementById("ingredUl");
  ingredientList.forEach((item) => {
    let li = document.createElement("li");
    li.innertext = item;
    ingUl.appendChild(li);
  });
  
}

renderRecipe();

var tryAgain = document.getElementById("tryAgain");

tryAgain.addEventListener ("click",() => {
    document.location.href = "./index.html"});


