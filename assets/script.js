class Recipes {
async fetchRecipe(input) {

const key= 'c532660435c5437ea9550a5436d094b0'

search= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${input}`);
console.log(search);
var storedRecipe =await search.json();
console.log(storedRecipe);
return storedRecipe;
}
}

class recipeResults {
    constructor(){
        this.container = document.getElementById("search-results");
    }
    displaySearch(data) {
        console.log(data);
        this.container.innerHTML += `
        <ul class="list-group">
            <li class="list-group-item">${data.results.title}</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
        </ul>
        `
    }
}
var R = new Recipes();
var RR = new recipeResults
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");
button.addEventListener("click", () => {
    const choice= search.value;
    search.value="";
    R.fetchRecipe(choice).then((data) =>{
        console.log(data);
    })
    RR.displaySearch(choice).then((data) => {
        console.log(data);
    })
})
