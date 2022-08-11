/* Return arrays with ingredients present in the recipes */
/* 'recipes' is an array */
const dropdownsFactory = (recipes) => {
  const getIngredientsArray = () => {
    let ingredientsSet = new Set();

    recipes.forEach((recipe) => {
      const ingredients = recipe.ingredients;

      ingredients.forEach((ingredient) => {
        const item = ingredient.ingredient.toLowerCase();
        ingredientsSet.add(item);
      });
    });

    return Array.from(ingredientsSet);
  };

  /* Return arrays with appliances present in the recipes */
  const getAppliancesArray = () => {
    let appliancesSet = new Set();

    recipes.forEach((recipe) => {
      const item = recipe.appliance.toLowerCase();
      appliancesSet.add(item);
    });

    return Array.from(appliancesSet);
  };

  /* Return arrays with ustensils present in the recipes */
  const getUstensilsArray = () => {
    let ustensilsSet = new Set();

    recipes.forEach((recipe) => {
      const ustensils = recipe.ustensils;
      ustensils.forEach((ustensil) => {
        const item = ustensil.toLowerCase();
        ustensilsSet.add(item);
      });
    });

    return Array.from(ustensilsSet);
  };

  /* Return list element to fill dropdown menus. 
  'type': the focused menu
  'filter': optional, a string to increase filtering  */
  const getDropdownListDOM = (type) => {
    let elementsArray;

    if (type === "ingredients") elementsArray = getIngredientsArray();
    if (type === "ustensils") elementsArray = getUstensilsArray();
    if (type === "appliances") elementsArray = getAppliancesArray();

    const elementsList = [];

    elementsArray.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      elementsList.push(li);
    });

    return elementsList;
  };

  return { getDropdownListDOM };
};

export { dropdownsFactory };
