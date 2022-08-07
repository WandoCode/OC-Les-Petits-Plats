import { dropdownsFactory } from "./scripts/factories/dropdown.js";
import { initDropdowns } from "./scripts/utils/dropdown/main.js";
import { recipes } from "./datas/recipes.js";
/* TEST */

const dropdownModel = dropdownsFactory(recipes);
const ingredientsList = dropdownModel.getDropdownListDOM("ingredients", "");
const ustensilsList = dropdownModel.getDropdownListDOM("ustensils", "");
const appliancesList = dropdownModel.getDropdownListDOM("appliances", "");

const ingredientsMenu = document.getElementById("ingredient-menu");
const ustensilsMenu = document.getElementById("ustensil-menu");
const appliancesMenu = document.getElementById("appareil-menu");
ingredientsMenu.append(...ingredientsList);
ustensilsMenu.append(...ustensilsList);
appliancesMenu.append(...appliancesList);

initDropdowns(recipes);
/* FIN TEST */
