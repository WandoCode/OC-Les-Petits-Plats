const recipeFactory = (recipeDatas) => {
  const { name, ingredients, time, description } = recipeDatas;

  /* Create a recipe card from datas */
  const getRecipeCardDOM = () => {
    const anchor = document.createElement("a");
    anchor.href = "#";

    const article = document.createElement("article");
    article.classList.add("recipe");

    const img = document.createElement("img");
    img.classList.add("recipe__img");
    img.src = "asset/recipe_placeholder.png";
    img.alt = name;

    const details = document.createElement("div");
    details.classList.add("recipe__details");

    const splitDetailsA = document.createElement("div");
    splitDetailsA.classList.add("recipe__split-details");

    const h2 = document.createElement("h2");
    h2.classList.add("recipe__title");
    h2.textContent = name;

    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("recipe__ingredients");

    ingredients.forEach((item) => {
      const itemUnit = item.unit ? item.unit : "";
      const itemQuantity = item.quantity ? item.quantity : "";
      const spanContent = item.quantity
        ? `${item.ingredient}: `
        : `${item.ingredient}`;

      const li = document.createElement("li");
      li.textContent = `${itemQuantity} ${itemUnit}`;

      const span = document.createElement("span");
      span.classList.add("recipe__ingredient");

      ingredientsList.append(li);

      li.prepend(span);
      span.textContent = spanContent;
    });

    const splitDetailsB = document.createElement("div");
    splitDetailsB.classList.add("recipe__split-details");

    const timeContainer = document.createElement("div");
    timeContainer.classList.add("recipe__time");
    timeContainer.textContent = `${time} min`;

    const timeIcon = document.createElement("img");
    timeIcon.src = "asset/timer.svg";
    timeIcon.alt = "Timer";

    const descriptionContainer = document.createElement("p");
    descriptionContainer.classList.add("recipe__short");
    descriptionContainer.textContent = description + ".";
    anchor.append(article);

    article.append(img);
    article.append(details);

    details.append(splitDetailsA);
    details.append(splitDetailsB);

    splitDetailsA.append(h2);
    splitDetailsA.append(ingredientsList);

    splitDetailsB.append(timeContainer);
    splitDetailsB.append(descriptionContainer);

    timeContainer.prepend(timeIcon);

    return anchor;
  };

  return { getRecipeCardDOM };
};

export { recipeFactory };
