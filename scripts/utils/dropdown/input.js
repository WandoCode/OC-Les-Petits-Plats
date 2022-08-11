import { toggleMenuOpening, showFilteredDropdownList } from "./utils.js";

/* DOM nodes */

const dropdownInputs = document.querySelectorAll(".dropdown-menu__input");

/* Functions */
/* Handle menus dropdown when user write in the input */
const handleDropdownInputs = (recipes) => {
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
        showFilteredDropdownList(recipes, inputID, value);
        // recuperes les string dans le menu.
        // Filtre avec le code ci dessous
        //Genere le code
        // Apply string filtering
        const addItem = filter ? item.includes(filter.toLowerCase()) : true;
        if (addItem) ingredientsSet.add(item);
      }
      //TODO: Ici: récupréré les tags possibles dans la dropdows list (ce qui sont présents sans l'input du dropdown et les filtrer avec l'input du user. Pas besoin de repasser par la recherche complete dans l'ensemble des recettes avec juste la 'value' en plus comme filtre)
      // TODO: retirer le 3eme argument de showFilteredDropdownList qui sera inutile
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
