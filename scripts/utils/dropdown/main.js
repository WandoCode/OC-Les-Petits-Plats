import { handleDropdownArrow } from "./arrow.js";
import { handleDropdownInputs } from "./input.js";
import { handleTagSelectionInMenu } from "./tagSelection.js";
import { showAllFilteredDropdownLists } from "./utils.js";
import { dropdownsFactory } from "../../factories/dropdown.js";

/* Functions */
/* Initialize dropdown menus logic */
const initDropdowns = (recipes, triggerSearchFct) => {
  // Arrow click handler
  handleDropdownArrow();

  // Dropdown menu content click handler
  handleTagSelectionInMenu(triggerSearchFct);

  // Create the model for dropdown content with the given recipes
  const dropdownModel = dropdownsFactory(recipes);
  dropdownModel.createTagsArray();

  // Add content to dropdown menus
  showAllFilteredDropdownLists(dropdownModel);

  // Dropdown menus input handler
  handleDropdownInputs(dropdownModel);
};

/* Handle the change of recipes */
const updateDropdown = (recipes) => {
  // Create the model for dropdown content with the given recipes
  const dropdownModel = dropdownsFactory(recipes);
  dropdownModel.createTagsArray();

  // Add content to dropdown menus
  showAllFilteredDropdownLists(dropdownModel);

  // Dropdown menus input handler
  handleDropdownInputs(dropdownModel);

  //TODO: Reset la valeur de l'input dans le dropdown
};
export { initDropdowns, updateDropdown };

//TODO: Fermer+reduire les listes dropdown quand on click en dehors du menu (ou dans un autre menu)
//TODO: Revoir le style des dropdown. Ajuster la scroll bar
