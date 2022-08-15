import { formatArrayToLowerCase, getRecipeIngredientArray } from '../utils/factories/array.js'

/* Handle recipes search logique */
const tagSearchFactory = (recipes) => {
  let lastFoundRecipes = [...recipes]

  /* Generate an array of lowercase strings from usentsils, ingredients and appliance recipe fields */
  const getSearchItemsArray = (recipe) => {
    const usentsils = [...recipe.ustensils]
    const ingredients = getRecipeIngredientArray(recipe)
    const appliance = recipe.appliance

    return formatArrayToLowerCase([...usentsils, ...ingredients, appliance])
  }

  /* Return an array of filtered recipes. */
  const filterRecipes = (filtersArray) => {
    const foundRecipes = []

    // Prepare filters
    const formatedFiltersArray = formatArrayToLowerCase(filtersArray)

    // Iterate throught every recipes
    for (let i = 0, n = lastFoundRecipes.length; i < n; i++) {
      const recipe = lastFoundRecipes[i]

      // Build an array with all the elements to compare with filters
      const searchArray = getSearchItemsArray(recipe)

      // Array of filter not yet found in the current recipe
      const leftFilters = [...formatedFiltersArray]

      // Look into the search array if every filter is present
      for (let j = 0, q = searchArray.length; j < q; j++) {
        const item = searchArray[j]
        // For the current search element, look if the filter is present
        for (let k = 0; k < formatedFiltersArray.length; k++) {
          const filter = formatedFiltersArray[k]
          if (item.includes(filter)) {
            const itemIndexInLeftFilters = leftFilters.findIndex((el) => {
              return el === filter
            })

            // If filter present: removes it from the array of filter for the current recipe
            if (itemIndexInLeftFilters !== -1) {
              leftFilters.splice(itemIndexInLeftFilters, 1)

              // When all filter has been found in the current recipe, keep it and go to the next filter (and the next recipe)
              if (leftFilters.length === 0) {
                foundRecipes.push(recipe)
                break
              }
            }
          }
        }
        // All filters has been found in the current recipe, got to the next one
        if (leftFilters.length === 0) {
          break
        }
      }
    }

    // Keep found recipes in memory
    lastFoundRecipes = [...foundRecipes]

    return lastFoundRecipes
  }

  return { filterRecipes }
}

export { tagSearchFactory }
// TODO: (mentor): OK de chercher dans les 3 champs pour chaque tag? Ou bien il faut chercher le tag dans son champ respectif uniquement?
