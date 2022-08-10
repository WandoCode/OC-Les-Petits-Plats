const searchFactory = (recipes) => {
  /* Return an array of lower case string with all ingredient in the given recipe */
  const getRecipeIngredientArray = (recipe) => {
    const recipeIngredients = recipe.ingredients;
    const ingredientsArray = [];
    for (let i = 0, n = recipeIngredients.length; i < n; i++) {
      const ingredient = recipeIngredients[i].ingredient;
      ingredientsArray.push(ingredient.toLowerCase());
    }
    return ingredientsArray;
  };

  /* Generate an array of lowercase strings from title, description and ingredients recipe fields */
  const getSearchItemsArray = (recipe) => {
    const title = recipe.name.toLowerCase();
    const ingredients = getRecipeIngredientArray(recipe);
    const description = recipe.description.toLowerCase();

    return [title, ...ingredients, description];
  };

  /* Return the array with every items in lower case */
  const formatArrayToLowerCase = (dataArray) => {
    const formatedArray = [];
    for (let i = 0, n = dataArray.length; i < n; i++) {
      const item = dataArray[i];
      formatedArray.push(item.toLowerCase());
    }
    return formatedArray;
  };

  /* Return an array of recipes. Each recipe have all the filters found in it  */
  const filterRecipes = (filtersArray) => {
    const foundRecipes = [];
    const formatedFiltersArray = formatArrayToLowerCase(filtersArray);
    // Parcours les recettes une a une
    for (let i = 0, n = recipes.length; i < n; i++) {
      const recipe = recipes[i];
      //Construit un tableau de valeurs dans lesquels chercher les filtres
      const searchArray = getSearchItemsArray(recipe);

      // Tableaux des filtres restant à trouver dans la recette pour l'ajouter aux recettes filtrées
      const leftFilters = [...formatedFiltersArray];
      // Pour chaque valeur du tableau search, verifie si un filtre s'y trouve
      for (let j = 0, q = searchArray.length; j < q; j++) {
        const item = searchArray[j];
        // Compare chaque element de filterArray avec l'item
        // S'il le contient, le filtre est retirer du tableau
        for (let k = 0; k < formatedFiltersArray.length; k++) {
          const filter = formatedFiltersArray[k];
          if (item.includes(filter)) {
            leftFilters.splice(k, 1);
          }
        }
        if (leftFilters.length === 0) {
          foundRecipes.push(recipe);
          break;
        }
      }
    }
    return foundRecipes;
  };

  return { filterRecipes };
};

export { searchFactory };
//TODO: refactor
