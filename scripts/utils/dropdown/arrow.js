import { toggleMenuOpening, toggleMenuExpand } from "./utils.js";

/* DOM nodes */
const dropdownsArrows = document.querySelectorAll(".dropdown-menu__icon");

/* Functions */
/* Handle click on dropdown menu arrow */
const handleDropdownArrow = () => {
  dropdownsArrows.forEach((dropdownArrow) => {
    arrowClicksHandler(dropdownArrow);
  });
};

/* Listen clicks on a given dropdown arrow  */
const arrowClicksHandler = (dropdownArrow) => {
  dropdownArrow.addEventListener("click", (e) => {
    const dropdownMenuClicked = e.target.parentNode;

    // On click: open+expands menu or close+reduce menu
    toggleMenuExpand(dropdownMenuClicked);
    toggleMenuOpening(dropdownMenuClicked);
  });
};

export { handleDropdownArrow };
