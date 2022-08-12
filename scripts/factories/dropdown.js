/* Return arrays with ingredients present in the recipes */
/* 'recipes' is an array */
const dropdownsFactory = (recipes) => {
  const getIngredientsArray = (filter) => {
    let ingredientsSet = new Set();

    recipes.forEach((recipe) => {
      const ingredients = recipe.ingredients;

      ingredients.forEach((ingredient) => {
        const item = ingredient.ingredient.toLowerCase();

        // Apply string filtering
        const addItem = filter ? item.includes(filter.toLowerCase()) : true;
        if (addItem) ingredientsSet.add(item);
      });
    });

    return Array.from(ingredientsSet);
  };

  /* Return arrays with appliances present in the recipes */
  const getAppliancesArray = (filter) => {
    let appliancesSet = new Set();

    recipes.forEach((recipe) => {
      const item = recipe.appliance.toLowerCase();
      // Apply string filtering
      const addItem = filter ? item.includes(filter.toLowerCase()) : true;
      if (addItem) appliancesSet.add(item);
    });

    return Array.from(appliancesSet);
  };

  /* Return arrays with ustensils present in the recipes */
  const getUstensilsArray = (filter) => {
    let ustensilsSet = new Set();

    recipes.forEach((recipe) => {
      const ustensils = recipe.ustensils;
      ustensils.forEach((ustensil) => {
        const item = ustensil.toLowerCase();
        // Apply string filtering
        const addItem = filter ? item.includes(filter.toLowerCase()) : true;
        if (addItem) ustensilsSet.add(item);
      });
    });

    return Array.from(ustensilsSet);
  };

  /* Return list element to fill dropdown menus. 
  'type': the focused menu
  'filter': optional, a string to increase filtering  */
  const getDropdownListDOM = (type, filter) => {
    let elementsArray;

    if (type === "ingredients") elementsArray = getIngredientsArray(filter);
    if (type === "ustensils") elementsArray = getUstensilsArray(filter);
    if (type === "appliances") elementsArray = getAppliancesArray(filter);

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
