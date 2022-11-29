const recipeContainer = document.querySelector("#recipe-container")


function renderRecipe () {
    var recipeList = JSON.parse(localStorage.getItem("recipe"))
    var chosenIndex = JSON.parse(localStorage.getItem("current-recipe"))
    var chosenRecipe = recipeList.results[chosenIndex]
    console.log (recipeList)
    console.log (chosenIndex)
    console.log (chosenRecipe)
    recipeContainer.innerHTML = `<div class="recipe"> 
    <div id="recTitle">${chosenRecipe.title}</div>
    <div id="recipe-img">;
      <img src="${chosenRecipe.image}" alt="photo of recipe">
    </div>
    <div id="ingList"></div>
    <div id="actRecipe">Actual Recipe
      <ul>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
        <li>Step 4</li>
        <li>Step 5</li>
      </ul>
    </div>
  </div>
  </div>`
    
}

renderRecipe()

var tryAgain = document.getElementById("tryAgain");

tryAgain.addEventListener ("click",() => {
    document.location.href = "./index.html"});





  let search;
  let mealsArray = [];
  const searchContainerEl = $('search-results-container');
  const recipeEl = $("recipe");

  if (mealsArray === null) {
    const searchFailedMsg = $('<p>').text('No results found. Please try again!');
    $('#previousSearch').append(searchFailedMsg);
  } else {
    displaySearchHistory(searchTerm);
    const historyElement = document.querySelector('[data-search="' + searchTerm + '"]');
  }

  const recipeSearchCount = `${searchTerm} (${mealsArray.length})`;

  let searchHistory = JSON.parse(localStorage.getItem('search_history'));
  searchHistory[searchTerm].text = recipeSearchCount;


  localStorage.setItem('search_history', JSON.stringify(searchHistory));
  historyElement.innerHTML = recipeSearchCount;

























/*function loadRecipes(type = "products"){
    const baseURL = `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=c532660435c5437ea9550a5436d094b0`; 
    const url = baseURL + '&q=${type}'; 
    fetch(url)
        .then(res => res.json())
        .then((data) => renderRecipies(data))
        .then(data => console.log(data));
        try {
            
        } catch (error) {
            
        }((error) => console.log(error));
}
loadRecipes(type = "products");

var renderRecipies = (recipeList=[]) => {
    recipeList.forEach((recipeObj) => {
        const { 
            title: recipeTitle, 
            ingredientLines: ingredientsList,
            image: recipeImage,
    } = recipeObj.recipe;
        const htmlStr = `<div class="recipe"> 
        <div id="recTitle">${recipeTitle}</div>
        <div id="recipe-img">;
          <img src="${recipeImage}" alt="photo of recipe">
        </div>
        <div id="ingList">${ingredientsList}</div>
        <div id="actRecipe">Actual Recipe
          <ul>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
            <li>Step 5</li>
          </ul>
        </div>
      </div>
      </div>`;
      recipeContainer.insertAdjacentHRML("beforeend", htmlStr);
    });
}



/*class Recipes {
    async fetchRecipe(input) {
    
    const key = 'c532660435c5437ea9550a5436d094b0'
    
    search = awaitfetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${input}`);
    console.log(search);
    var storedRecipe = await search.json();
    console.log(storedRecipe);
    return storedRecipe;
    }
    }


var R = new Recipes();
var search = document.getElementById("try-again");

button.addEventListener("click", () => {
    const choice = search.value;
    search.value = "";
    R.fetchRecipe(choice).then((data) => {
        console.log(data);
    })
})
*/
