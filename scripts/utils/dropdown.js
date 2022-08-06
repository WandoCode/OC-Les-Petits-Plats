/* Ajouter les event click/input change, etc. pour les menus dropdown */
const dropdownsArrows = document.querySelectorAll(".dropdown-menu__icon");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

const initDropdowns = () => {
  /* Expand dropdown menu when arrow is clicked */
  dropdownsArrows.forEach((dropdownArrow) => {
    dropdownArrow.addEventListener("click", (e) => {
      const dropdownMenuClicked = e.target.parentNode;

      // reduce all menu expect the one clicked
      dropdownMenus.forEach((menu) => {
        if (menu !== dropdownMenuClicked)
          menu.classList.remove("dropdown-menu--expanded");
      });

      // Expands/reduce the menu clicked
      dropdownMenuClicked.classList.toggle("dropdown-menu--expanded");

      toggleMenu(dropdownMenuClicked);
    });
  });
};

const toggleMenu = (menu) => {
  const menuIsOpen = menu.getAttribute("data-open");
  console.log(menuIsOpen);
  if (menuIsOpen === "true") closeMenu(menu);
  else openMenu(menu);
};

const openMenu = (menuToOpen) => {
  dropdownMenus.forEach((menu) => {
    if (menu === menuToOpen) menu.setAttribute("data-open", "true");
    else closeMenu(menu);
  });
};

const closeMenu = (menuToClose) => {
  menuToClose.setAttribute("data-open", "false");
};
export { initDropdowns };
