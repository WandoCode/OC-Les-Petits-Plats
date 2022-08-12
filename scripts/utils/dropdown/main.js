import { handleDropdownArrow } from "./arrow.js";
import { handleDropdownInputs } from "./input.js";
import { handleTagSelectionInMenu } from "./tagSelection.js";
import { showAllFilteredDropdownLists } from "./utils.js";
import { dropdownsFactory } from "../../../script2/factory/dropdown.js";
/* Functions */
/* Initialize dropdown menus logic */
const initDropdowns = (recipes) => {
  const dropdownModel = dropdownsFactory(recipes);
  dropdownModel.createTagsArray();

  // Add tags to dropdown
  showAllFilteredDropdownLists(dropdownModel);

  handleDropdownInputs(dropdownModel);
  handleTagSelectionInMenu();
  handleDropdownArrow();
};

const updateDropdown = (recipes) => {
  const dropdownModel = dropdownsFactory(recipes);
  dropdownModel.createTagsArray();

  // Add tags to dropdown
  showAllFilteredDropdownLists(dropdownModel);

  handleDropdownInputs(dropdownModel);

  //TODO: Reset la valeur de l'input dans le dropdown
};
export { initDropdowns, updateDropdown };

//TODO: Fermer+reduire les listes dropdown quand on click en dehors du menu (ou dans un autre menu)
//TODO: Revoir le style des dropdown. Ajuster la scroll bar
