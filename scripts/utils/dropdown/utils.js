/* DOM nodes */
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

/* Toggle opening of the menu */
const toggleMenuOpening = (menu) => {
  const menuIsOpen = menu.getAttribute("data-open");
  const menuIsExpanded = menu.classList.contains("dropdown-menu--expanded");

  if (menuIsExpanded) openMenu(menu); // Expanded menu is always open
  else if (menuIsOpen === "true") closeMenu(menu);
  else openMenu(menu);
};

/* Close all menus */
const closeAllMenu = () => {
  dropdownMenus.forEach((menu) => {
    closeMenu(menu);
  });
};
/* Makes the given menu the only one opened */
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

  if (menuToExpand) menuToExpand.classList.toggle("dropdown-menu--expanded");
};

/* Show items in the given dropdown menu */
const showFilteredDropdownList = (dropdownModel, type, filter) => {
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

/* Shows dropdowns for each existing menus */
const showAllFilteredDropdownLists = (dropdownModel) => {
  showFilteredDropdownList(dropdownModel, "ingredients", "");
  showFilteredDropdownList(dropdownModel, "appliances", "");
  showFilteredDropdownList(dropdownModel, "ustensils", "");
};

export {
  toggleMenuOpening,
  toggleMenuExpand,
  showFilteredDropdownList,
  showAllFilteredDropdownLists,
  closeAllMenu,
};
