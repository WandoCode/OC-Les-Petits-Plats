import { recipeFactory } from "../factories/recipes.js";

/* Launch search page */
const initSearchPage = (recipes) => {
  displayRecipesCards(recipes);
};

/* Add all the given recipes in search page */
const displayRecipesCards = (recipes) => {
  const recipesSection = document.querySelector(".recipes");

  recipes.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.getRecipeCardDOM();
    recipesSection.append(recipeCard);
  });
};

export { initSearchPage };
