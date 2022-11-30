const key = '7241575ebfdb41ba8e306367db250539';
// const key = '8dfc602f94974cecb5169da744c24a2b';
// const key = '06cbe8b372eb41cc8ba05702e3523e36';


function App() {
    const [pantryItems, setPantryItems] = useState(null);
    const [allergies, setAllergies] = useState(null);
}


class recipeResults {
    async fetchRecipe(input) {


let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
let values = [];
checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
});


console.log(values);
var searchArray = "&diet=";


for (let i = 0; i < values.length; i++) {
   searchArray = searchArray.concat(values[i]);
   if (i < values.length - 1) {
        searchArray = searchArray.concat("&diet=");
   }
}

searchArray.toString();

var search = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${input}${searchArray}`);
console.log(search);
var storedRecipe = await search.json();
console.log(storedRecipe);
return storedRecipe;
}}


class showResults{
    constructor(){
        this.container = document.getElementById("search-results");
    }

    displaySearch(data) {

        console.log(data);

        if (data.results[0] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn0" class="results">${data.results[0].title} <img src=${data.results[0].image}> </button> </div> `); 

            document.getElementById("btn0").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(0)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[1] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn1" class="results">${data.results[1].title} <img src=${data.results[1].image}> </button> </div> `); 

            document.getElementById("btn1").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(1)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[2] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn2" class="results">${data.results[2].title} <img src=${data.results[2].image}> </button> </div> `); 

            document.getElementById("btn2").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(2)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[3] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn3" class="results">${data.results[3].title} <img src=${data.results[3].image}> </button> </div> `); 

            document.getElementById("btn3").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(3)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[4] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn4" class="results">${data.results[4].title} <img src=${data.results[4].image}> </button> </div> `); 

            document.getElementById("btn4").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(4)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[5] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn5" class="results">${data.results[5].title} <img src=${data.results[5].image}> </button> </div> `); 

            document.getElementById("btn5").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(5)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[6] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn6" class="results">${data.results[6].title} <img src=${data.results[6].image}> </button> </div> `); 

            document.getElementById("btn6").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(6)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[7] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn7" class="results">${data.results[7].title} <img src=${data.results[7].image}> </button> </div> `); 

            document.getElementById("btn7").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(7)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[8] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn8" class="results">${data.results[8].title} <img src=${data.results[8].image}> </button> </div> `); 

            document.getElementById("btn8").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(8)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}

        if (data.results[9] !== 'undefined'){
            this.container.insertAdjacentHTML(`beforeend`, `<ul class="search">
            <button type=button id= "btn9" class="results">${data.results[9].title} <img src=${data.results[9].image}> </button> </div> `); 

            document.getElementById("btn9").addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(9)); 
                document.location.href = "./second-page.html";
            }) 
        } else {null;}
/*
        if (data.results[1] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "btn1" class="results">${data.results[1].title} <img src=${data.results[1].image} </button>
            </div> `
            var btn1 = document.getElementById("btn1");
            btn1.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(1)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}
        
        if (data.results[2] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[2].title}" class="results">${data.results[2].title} <img src=${data.results[2].image} </button>
            </div> `
            var btn2 = document.getElementById(`${data.results[2].title}`);
            btn2.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(2)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}
        
        if (data.results[3] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[3].title}" class="results">${data.results[3].title} <img src=${data.results[3].image} </button>
            </div> `
            var btn3 = document.getElementById(`${data.results[3].title}`);
            btn3.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(3)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}

        if (data.results[4] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[4].title}" class="results">${data.results[4].title} <img src=${data.results[4].image} </button>
            </div> `
            var btn4 = document.getElementById(`${data.results[4].title}`);
            btn4.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(4)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}

        if (data.results[5] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[5].title}" class="results">${data.results[5].title} <img src=${data.results[5].image} </button>
            </div> `
            var btn5 = document.getElementById(`${data.results[5].title}`);
            btn5.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(5)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}

        if (data.results[6] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[6].title}" class="results">${data.results[6].title} <img src=${data.results[6].image} </button>
            </div> `
            var btn6 = document.getElementById(`${data.results[6].title}`);
            btn6.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(6)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}

        if (data.results[7] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[7].title}" class="results">${data.results[7].title} <img src=${data.results[7].image} </button>
            </div> `
            var btn7 = document.getElementById(`${data.results[7].title}`);
            btn7.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(7)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}

        if (data.results[8] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[8].title}" class="results">${data.results[8].title} <img src=${data.results[8].image} </button>
            </div> `
            var btn8 = document.getElementById(`${data.results[8].title}`);
            btn8.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(8)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}

        
        if (data.results[9] !== 'undefined'){
            this.container.innerHTML += 
            `<ul class="search">
                <button type=button id= "${data.results[9].title}" class="results">${data.results[9].title} <img src=${data.results[9].image} </button>
            </div> `
            var btn9 = document.getElementById(`${data.results[9].title}`);
            btn9.addEventListener("click",() => {
                localStorage.setItem(`recipe`,JSON.stringify(data));
                localStorage.setItem(`current-recipe`,JSON.stringify(9)); 
                document.location.href = "./second-page.html"
            })
        } else {null;}

*/


    }};
   


function clear(){
    results=document.getElementById("search-results")
    results.innerHTML="";
}


var SR = new showResults();
var RR = new recipeResults
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");


search.addEventListener("keyup", function(event) {
    if (event.key === "Enter"){
        button.click();
    }
})


button.addEventListener("click", () => {
    const choice= search.value;
    console.log(choice)
    search.value="";
    clear();
    RR.fetchRecipe(choice).then((data) =>{
        console.log(data);
        
        SR.displaySearch(data);
    })
})

search.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        button.click();
    }
})


    class randomRecipe {
        async fetchRandom() {
    // added a second key we can use if we get to more then the set number of calls on the first key. just comment one
    // const key = 'c532660435c5437ea9550a5436d094b0'
    // const key ='802a019a602c480da05b17676eeb3ce3'
    const key ="4f01a6d633eb4639b8a8c4c8417804df"
    
    var random = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}`);
    console.log(random);
    var storedRandom = await random.json();
    return storedRandom;
    }}  
    // event listner for the random button
    var rand = new randomRecipe();  
    var randombtn = document.getElementById("shuffleButton")
    randombtn.addEventListener("click",() => {
        rand.fetchRandom().then((data) => {
        localStorage.setItem('recipe', JSON.stringify(data));
        document.location.href = "./third-page.html"
        })
    })
 
    class trivia {
        async randomTrivia() {
    // added a second key we can use if we get to more then the set number of calls on the first key. just comment one
    // const key = 'c532660435c5437ea9550a5436d094b0'
    // const key ='802a019a602c480da05b17676eeb3ce3'
    var show = document.getElementById("trivia")

    var triviaRandom = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${key}`);
    console.log(triviaRandom);
   var storedTrivia = triviaRandom.json();
   console.log(storedTrivia)
        // show.textContent = storedTrivia.promise.PromiseResult.text
    return ;
    }
    }  
   t = new trivia
   t.randomTrivia();

