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

const key= 'c532660435c5437ea9550a5436d094b0'

search= awaitfetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${input}`);
console.log(search);
var storedRecipe =await search.json();
console.log(storedRecipe);
return storedRecipe;
}
}
var R = new Recipes();
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");
button.addEventListener("click", () => {
    const choice= search.value;
    search.value="";
    R.fetchRecipe(choice).then((data) =>{
        console.log(data);
    })
    
})
//>>>>>>> 74e12142819046fbe0433ef609f5641afad10254
