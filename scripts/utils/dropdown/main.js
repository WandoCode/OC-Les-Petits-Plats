import { handleDropdownArrow } from "./arrow.js";
import { handleDropdownInputs } from "./input.js";
import { handleTagSelectionInMenu } from "./tagSelection.js";
import { showFilteredDropdownList } from "./utils.js";

const initDropdowns = (recipes) => {
  /* Fill dropdown menus before the 1st search */
  showFilteredDropdownList(recipes, "ingredients", "");
  showFilteredDropdownList(recipes, "appliances", "");
  showFilteredDropdownList(recipes, "ustensils", "");

  /* Handle click on dropdown menu arrow */
  handleDropdownArrow();
  handleDropdownInputs(recipes);
  handleTagSelectionInMenu();
};

const updateDropdowns = (recipes) => {
  handleDropdownInputs(recipes);
  /* Fill dropdown menus before the 1st search */
  showFilteredDropdownList(recipes, "ingredients", "");
  showFilteredDropdownList(recipes, "appliances", "");
  showFilteredDropdownList(recipes, "ustensils", "");
};
export { initDropdowns, updateDropdowns };

//TODO: Fermer+reduire les listes dropdown quand on click en dehors du menu (ou dans un autre menu)
//TODO: Revoir le style des dropdown. Ajuster la scroll bar
