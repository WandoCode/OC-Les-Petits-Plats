import { handleDropdownArrow } from "./arrow.js";
import { handleDropdownInputs } from "./input.js";
const initDropdowns = () => {
  /* Handle click on dropdown menu arrow */
  handleDropdownArrow();
  handleDropdownInputs();
};

export { initDropdowns };
