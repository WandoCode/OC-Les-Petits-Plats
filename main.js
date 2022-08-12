import {
  initDropdowns,
  updateDropdown,
} from "./scripts/utils/dropdown/main.js";
import { recipes } from "./datas/recipes.js";
import { searchRecipesFactory } from "./scripts/factories/searchRecipes.js";
import { recipeFactory } from "./scripts/factories/recipes.js";

/* DOM nodes */
const searchInput = document.querySelector("#search");
const recipesSection = document.querySelector(".recipes");

/* Main search input listener */
const initSearch = () => {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    triggerSearch(value);
  });
};

const triggerSearch = (value) => {
  if (value.length === 0) {
    setEmptyResults();
  }
  if (value.length < 3) return;
  console.log(value);
  /* Collects all filters */
  //Collects tags
  const allTagText = document.querySelectorAll(".tag__text");
  const tagsDOMArray = Array.from(allTagText);
  const tagsArray = tagsDOMArray.map((tagDOM) => {
    return tagDOM.innerText;
  });
  console.log(tagsArray);
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

  if (foundRecipes.length === 0) {
    setEmptyResults();
    return;
  }

  //Display recipes
  recipesSection.innerHTML = "";
  foundRecipes.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.append(recipeCardDOM);
  });

  // Update dropdown menus
  updateDropdown(foundRecipes);
};

/* Trigger a search when a tag is added */

/* TODO: Trigger a search when a tag is removed */

/* Display a message on screen to tell that no recipe has been found */
const showNoRecipesFound = () => {
  const h2 = document.createElement("h2");
  h2.textContent =
    'Pas de recettes correspondant à votre recherche! Essayer de taper "tarte" ou "oeuf"';

  recipesSection.innerHTML = "";
  recipesSection.append(h2);
};

const setEmptyResults = () => {
  showNoRecipesFound();
  updateDropdown(recipes);
};
// Initialize dropdown menus with all the recipes
initDropdowns(recipes, triggerSearch);

// Initialize search logic
initSearch();
