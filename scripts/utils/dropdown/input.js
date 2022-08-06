import { toggleMenuOpening } from "./utils.js";
const dropdownInputs = document.querySelectorAll(".dropdown-menu__input");

const handleDropdownInputs = () => {
  dropdownInputs.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      const menu = e.target.parentNode;
      const value = e.target.value;
      const menuIsOpen = menu.getAttribute("data-open");
      if (value.length >= 3 && menuIsOpen !== "true") {
        toggleMenuOpening(menu);
      }
      if (value.length < 3 && menuIsOpen === "true") {
        toggleMenuOpening(menu);
      }
    });
  });
};

export { handleDropdownInputs };
