const dropdownsArrows = document.querySelectorAll(".dropdown-menu__icon");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

/* Handle click on dropdown menu arrow */
const handleDropdownArrow = () => {
  dropdownsArrows.forEach((dropdownArrow) => {
    dropdownArrow.addEventListener("click", (e) => {
      const dropdownMenuClicked = e.target.parentNode;

      /* On click: open+expands menu or close+reduce menu */
      toggleMenuExpand(dropdownMenuClicked);
      toggleMenuOpening(dropdownMenuClicked);
    });
  });
};

/* Toggle expands of the menu */
const toggleMenuExpand = (menuToExpand) => {
  // Reduce all menu expect the one clicked
  dropdownMenus.forEach((menu) => {
    if (menu !== menuToExpand) menu.classList.remove("dropdown-menu--expanded");
  });

  menuToExpand.classList.toggle("dropdown-menu--expanded");
};

/* Toggle opening of the menu */
const toggleMenuOpening = (menu) => {
  const menuIsOpen = menu.getAttribute("data-open");
  if (menuIsOpen === "true") closeMenu(menu);
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

export { handleDropdownArrow };
