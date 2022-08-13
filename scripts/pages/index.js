import { recipeFactory } from '../factories/recipes.js'
import { updateDropdown } from '../utils/dropdown/main.js'
import { recipes } from '../../datas/recipes.js'
import { searchRecipesFactory } from '../factories/searchRecipes.js'

/* DOM nodes */
const searchInput = document.querySelector('#search')
const recipesSection = document.querySelector('.recipes')

/* Main search input listener */
const initSearch = () => {
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.trim()
    triggerSearch(value)
  })
}

/* Run a search with current values and tags */
const triggerSearch = (value) => {
  // Collects filters
  const tagsArray = collectsTagsFilter()
  const inputsArray = collectMainInputFilter(value)

  const filtersArray = [...tagsArray, ...inputsArray]

  if (filtersArray.length === 0) {
    setEmptyResults()
    return
  }

  // Process the search
  const searchModel = searchRecipesFactory(recipes)
  const foundRecipes = searchModel.filterRecipes(filtersArray)

  if (foundRecipes.length === 0) {
    setEmptyResults()
    return
  }

  // Display recipes
  displayRecipes(foundRecipes)

  // Update dropdown menus
  updateDropdown(foundRecipes)
}

/* Return an array with selected tags */
const collectsTagsFilter = () => {
  const allTagText = document.querySelectorAll('.tag__text')
  const tagsDOMArray = Array.from(allTagText)

  const tagsArray = tagsDOMArray.map((tagDOM) => {
    return tagDOM.innerText
  })

  return tagsArray
}

/* Return an array with words from main search input field */
const collectMainInputFilter = (value) => {
  let inputsArray = []
  if (value.length >= 3) {
    const unfilteredInputsArray = value.split(' ')

    inputsArray = unfilteredInputsArray.filter((item) => {
      // "" could be present into the initial array. It's removed here
      return item.length > 0
    })
  }

  return inputsArray
}

/* Display the given recipes at screen */
const displayRecipes = (recipesToDisplay) => {
  recipesSection.innerHTML = ''
  recipesToDisplay.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe)

    const recipeCardDOM = recipeModel.getRecipeCardDOM()

    recipesSection.append(recipeCardDOM)
  })
}

/* Display a message on screen to tell that no recipe has been found */
const showNoRecipesFound = () => {
  const h2 = document.createElement('h2')
  h2.textContent =
    'Pas de recettes correspondant à votre recherche! Essayer de taper "tarte" ou "oeuf"'

  recipesSection.innerHTML = ''
  recipesSection.append(h2)
}

const setEmptyResults = () => {
  showNoRecipesFound()
  updateDropdown(recipes)
}
export { initSearch, triggerSearch }
