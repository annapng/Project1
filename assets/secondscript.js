
/*const recipeContainer = document.querySelector("#recipe-container");
const key ='802a019a602c480da05b17676eeb3ce3';
=======
const recipeContainer = document.querySelector("#recipe-container");
// const key ='802a019a602c480da05b17676eeb3ce3';
// const key ="8848face408443bda493657897ec7fac"
>>>>>>> 04d99cc4766cf412b7e61ec1f69cdda7cf45f747
// https://api.spoonacular.com/recipes/analyzeInstructions
// new emergency api key:
const key = 'cce3181053584b698c17ad000331b803';

var recipeList = JSON.parse(localStorage.getItem("recipe"));
var chosenIndex = JSON.parse(localStorage.getItem("current-recipe"));
console.log (recipeList);
console.log (chosenIndex);
var chosenRecipe = recipeList.results[chosenIndex];

/*
var search = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}/${chosenRecipe.id}/card`);
console.log(search);


// console.log (chosenRecipe);
// console.log (chosenRecipe.id);


var card = fetch(`https://api.spoonacular.com/recipes/${chosenRecipe.id}/card/?apiKey=${key}`)
  .then((response) => {
    var card = response; 
    console.log(card)
    var cardURL = card.url;
    image(cardURL);
    console.log(cardURL);

<<<<<<< HEAD


  });

=======
  });


>>>>>>> 04d99cc4766cf412b7e61ec1f69cdda7cf45f747
function image(cardURL) {

  fetch(cardURL)
  .then((response) => {
    return response.json();
<<<<<<< HEAD
   /* console.log(response);
    console.log(response.PromiseResult);
    console.log(response.url); 

=======
>>>>>>> 04d99cc4766cf412b7e61ec1f69cdda7cf45f747
  })

  .then((response) => {
    console.log(response);
    console.log(response.url);
    var image = response.url;
    renderRecipe(image);
<<<<<<< HEAD

  })
  
}




function renderRecipe (image) {

    recipeContainer.insertAdjacentHTML(`afterbegin`, 
    `<div id="recipe-img">
      <img src="${image}" alt="photo of recipe">
    </div>
  </div>`);


  
=======
  })
>>>>>>> 04d99cc4766cf412b7e61ec1f69cdda7cf45f747
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

<<<<<<< HEAD
<<<<<<< HEAD
// shuffle buton fetch and event
=======
// shuffle button fetch and event
>>>>>>> 04d99cc4766cf412b7e61ec1f69cdda7cf45f747
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
    });


*/



const weatherkey = 'icI2CTNjyNO2wVzp28G48OGkp40Eim92'

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${weatherkey}`;
    
    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
    //console.log(data);
};
async function getCity(city) {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${weatherkey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data[0]);
};

var weather = getWeather
if(weather < '45'){

}else if (weather > '45'){

}

    
getCity('cheyenne')
    .then(data => {
        return getWeather(data.Key)
    }).then(data => {
        console.log(data);
    })

    .catch(err => console.log(err));
    
getWeather('331604');   


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



let btnDsn = document.querySelector("#btn-design");
    localStorage.setItem('Name','CLICKED');
let name = localStorage.getItem('previousRecipe');
  
(function (){
    btnDsn.onclick = function() {
        btnDsn.textContent = previousRecipe;
    };
})();
localStorage.clear();
