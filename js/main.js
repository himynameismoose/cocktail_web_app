document.querySelector('.btn').addEventListener('click', findDrink);
document.querySelector('.srchbar').addEventListener('click', clearDrink);

function findDrink() {
    let drink = document.querySelector('.srchbar').value;
    let drinkAPI = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

    fetch(drinkAPI)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Pull Drink Information
            let name = data.drinks[0].strDrink;
            let type = data.drinks[0].strCategory;
            let photo = data.drinks[0].strDrinkThumb;
            let instructions = data.drinks[0].strInstructions;
            let ingredients = [
                data.drinks[0].strIngredient1,
                data.drinks[0].strIngredient2,
                data.drinks[0].strIngredient3,
                data.drinks[0].strIngredient4,
                data.drinks[0].strIngredient5,
                data.drinks[0].strIngredient6,
                data.drinks[0].strIngredient7,
                data.drinks[0].strIngredient8,
                data.drinks[0].strIngredient9,
                data.drinks[0].strIngredient10,
                data.drinks[0].strIngredient11,
                data.drinks[0].strIngredient12,
                data.drinks[0].strIngredient13,
                data.drinks[0].strIngredient14,
                data.drinks[0].strIngredient15
            ];
            let amounts = [
                data.drinks[0].strMeasure1,
                data.drinks[0].strMeasure2,
                data.drinks[0].strMeasure3,
                data.drinks[0].strMeasure4,
                data.drinks[0].strMeasure5,
                data.drinks[0].strMeasure6,
                data.drinks[0].strMeasure7,
                data.drinks[0].strMeasure8,
                data.drinks[0].strMeasure9,
                data.drinks[0].strMeasure10,
                data.drinks[0].strMeasure11,
                data.drinks[0].strMeasure12,
                data.drinks[0].strMeasure13,
                data.drinks[0].strMeasure14,
                data.drinks[0].strMeasure15
            ];

            // Pull DOM Information
            const drinkName = document.querySelector('h2');
            const drinkType = document.querySelector('h3');
            const drinkImage = document.querySelector('img');
            const drinkList = document.querySelector('ul');
            const drinkInstructions = document.querySelector('p');

            // Push to DOM
            for (let i = 0; i <= amounts.length; i++) {
                if (ingredients[i] != null && amounts[i] != null) {
                    let newItem = document.createElement('li');
                    newItem.innerText = `${ingredients[i]} - ${amounts[i]}`;

                    drinkList.appendChild(newItem);
                } else if (ingredients[i] != null && amounts[i] == null) {
                    let newItem = document.createElement('li');
                    newItem.innerText = `${ingredients[i]}`;

                    drinkList.appendChild(newItem);
                }
            }

            drinkName.innerText = `${name}`;
            drinkType.innerText = `${type}`;
            drinkImage.src = `${photo}`;
            drinkImage.alt = `Image of ${drink}`;
            drinkInstructions.innerText = `${instructions}`;

            // Toggle Visibility: On
            const drinkBasics = document.querySelector('.basics');
            const drinkData = document.querySelector('.information');

            if (drinkBasics.classList.contains('hide') && drinkData.classList.contains('hide')) {
                drinkBasics.classList.remove('hide');
                drinkData.classList.remove('hide');
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
}

function clearDrink() {
    // Clear DOM ul
    const drinkList = document.querySelector('ul');
    drinkList.innerHTML = '';

    // Toggle Visibility: Off
    const drinkBasics = document.querySelector('.basics');
    const drinkData = document.querySelector('.information');

    if (!drinkBasics.classList.contains('hide') && !drinkData.classList.contains('hide')) {
        drinkBasics.classList.add('hide');
        drinkData.classList.add('hide');
    }
}