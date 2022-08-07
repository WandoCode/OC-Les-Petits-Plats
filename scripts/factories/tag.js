const tagFactory = (value) => {
  const createTagDOM = () => {
    const container = document.createElement("div");
    container.classList.add("tag");

    const title = document.createElement("h3");
    title.classList.add("tag__text");

    const img = document.createElement("img");
    img.classList.add("tag__close");
    img.src = "asset/cancel.svg";
    img.alt = "Cancel tag";

    container.append(title);
    container.append(img);

    title.textContent = value;

    return container;
  };

  return { createTagDOM };
};

export { tagFactory };
//TODO: refactor
//TODO: Ajouter la disparition du tag quand l'img est cliquée.
//TODO: Adapté la couleur du tag via une classe a ajouter
