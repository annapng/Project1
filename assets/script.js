<<<<<<< HEAD
//<<<<<<< HEAD
//var key = 'c532660435c5437ea9550a5436d094b0'

recipie = fetch ('https://api.spoonacular.com/recipes/complexSearch?apiKey=c532660435c5437ea9550a5436d094b0')
    .then(res => {
        if (res.ok) {
        console.log('SUCCESS')
    } else {
        console.log('NOT SUCCESSFUL')
    }
}) 


recipie = fetch ('https://api.spoonacular.com/recipes/findByIngredients?apiKey=c532660435c5437ea9550a5436d094b0') 
    .then(res => {
        if (res.ok) {
        console.log('SUCCESS')
    } else {
        console.log('NOT SUCCESSFUL')
    }
}) 

function App() {
    const [pantryItems, setPantryItems] = useState(null);
    const [allergies, setAllergies] = useState(null);

    //return <div className='App'></div>;
        //<section className=''
}

//export default App;
//=======
class Recipes {
async fetchRecipe(input) {
=======


class recipeResults {
    async fetchRecipe(input) {
>>>>>>> 3f6ce4ce041209fc27039a779e46347e12cd7628

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
<<<<<<< HEAD
    
})
//>>>>>>> 74e12142819046fbe0433ef609f5641afad10254
=======
    // .then(() => {
    //     console.log(data);
    // })
})
>>>>>>> 3f6ce4ce041209fc27039a779e46347e12cd7628
