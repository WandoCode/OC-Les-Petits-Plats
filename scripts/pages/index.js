import { recipeFactory } from '../factories/recipes.js'
import { updateDropdown } from '../utils/dropdown/main.js'
import { recipes } from '../../datas/recipes.js'
import { mainSearchFactory } from '../factories/mainSearch.js'
import { tagSearchFactory } from '../factories/tagSearch.js'

const message = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.'

/* DOM nodes */
const searchInput = document.querySelector('#search')
const recipesSection = document.querySelector('.recipes')

/* Main search listener */
const initSearch = (dropdownModel) => {
  showNoRecipeFound(message)

  searchInput.addEventListener('input', (e) => {
    const inputValue = e.target.value.trim()
    triggerSearch(inputValue, dropdownModel)
  })
}

/* Run a search with current input values and tags */
const triggerSearch = (inputValue, dropdownModel) => {
  const tagsArray = collectsTags()
  const inputsArray = collectMainInput(inputValue)
  const foundRecipes = searchRecipes(inputsArray, tagsArray)

  updateScreen(foundRecipes, dropdownModel)
}

const searchRecipes = (inputsArray, tagsArray) => {
  let foundRecipes = []

  if (inputsArray.length === 0) {
    // Search by tag only
    if (tagsArray.length !== 0) {
      foundRecipes = searchByTag(recipes, tagsArray)
    }
  }

  if (inputsArray.length > 0) {
    foundRecipes = searchByInput(recipes, inputsArray)
  }

  if (tagsArray.length > 0) {
    const recipesCopy = [...foundRecipes]
    foundRecipes = searchByTag(recipesCopy, tagsArray)
  }

  return foundRecipes
}

/* Return an array with tags selected */
const collectsTags = () => {
  const allTagText = document.querySelectorAll('.tag__text')
  const tagsDOMArray = Array.from(allTagText)

  const tagsArray = tagsDOMArray.map((tagDOM) => {
    return tagDOM.innerText
  })

  return tagsArray
}

/* Return an array with words from main search input field */
const collectMainInput = (value) => {
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

/* Return an array of filtered recipes by the given array */
const searchByTag = (recipesToFilter, tagsArray) => {
  const tagSearchModel = tagSearchFactory(recipesToFilter)
  return tagSearchModel.getFilteredRecipes(tagsArray)
}

/* Return an array of filtered recipes by the given array */
const searchByInput = (recipesToFilter, inputsArray) => {
  const searchModel = mainSearchFactory(recipesToFilter)
  return searchModel.getFilteredRecipes(inputsArray)
}

/* Update element on scrren linked with recipes */
const updateScreen = (foundRecipes, dropdownModel) => {
  recipesSection.innerHTML = ''
  if (foundRecipes.length === 0) {
    showNoRecipeFound(message)
    updateDropdown(dropdownModel, recipes) // TODO (mentor). Ok de montrer les tags de l'ensembles des recettes dispo si aucune recette trouvée?
    return
  }

  displayRecipes(foundRecipes)
  updateDropdown(dropdownModel, foundRecipes)
}

/* Display the given recipes on screen */
const displayRecipes = (recipesToDisplay) => {
  recipesToDisplay.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe)

    const recipeCardDOM = recipeModel.getRecipeCardDOM()

    recipesSection.append(recipeCardDOM)
  })
}

/* Display a message on screen to tell that no recipe has been found */
const showNoRecipeFound = (message) => {
  const h2 = document.createElement('h2')
  h2.textContent = message

  recipesSection.append(h2)
}

export { initSearch, triggerSearch }
