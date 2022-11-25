const recipeContainer = document.querySelector("#recipe-container")

function loadRecipes(type = "products"){
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
