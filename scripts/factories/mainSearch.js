const searchFactory = (recipes) => {
  const getRecipeIngredientArray = (recipe) => {
    return recipe.ingredients.map((item) => {
      return item.ingredient.toLowerCase();
    });
  };

  const getSearchItemsArray = (recipe) => {
    const title = recipe.name.toLowerCase();
    const ingredients = getRecipeIngredientArray(recipe);
    const description = recipe.description.toLowerCase();
    return [title, ...ingredients, description];
  };
  const filterRecipes = (filtersArray) => {
    const foundRecipes = recipes.filter((recipe) => {
      /* Gets an array with every items where to search */
      const searchArray = getSearchItemsArray(recipe);

      const formattedFilters = filtersArray.map((filterItem) => {
        return filterItem.toLowerCase();
      });
      let filtersLeft = [...formattedFilters];
      searchArray.forEach((item) => {
        const newFiltersArray = filtersLeft.filter((filterString) => {
          return !item.includes(filterString);
        });
        filtersLeft = [...newFiltersArray];
      });

      return filtersLeft.length === 0;
    });
    console.log(foundRecipes);
  };
  return { filterRecipes };
};

export { searchFactory };
