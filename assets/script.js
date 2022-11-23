

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
            localStorage.setItem(`${data.results[0].title}`,JSON.stringify(data));
        })
        btn1.addEventListener("click",() => {
            localStorage.setItem(`${data.results[1].title}`,JSON.stringify(data));
        });
         btn2.addEventListener("click",() => {
             localStorage.setItem(`${data.results[2].title}`,JSON.stringify(data));
        });   
        btn3.addEventListener("click",() => {
            localStorage.setItem(`${data.results[3].title}`,JSON.stringify(data));
       });
       btn4.addEventListener("click",() => {
        localStorage.setItem(`${data.results[4].title}`,JSON.stringify(data));
        });
        btn5.addEventListener("click",() => {
            localStorage.setItem(`${data.results[5].title}`,JSON.stringify(data));
       });
       btn6.addEventListener("click",() => {
        localStorage.setItem(`${data.results[6].title}`,JSON.stringify(data));
        });
        btn7.addEventListener("click",() => {
            localStorage.setItem(`${data.results[7].title}`,JSON.stringify(data));
       });
       btn8.addEventListener("click",() => {
        localStorage.setItem(`${data.results[8].title}`,JSON.stringify(data));
        });
        btn9.addEventListener("click",() => {
            localStorage.setItem(`${data.results[9].title}`,JSON.stringify(data));
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
    // .then(() => {
    //     console.log(data);
    // })
})
