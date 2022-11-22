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

    return <div className='App'></div>;
        <section className=''
}

export default App;