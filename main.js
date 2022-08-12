import {
  initDropdowns,
  updateDropdown,
} from "./scripts/utils/dropdown/main.js";
import { recipes } from "./datas/recipes.js";
import { searchRecipesFactory } from "./scripts/factories/searchRecipes.js";
import { recipeFactory } from "./scripts/factories/recipes.js";

/* DOM nodes */
const searchInput = document.querySelector("#search");

/* Main search input listener */
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value.length < 3) return;
  //TODO: completer le if pour reinitialiser tout
  //=>Afficher le message de depart pour dire que aucun recette dispo
  //==>Reinitialiser les menu dropdown

  /* Collects all filters */
  //Collects tags
  const tagsDOMArray = Array.from(document.querySelectorAll(".tag__text"));
  const tagsArray = tagsDOMArray.map((tagDOM) => {
    return tagDOM.innerText;
  });

  // Collects main search input
  const unfilteredInputsArray = value.split(" ");
  const inputsArray = unfilteredInputsArray.filter((item) => {
    // "" could be present into the initial array. It's removed here
    return item.length > 0;
  });

  const filtersArray = [...tagsArray, ...inputsArray];

  //Make the search
  const searchModel = searchRecipesFactory(recipes);
  const foundRecipes = searchModel.filterRecipes(filtersArray);

  //Display recipes
  const recipesSection = document.querySelector(".recipes");
  recipesSection.innerHTML = "";
  foundRecipes.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.append(recipeCardDOM);
  });

  // Update dropdown menus
  updateDropdown(foundRecipes);
});

// Initialize dropdown menus with all the recipes
initDropdowns(recipes);
