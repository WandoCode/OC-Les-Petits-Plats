import { toggleMenuOpening } from "./utils.js";

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

export { handleDropdownArrow };
