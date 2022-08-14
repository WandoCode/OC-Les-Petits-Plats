import { handleDropdownArrow } from './arrow.js'
import { handleDropdownInputs, emptiesAllDropdownsInput } from './input.js'
import { handleTagSelectionInMenu } from './tagSelection.js'
import {
  showAllFilteredDropdownLists,
  toggleMenuExpand,
  closeAllMenu
} from './utils.js'
import { dropdownsFactory } from '../../factories/dropdown.js'

const body = document.querySelector('body')

/* Functions */
/* Initialize dropdown menus logic */
const initDropdowns = (recipes, triggerSearchFct) => {
  // Arrow click handler
  handleDropdownArrow()

  // Dropdown menu content click handler
  handleTagSelectionInMenu(triggerSearchFct)

  // Create the model for dropdown content with the given recipes
  const dropdownModel = dropdownsFactory(recipes)
  dropdownModel.createTagsArray()

  // Add content to dropdown menus
  showAllFilteredDropdownLists(dropdownModel)

  // Dropdown menus input handler
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
      // Close all the menus
      toggleMenuExpand()
      closeAllMenu()

      // Remove dropdown input value
      emptiesAllDropdownsInput()
    }
  })
}

/* Handle the change of recipes */
const updateDropdown = (recipes) => {
  // Create the model for dropdown content with the given recipes
  const dropdownModel = dropdownsFactory(recipes)
  dropdownModel.createTagsArray()

  // Add content to dropdown menus
  showAllFilteredDropdownLists(dropdownModel)
}
export { initDropdowns, updateDropdown }

// TODO: Revoir le style des dropdown. Ajuster la scroll bar
