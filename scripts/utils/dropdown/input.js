import { toggleMenuOpening } from "./utils.js";
import { dropdownsFactory } from "../../factories/dropdown.js";
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
        const dropdownModel = dropdownsFactory(recipes);
        const ingredientsList = dropdownModel.getDropdownListDOM(
          "ingredients",
          value
        );
        const ustensilsList = dropdownModel.getDropdownListDOM(
          "ustensils",
          value
        );
        const appliancesList = dropdownModel.getDropdownListDOM(
          "appliances",
          value
        );

        const ingredientsMenu = document.getElementById("ingredient-menu");
        const ustensilsMenu = document.getElementById("ustensil-menu");
        const appliancesMenu = document.getElementById("appareil-menu");

        ingredientsMenu.innerHTML = "";
        ingredientsMenu.append(...ingredientsList);

        ustensilsMenu.innerHTML = "";
        ustensilsMenu.append(...ustensilsList);

        appliancesMenu.innerHTML = "";
        appliancesMenu.append(...appliancesList);
      }
    });
  });
};

export { handleDropdownInputs };
