import { handleDropdownArrow } from "./arrow.js";
import { handleDropdownInputs } from "./input.js";
const initDropdowns = (recipes) => {
  /* Handle click on dropdown menu arrow */
  handleDropdownArrow();
  handleDropdownInputs(recipes);
};

export { initDropdowns };
