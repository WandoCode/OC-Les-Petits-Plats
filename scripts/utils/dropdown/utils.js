import { dropdownsFactory } from "../../factories/dropdown.js";

const dropdownMenus = document.querySelectorAll(".dropdown-menu");

/* Toggle opening of the menu */
const toggleMenuOpening = (menu) => {
  const menuIsOpen = menu.getAttribute("data-open");
  const menuIsExpanded = menu.classList.contains("dropdown-menu--expanded");
  if (menuIsExpanded) openMenu(menu); // Expanded menu is always open
  else if (menuIsOpen === "true") closeMenu(menu);
  else openMenu(menu);
};

/* Make the given menu the only one opened */
const openMenu = (menuToOpen) => {
  dropdownMenus.forEach((menu) => {
    if (menu === menuToOpen) menu.setAttribute("data-open", "true");
    else closeMenu(menu);
  });
};

/* Close the given menu */
const closeMenu = (menuToClose) => {
  menuToClose.setAttribute("data-open", "false");
};

/* Toggle expands of the menu */
const toggleMenuExpand = (menuToExpand) => {
  // Reduce all menu expect the one clicked
  dropdownMenus.forEach((menu) => {
    if (menu !== menuToExpand) menu.classList.remove("dropdown-menu--expanded");
  });

  menuToExpand.classList.toggle("dropdown-menu--expanded");
};

/* Show items in the given dropdown list and filtered */
const showFilteredDropdownList = (recipes, type, filter) => {
  const dropdownModel = dropdownsFactory(recipes);
  const elementsList = dropdownModel.getDropdownListDOM(type, filter);

  const elementsMenuChoices = {
    ingredients: document.getElementById("ingredient-menu"),
    ustensils: document.getElementById("ustensil-menu"),
    appliances: document.getElementById("appareil-menu"),
  };

  const elementsMenu = elementsMenuChoices[type];
  elementsMenu.innerHTML = "";
  elementsMenu.append(...elementsList);
};

/* Show dropdowns for each existing menus */
const showAllFilteredDropdownLists = (recipes) => {
  showFilteredDropdownList(recipes, "ingredients", "");
  showFilteredDropdownList(recipes, "appliances", "");
  showFilteredDropdownList(recipes, "ustensils", "");
};

export {
  toggleMenuOpening,
  toggleMenuExpand,
  showFilteredDropdownList,
  showAllFilteredDropdownLists,
};
