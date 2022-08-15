/* Return arrays with ingredients present in the recipes */
/* 'recipes' is an array */
const dropdownsFactory = () => {
  let recipes = []
  let ingredientsArray = []
  let ustensilsArray = []
  let appliancesArray = []

  const setRecipes = (newRecipes) => {
    recipes = newRecipes
  }

  /* Fill tags arrays using recipes */
  const createTagsArray = () => {
    createIngredientsArray()
    createAppliancesArray()
    createUstensilsArray()
  }

  /* Create an array with ingredients present in the recipes */
  const createIngredientsArray = () => {
    const ingredientsSet = new Set()

    recipes.forEach((recipe) => {
      const ingredients = recipe.ingredients

      ingredients.forEach((ingredient) => {
        const item = ingredient.ingredient.toLowerCase()
        ingredientsSet.add(item)
        // Apply string filtering
      })
    })
    ingredientsArray = Array.from(ingredientsSet)
  }

  /* Create an array with appliances present in the recipes */
  const createAppliancesArray = () => {
    const appliancesSet = new Set()

    recipes.forEach((recipe) => {
      const item = recipe.appliance.toLowerCase()
      appliancesSet.add(item)
    })

    appliancesArray = Array.from(appliancesSet)
  }

  /* Create an array with ustensils present in the recipes */
  const createUstensilsArray = () => {
    const ustensilsSet = new Set()

    recipes.forEach((recipe) => {
      const ustensils = recipe.ustensils

      ustensils.forEach((ustensil) => {
        const item = ustensil.toLowerCase()
        ustensilsSet.add(item)
      })
    })

    ustensilsArray = Array.from(ustensilsSet)
  }

  /* Filter the given array of tag with a string */
  const getFilteredTags = (filterString, tagArray) => {
    const filteredTagsArray = tagArray.filter((item) => {
      return item.includes(filterString)
    })

    return filteredTagsArray
  }

  /* Return list of DOM element to fill dropdown menus. */
  const getDropdownListDOM = (type, filter) => {
    let elementsArray

    if (type === 'ingredients') elementsArray = ingredientsArray
    if (type === 'ustensils') elementsArray = ustensilsArray
    if (type === 'appliances') elementsArray = appliancesArray

    if (filter) elementsArray = getFilteredTags(filter, elementsArray)

    const elementsList = []

    elementsArray.forEach((item) => {
      const li = document.createElement('li')
      li.textContent = item
      elementsList.push(li)
    })

    return elementsList
  }

  return { getDropdownListDOM, createTagsArray, setRecipes }
}

export { dropdownsFactory }
