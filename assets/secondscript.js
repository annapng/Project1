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
   window.ingredientList = ingredientList;
});


$.getJSON(`https://api.spoonacular.com/recipes/${chosenRecipe.id}/analyzedInstructions?apiKey=${key}`, function(stepData) {
  console.log(stepData);
  console.log(stepData[0].steps);


  for (let i = 0; i < stepData[0].steps.length; i++) {
   
    var stepList = Object.values(stepData[0].steps[i].step);
    stepList[i] = stepList[i].join("");
    console.log(stepList[i]);
    
  }
  



});


function renderRecipe () {

    recipeContainer.insertAdjacentHTML(`afterbegin`, `<div class="recipe"> 
    <div id="recTitle">${chosenRecipe.title}</div>
    <div id="recipe-img">;
      <img src="${chosenRecipe.image}" alt="photo of recipe">
    </div>
  </div>`);


  var ingUl = document.getElementById("ingredUl");
  console.log(ingredientList);
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


