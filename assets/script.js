var gf = document.getElementById("gf");
var df = document.getElementById("df");
var keto = document.getElementById("keto");
var paleo = document.getElementById("paleo");
var gf = document.getElementById("vegan");
var gf = document.getElementById("vegetar");
var gf = document.getElementById("pescatar");
var gf = document.getElementById("whole30");


class Recipes {
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
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");
button.addEventListener("click", () => {
    const choice= search.value;
    search.value = "";
    R.fetchRecipe(choice).then((data) =>{
        console.log(data);
    })
    
})



function checkboxes {


}