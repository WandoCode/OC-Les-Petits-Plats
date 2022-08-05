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
    let appliancesSet = new Set();
    recipes.forEach((recipe) => {
      const appliance = recipe.appliance;
      appliancesSet.add(appliance.toLowerCase());
    });

    return Array.from(appliancesSet);
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

  /* Return list element to fill dropdown menus. 'type' give the menu focused */
  const getDropdownListDOM = (type) => {
    let ElementsArray;

    if (type === "ingredients") ElementsArray = getIngredientsArray();
    if (type === "ustensils") ElementsArray = getUstensilsArray();
    if (type === "appliances") ElementsArray = getAppliancesArray();

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
//TODO: Mettre ce fichier dans /utils??
