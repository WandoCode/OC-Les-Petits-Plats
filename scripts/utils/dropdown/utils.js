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

export { toggleMenuOpening };
