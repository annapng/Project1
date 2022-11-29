const recipeContainer = document.querySelector("#recipe-container");
// const key ='802a019a602c480da05b17676eeb3ce3';
// const key ="8848face408443bda493657897ec7fac";
// https://api.spoonacular.com/recipes/analyzeInstructions
// new emergency api key:
const key = '4f01a6d633eb4639b8a8c4c8417804df';

var recipeList = JSON.parse(localStorage.getItem("recipe"));
var chosenIndex = JSON.parse(localStorage.getItem("current-recipe"));
console.log (recipeList);
console.log (chosenIndex);
var chosenRecipe = recipeList.results[chosenIndex];


// console.log (chosenRecipe);
// console.log (chosenRecipe.id);


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
      <a href="${image}" target="_blank"><img src="${image}" id="resultsImage" alt="photo of recipe"></a>
    </div>
  </div>`);
}

var tryAgain = document.getElementById("tryAgain");

tryAgain.addEventListener ("click",() => {
    document.location.href = "./index.html"});

// shuffle button fetch and event
class randomRecipe {
        async fetchRandom() {
    // const key = '8848face408443bda493657897ec7fac'
    var random = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}`);
    console.log(random);
    var storedRandom = await random.json();
    console.log(storedRandom)
    return storedRandom;
    }}  
    // event listener for the random button
    var rand = new randomRecipe();  
    var randombtn = document.getElementById("shuffleButton")
    randombtn.addEventListener("click",() => {
        rand.fetchRandom().then((data) => {
        console.log(data)
        localStorage.setItem('recipe', JSON.stringify(data));
        document.location.href = "./third-page.html"
        })
    })


let btnDsn = document.querySelector("#btn-design");
    localStorage.setItem('Name','CLICKED');
let name = localStorage.getItem('previousRecipe');
  
(function (){
    btnDsn.onclick = function() {
        btnDsn.textContent = previousRecipe;
    };
})();
localStorage.clear();
