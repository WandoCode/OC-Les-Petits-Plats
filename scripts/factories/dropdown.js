const dropdownsFactory = (recipes) => {
  /* recipes is an array */

  /* Return arrays with ingredients present in the recipes */
  const getIngredientsArray = () => {
    let ingredientsSet = new Set();
    recipes.forEach((recipe) => {
      const ingredients = recipe.ingredients;
      ingredients.forEach((ingredient) => {
        ingredientsSet.add(ingredient.ingredient.toLowerCase());
      });
    });
    return Array.from(ingredientsSet);
  };

  /* Return arrays with appliances present in the recipes */
  const getAppliancesArray = () => {
    let ingredientsSet = new Set();
    recipes.forEach((recipe) => {
      const ingredients = recipe.ingredients;
      ingredients.forEach((ingredient) => {
        ingredientsSet.add(ingredient.ingredient.toLowerCase());
      });
    });
    return Array.from(ingredientsSet);
  };

  /* Return arrays with ustensils present in the recipes */
  const getUstensilsArray = () => {
    let ustensilsSet = new Set();
    recipes.forEach((recipe) => {
      const ustensils = recipe.ustensils;
      ustensils.forEach((ustensil) => {
        ustensilsSet.add(ustensil.toLowerCase());
      });
    });
    return Array.from(ustensilsSet);
  };

  const getIngredientsDropdownDOM = () => {};

  return { getIngredientsArray, getUstensilsArray };
};

export { dropdownsFactory };
