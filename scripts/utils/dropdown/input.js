import { toggleMenuOpening, showFilteredDropdownList } from "./utils.js";

/* DOM nodes */

const dropdownInputs = document.querySelectorAll(".dropdown-menu__input");

/* Functions */
/* Handle menus dropdown when user write in the input */
const handleDropdownInputs = (dropDownModel) => {
  dropdownInputs.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      const menu = e.target.parentNode;
      const value = e.target.value;
      const menuIsOpen = menu.getAttribute("data-open");
      const menuIsExpanded = menu.classList.contains("dropdown-menu--expanded");

      /*  Handle the opening of the menu */
      if (!menuIsExpanded) {
        handleOpening(menuIsOpen, menu);
      }
      /* Handle elements displayed in dropdown list */
      if (menuIsOpen) {
        const inputID = e.target.id;
        showFilteredDropdownList(dropDownModel, inputID, value);
      }
    });
  });
};

/*  Handle the opening of the menu */
const handleOpening = (menuIsOpen, menu) => {
  if (menuIsOpen !== "true") {
    toggleMenuOpening(menu);
  }
};

export { handleDropdownInputs };
