const mealDetailsContent = document.querySelector('.meal-details-content');

// get recipe of the meal
function getMealRecipe() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${localStorage.mealItem}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
}

// create a modal
function mealRecipeModal(meal) {
    meal = meal[0];
    let html = `
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank" class="btn">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
}