var glutenfree = document.getElementById("gf");
var dairyfree = document.getElementById("df");
var ketogenic = document.getElementById("keto");
var paleo = document.getElementById("paleo");
var vegan = document.getElementById("vegan");
var vegetarian = document.getElementById("vegetar");
var pescatarian = document.getElementById("pescatar");
var whole30 = document.getElementById("whole30");

class recipeResults {
    async fetchRecipe(input) {
// added a second key we can use if we get to more then the set number of calls on the first key. just comment one
// const key = 'c532660435c5437ea9550a5436d094b0'
const key ='802a019a602c480da05b17676eeb3ce3'

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
                <button type=button id= "${data.results[0].title}" class="results">${data.results[0].title} <img src=${data.results[0].image} </button>
                <button type=button id= "${data.results[1].title}" class="results">${data.results[1].title} <img src=${data.results[1].image} </button>
                <button type=button id= "${data.results[2].title}" class="results">${data.results[2].title} <img src=${data.results[2].image} </button>
                <button type=button id= "${data.results[3].title}" class="results">${data.results[3].title} <img src=${data.results[3].image} </button>
                <button type=button id= "${data.results[4].title}" class="results">${data.results[4].title} <img src=${data.results[4].image} </button>
                <button type=button id= "${data.results[5].title}" class="results">${data.results[5].title} <img src=${data.results[5].image} </button>
                <button type=button id= "${data.results[6].title}" class="results">${data.results[6].title} <img src=${data.results[6].image} </button>
                <button type=button id= "${data.results[7].title}" class="results">${data.results[7].title} <img src=${data.results[7].image} </button>
                <button type=button id= "${data.results[8].title}" class="results">${data.results[8].title} <img src=${data.results[8].image} </button>
                <button type=button id= "${data.results[9].title}" class="results">${data.results[9].title} <img src=${data.results[9].image} </button>
            </div>
        `
        // for (let i =0;len = data.length; i <= len i++) {

        // }
    
        
        var btn0 = document.getElementById(`${data.results[0].title}`);
        var btn1 = document.getElementById(`${data.results[1].title}`);
        var btn2 = document.getElementById(`${data.results[2].title}`);
        var btn3 = document.getElementById(`${data.results[3].title}`);
        var btn4 = document.getElementById(`${data.results[4].title}`);
        var btn5 = document.getElementById(`${data.results[5].title}`);
        var btn6 = document.getElementById(`${data.results[6].title}`);
        var btn7 = document.getElementById(`${data.results[7].title}`);
        var btn8 = document.getElementById(`${data.results[8].title}`);
        var btn9 = document.getElementById(`${data.results[9].title}`);
       
        btn0.addEventListener("click",() => {
            localStorage.setItem(`recipe`,JSON.stringify(data));
            localStorage.setItem(`current-recipe`,JSON.stringify(0)); 
            document.location.href = "./second-page.html"
        })
        btn1.addEventListener("click",() => {
            localStorage.setItem(`recipe`,JSON.stringify(data));
            localStorage.setItem(`current-recipe`,JSON.stringify(1)); 
            document.location.href = "./second-page.html"
        });
         btn2.addEventListener("click",() => {
             localStorage.setItem(`recipe`,JSON.stringify(data));
             document.location.href = "./second-page.html"
        });   
        btn3.addEventListener("click",() => {
            localStorage.setItem(`recipe`,JSON.stringify(data));
            document.location.href = "./second-page.html"
       });
       btn4.addEventListener("click",() => {
        localStorage.setItem(`recipe`,JSON.stringify(data));
        document.location.href = "./second-page.html"
        });
        btn5.addEventListener("click",() => {
            localStorage.setItem(`recipe`,JSON.stringify(data));
            document.location.href = "./second-page.html"
       });
       btn6.addEventListener("click",() => {
        localStorage.setItem(`recipe`,JSON.stringify(data));
        document.location.href = "./second-page.html"
        });
        btn7.addEventListener("click",() => {
            localStorage.setItem(`recipe`,JSON.stringify(data));
            document.location.href = "./second-page.html"
       });
       btn8.addEventListener("click",() => {
        localStorage.setItem(`recipe`,JSON.stringify(data));
        document.location.href = "./second-page.html"
        });
        btn9.addEventListener("click",() => {
            localStorage.setItem(`recipe`,JSON.stringify(data));
            document.location.href = "./second-page.html"
       });

    }
};
function clear(){
    results=document.getElementById("search-results")
    results.innerHTML="";
    // document.getElementById("input").reset();
}
var SR = new showResults();
var RR = new recipeResults
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");
button.addEventListener("click", () => {
    const choice= search.value;
    console.log(choice)
    search.value="";
    clear();
    RR.fetchRecipe(choice).then((data) =>{
        console.log(data);
        
        SR.displaySearch(data);

    })});

    class randomRecipe {
        async fetchRandom() {
    // added a second key we can use if we get to more then the set number of calls on the first key. just comment one
    const key = 'c532660435c5437ea9550a5436d094b0'
    // const key ='802a019a602c480da05b17676eeb3ce3'
    
    var random = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}`);
    console.log(random);
    var storedRandom = await random.json();
    return storedRandom;
    }
    }  
    // event listner for the random button
    var rand = new randomRecipe();  
    var randombtn = document.getElementById("shuffleButton")
    randombtn.addEventListener("click",() => {
        rand.fetchRandom().then((data) => {
        localStorage.setItem('recipe', JSON.stringify(data));
        document.location.href = "./second-page.html"
        })
    })
 
//     class trivia {
//         async randomTrivia() {
//     // added a second key we can use if we get to more then the set number of calls on the first key. just comment one
//     const key = 'c532660435c5437ea9550a5436d094b0'
//     // const key ='802a019a602c480da05b17676eeb3ce3'
//     var show = document.getElementById("trivia")

//     var triviaRandom = await fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${key}`);
//     console.log(triviaRandom);
//    var storedTrivia = triviaRandom.json();
//    console.log(storedTrivia)
//         show.textContent = storedTrivia.promise.PromiseResult.text
//     return ;
//     }
//     }  
//    t = new trivia
//    t.randomTrivia();