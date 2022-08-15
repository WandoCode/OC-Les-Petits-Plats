import { handleDropdownArrow } from './arrow.js'
import { handleDropdownInputs, emptiesAllDropdownsInput } from './input.js'
import { handleTagSelectionInMenu } from './tagSelection.js'
import {
  addItemsToAllDropdownMenus,
  toggleMenuExpand,
  closeAllMenu
} from './utils.js'

/* DOM nodes */
const body = document.querySelector('body')

/* Functions */
/* Initialize dropdown menus logic */
const initDropdowns = (dropdownModel, triggerSearchFct) => {
  handleDropdownArrow()

  // Dropdown menu content click handler
  handleTagSelectionInMenu(dropdownModel, triggerSearchFct)

  addItemsToAllDropdownMenus(dropdownModel)

  handleDropdownInputs(dropdownModel)

  // Close menu when user clicks outside of a menu
  body.addEventListener('click', (e) => {
    if (
      e.target.tagName !== 'LI' &&
      !e.target.classList.contains('dropdown-menus') &&
      !e.target.classList.contains('dropdown-menu') &&
      !e.target.classList.contains('dropdown-menu__input') &&
      !e.target.classList.contains('dropdown-menu__menu') &&
      !e.target.classList.contains('dropdown-menu__icon') &&
      !e.target.classList.contains('item-container')
    ) {
      toggleMenuExpand()
      closeAllMenu()
      emptiesAllDropdownsInput()
    }
  })
}

/* Handle the change of recipes */
const updateDropdown = (dropdownModel, newRecipes) => {
  // Update dropdown model whith the new recipes
  dropdownModel.setRecipes(newRecipes)
  dropdownModel.createTagsArray()

  // Update the dropdown lists diplsayed on screen
  addItemsToAllDropdownMenus(dropdownModel)
}
export { initDropdowns, updateDropdown }
