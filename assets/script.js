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
<<<<<<< HEAD
>>>>>>> 3f6ce4ce041209fc27039a779e46347e12cd7628

const key = 'c532660435c5437ea9550a5436d094b0'
=======
// added a second key we can use if we get to more then the set number of calls on the first key. just comment one
// const key = 'c532660435c5437ea9550a5436d094b0'
const key ='802a019a602c480da05b17676eeb3ce3'
>>>>>>> 3aab48b3580a66708dfd3a7c29b0a12d1aec815d

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
            document.location.href = "./second-page.html"
        })
        btn1.addEventListener("click",() => {
            localStorage.setItem(`recipe`,JSON.stringify(data));
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
<<<<<<< HEAD
    
})
//>>>>>>> 74e12142819046fbe0433ef609f5641afad10254
=======
    // .then(() => {
    //     console.log(data);
    // })
})
>>>>>>> 3f6ce4ce041209fc27039a779e46347e12cd7628
=======
})

// call for the shuffle infomation from spoonacular
class randomRecipe {
    async fetchRandom() {
// added a second key we can use if we get to more then the set number of calls on the first key. just comment one
// const key = 'c532660435c5437ea9550a5436d094b0'
const key ='802a019a602c480da05b17676eeb3ce3'

var random = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}`);
console.log(random);
var storedRandom = await random.json();
console.log(storedRandom);
return storedRandom;
}
}  
// event listner for the random button
var rand = new randomRecipe();  
var randombtn = document.getElementById("shuffleButton")
randombtn.addEventListener("click",() => {
    rand.fetchRandom().then((data) => {
    console.log(data)
    localStorage.setItem('recipe', JSON.stringify(data));
    document.location.href = "./second-page.html"
    })
})
>>>>>>> 3aab48b3580a66708dfd3a7c29b0a12d1aec815d
