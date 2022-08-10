const searchFactory = (recipes) => {
  /* Return an array of lower case string with all ingredient in the given recipe */
  const getRecipeIngredientArray = (recipe) => {
    return recipe.ingredients.map((item) => {
      return item.ingredient.toLowerCase();
    });
  };

  /* Generate an array of lowercase strings from title, description and ingredients recipe fields */
  const getSearchItemsArray = (recipe) => {
    const title = recipe.name.toLowerCase();
    const ingredients = getRecipeIngredientArray(recipe);
    const description = recipe.description.toLowerCase();

    return [title, ...ingredients, description];
  };

  /* Return the array with ever items in lower case */
  const formatArrayToLowerCase = (dataArray) => {
    return dataArray.map((item) => {
      return item.toLowerCase();
    });
  };

  const getFiltersNotFoundInSearchArray = (filtersArray, searchArray) => {
    let filters = [...filtersArray];
    searchArray.forEach((item) => {
      // If a filter is found, it disappear from filters to find
      const newFiltersArray = filters.filter((filterString) => {
        return !item.includes(filterString);
      });
      filters = [...newFiltersArray];
    });
    return filters;
  };

  /* Return an array of recipes. Each recipe have all the filter found in it  */
  const filterRecipes = (filtersArray) => {
    const foundRecipes = recipes.filter(
      // keep recipe if all filter are found in it
      (recipe) => {
        // Gets an array with every items where to search
        const searchArray = getSearchItemsArray(recipe);

        // Make sure every filters is lower case
        const formatedFilters = formatArrayToLowerCase(filtersArray);

        /* Look in search array if every filters can be found */
        const filtersLeft = getFiltersNotFoundInSearchArray(
          formatedFilters,
          searchArray
        );

        // If left filters array is [] : every filters has been found
        return filtersLeft.length === 0;
      }
    );
    return foundRecipes;
  };

  return { filterRecipes };
};

export { searchFactory };
