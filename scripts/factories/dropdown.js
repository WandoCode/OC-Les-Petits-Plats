/* Return arrays with ingredients present in the recipes */
/* 'recipes' is an array */
const dropdownsFactory = (recipes) => {
  let ingredientsArray = [];
  let ustensilsArray = [];
  let appliancesArray = [];

  /* Fill tags arrays using recipes */
  const createTagsArray = () => {
    createIngredientsArray();
    createAppliancesArray();
    createUstensilsArray();
  };

  const createIngredientsArray = () => {
    let ingredientsSet = new Set();

    recipes.forEach((recipe) => {
      const ingredients = recipe.ingredients;

      ingredients.forEach((ingredient) => {
        const item = ingredient.ingredient.toLowerCase();
        ingredientsSet.add(item);
        // Apply string filtering
      });
    });
    ingredientsArray = Array.from(ingredientsSet);
  };

  /* Return arrays with appliances present in the recipes */
  const createAppliancesArray = () => {
    let appliancesSet = new Set();

    recipes.forEach((recipe) => {
      const item = recipe.appliance.toLowerCase();
      appliancesSet.add(item);
    });

    appliancesArray = Array.from(appliancesSet);
  };

  /* Return arrays with ustensils present in the recipes */
  const createUstensilsArray = () => {
    let ustensilsSet = new Set();

    recipes.forEach((recipe) => {
      const ustensils = recipe.ustensils;
      ustensils.forEach((ustensil) => {
        const item = ustensil.toLowerCase();
        ustensilsSet.add(item);
      });
    });

    ustensilsArray = Array.from(ustensilsSet);
  };

  /* Filter the given array of tag with a string */
  const getFilteredTags = (filterString, tagArray) => {
    const filteredTagsArray = tagArray.filter((item) => {
      return item.includes(filterString);
    });

    return filteredTagsArray;
  };

  /* Return list element to fill dropdown menus. 
  'type': the focused menu
  'filter': optional, a string to increase filtering  */
  const getDropdownListDOM = (type, filter) => {
    let elementsArray;

    if (type === "ingredients") elementsArray = ingredientsArray;

    if (type === "ustensils") elementsArray = ustensilsArray;
    if (type === "appliances") elementsArray = appliancesArray;

    if (filter) elementsArray = getFilteredTags(filter, elementsArray);

    const elementsList = [];

    elementsArray.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      elementsList.push(li);
    });

    return elementsList;
  };

  return { getDropdownListDOM, createTagsArray };
};

export { dropdownsFactory };
