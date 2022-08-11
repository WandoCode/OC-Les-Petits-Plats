import { handleDropdownArrow } from "./arrow.js";
import { handleDropdownInputs } from "./input.js";
import { handleTagSelectionInMenu } from "./tagSelection.js";
import { showAllFilteredDropdownLists } from "./utils.js";

/* Functions */
/* Initialize dropdown menus logic */
const initDropdowns = (recipes) => {
  /* Fill dropdown menus before the 1st search */
  showAllFilteredDropdownLists(recipes);

  /* Handle click on dropdown menu arrow */
  handleDropdownArrow();
  handleDropdownInputs(recipes);
  handleTagSelectionInMenu();
};

const updateDropdowns = (recipes) => {
  handleDropdownInputs(recipes);
  /* Fill dropdown menus with the given recipes */
  showAllFilteredDropdownLists(recipes);
};
export { initDropdowns, updateDropdowns };

//TODO: Fermer+reduire les listes dropdown quand on click en dehors du menu (ou dans un autre menu)
//TODO: Revoir le style des dropdown. Ajuster la scroll bar
