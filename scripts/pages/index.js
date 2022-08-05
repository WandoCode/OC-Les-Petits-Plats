import { recipeFactory } from "../factories/recipes.js";

const initSearchPage = (recipes) => {
  displayRecipesCards(recipes);
};

const displayRecipesCards = (recipes) => {
  const recipesSection = document.querySelector(".recipes");

  recipes.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCard = recipeModel.getRecipeCardDOM();
    recipesSection.append(recipeCard);
  });
};

export { initSearchPage };
