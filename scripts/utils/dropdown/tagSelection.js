import { tagFactory } from "../../factories/tag.js";

const itemsContainers = document.querySelectorAll(".item-container");

const handleTagSelectionInMenu = () => {
  itemsContainers.forEach((itemsContainer) => {
    itemsContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const value = e.target.innerText;
        handleAddTag(value);
      }
    });
  });
};

/* Check if the tag can be added to tag field */
const handleAddTag = (value) => {
  const tags = document.querySelectorAll(".tag");
  const currentTagsValues = Array.from(tags).map((tag) => {
    return tag.firstElementChild.innerText;
  });

  if (!currentTagsValues.includes(value)) {
    const tagsContainer = document.querySelector(".tags");
    const tagModel = tagFactory(value);
    const tagNode = tagModel.createTagDOM();
    tagsContainer.append(tagNode);
  }
};

export { handleTagSelectionInMenu };
