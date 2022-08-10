import { toggleMenuOpening, showFilteredDropdownList } from "./utils.js";
const dropdownInputs = document.querySelectorAll(".dropdown-menu__input");

const handleDropdownInputs = (recipes) => {
  dropdownInputs.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      const menu = e.target.parentNode;
      const value = e.target.value;
      const menuIsOpen = menu.getAttribute("data-open");
      const menuIsExpanded = menu.classList.contains("dropdown-menu--expanded");
      /*  Handle the opening of the menu */
      if (!menuIsExpanded) {
        if (value.length >= 3 && menuIsOpen !== "true") {
          toggleMenuOpening(menu);
        }
        if (value.length < 3 && menuIsOpen === "true") {
          toggleMenuOpening(menu);
        }
      }
      /* Handle elements displayed in dropdown list */
      if (menuIsOpen) {
        const inputID = e.target.id;
        showFilteredDropdownList(recipes, inputID, value);
      }
    });
  });
};
// TODO: La limitation des 3 lettres est pour la recherche principale uniquement? Vérifier dans la documentation
//
export { handleDropdownInputs };
