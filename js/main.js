// The user will enter a cocktail. Get a cocktail name, photo, and
// instructions and place them in the DOM
fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json()) // Parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
