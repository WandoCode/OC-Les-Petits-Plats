import { handleDropdownArrow } from "./arrow.js";
import { handleDropdownInputs } from "./input.js";
import { handleTagSelectionInMenu } from "./tagSelection.js";

const initDropdowns = (recipes) => {
  /* Handle click on dropdown menu arrow */
  handleDropdownArrow();
  handleDropdownInputs(recipes);
  handleTagSelectionInMenu();
};

export { initDropdowns };

//TODO: Fermer+reduire les listes dropdown quand on click en dehors du menu (ou dans un autre menu)
//TODO: Revoir le style des dropdown. Ajuster la scroll bar
