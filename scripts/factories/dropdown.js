const dropdownsFactory = (recipes) => {
  /* recipes is an array */

  /* Return arrays with ingredients present in the recipes */
  const getIngredientsArray = (filter) => {
    let ingredientsSet = new Set();
    recipes.forEach((recipe) => {
      const ingredients = recipe.ingredients;
      ingredients.forEach((ingredient) => {
        const item = ingredient.ingredient.toLowerCase();
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
        const addItem = filter ? item.includes(filter.toLowerCase()) : true;
        if (addItem) ustensilsSet.add(item);
      });
    });
    return Array.from(ustensilsSet);
  };

  /* Return list element to fill dropdown menus. 'type' give the focused menu  */
  const getDropdownListDOM = (type, filter) => {
    //TODO: ajouter un autre argument pour filtrer encore plus en fct des caractères entré dans le input (à répercuter dans les fct get****array())
    let ElementsArray;

    if (type === "ingredients") ElementsArray = getIngredientsArray(filter);
    if (type === "ustensils") ElementsArray = getUstensilsArray(filter);
    if (type === "appliances") ElementsArray = getAppliancesArray(filter);

    const elementsList = [];

    ElementsArray.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      elementsList.push(li);
    });

    return elementsList;
  };

  return { getDropdownListDOM };
};

export { dropdownsFactory };
