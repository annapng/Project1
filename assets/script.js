

class recipeResults {
    async fetchRecipe(input) {

const key = 'c532660435c5437ea9550a5436d094b0'

search = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${input}`);
console.log(search);
var storedRecipe = await search.json();
console.log(storedRecipe);
return storedRecipe;
}
}    
class showResults{
    constructor(){
        this.container = document.getElementById("search-results");
    }

    displaySearch(data) {
        console.log(data);
        this.container.innerHTML += `
            <ul class="search">
                <li class="results">${data.results[0].title} <img src=${data.results[0].image} </div>
                <li class="results">${data.results[1].title} <img src=${data.results[1].image} </div>
                <li class="results">${data.results[2].title} <img src=${data.results[2].image} </li>
                <li class="results">${data.results[3].title} <img src=${data.results[3].image} </li>
                <li class="results">${data.results[4].title} <img src=${data.results[4].image} </li>
                <li class="results">${data.results[5].title} <img src=${data.results[5].image} </li>
                <li class="results">${data.results[6].title} <img src=${data.results[6].image} </li>
                <li class="results">${data.results[7].title} <img src=${data.results[7].image} </li>
                <li class="results">${data.results[8].title} <img src=${data.results[8].image} </li>
                <li class="results">${data.results[9].title} <img src=${data.results[9].image} </li>
            </ul>
        `
    }
};
var SR = new showResults();
var RR = new recipeResults
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");
button.addEventListener("click", () => {
    const choice= search.value;
    search.value="";
    RR.fetchRecipe(choice).then((data) =>{
        console.log(data);
        SR.displaySearch(data);
    })
    // .then(() => {
    //     console.log(data);
    // })
})
