const tagFactory = (value, tagClass) => {
  /* Create node of a tag */
  const createTagDOM = () => {
    const container = document.createElement("div");
    container.classList.add("tag");
    container.classList.add(tagClass);

    const title = document.createElement("h3");
    title.classList.add("tag__text");

    const img = document.createElement("img");
    img.classList.add("tag__close");
    img.src = "asset/cancel.svg";
    img.alt = "Cancel tag";
    addCloseTagListener(img);

    container.append(title);
    container.append(img);

    title.textContent = value;

    return container;
  };

  const addCloseTagListener = (node) => {
    node.addEventListener("click", (e) => {
      const tagContainer = e.target.parentNode;
      tagContainer.remove();
    });
  };

  return { createTagDOM };
};

export { tagFactory };
