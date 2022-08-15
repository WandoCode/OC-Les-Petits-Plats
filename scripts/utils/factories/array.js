/* Return the array with every items in lower case */
const formatArrayToLowerCase = (dataArray) => {
  const formatedArray = []
  for (let i = 0, n = dataArray.length; i < n; i++) {
    const item = dataArray[i]
    formatedArray.push(item.toLowerCase())
  }
  return formatedArray
}

/* Return an array of lower case string with all ingredients in the given recipe */
const getRecipeIngredientArray = (recipe) => {
  const recipeIngredients = recipe.ingredients
  const ingredientsArray = []
  for (let i = 0, n = recipeIngredients.length; i < n; i++) {
    const ingredient = recipeIngredients[i].ingredient
    ingredientsArray.push(ingredient)
  }
  return ingredientsArray
}

export { formatArrayToLowerCase, getRecipeIngredientArray }
