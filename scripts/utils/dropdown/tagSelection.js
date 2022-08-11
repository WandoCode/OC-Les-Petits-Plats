import { tagFactory } from "../../factories/tag.js";

const itemsContainers = document.querySelectorAll(".item-container");
/* Add tag to tags section whrn user click in menu dropdown */
const handleTagSelectionInMenu = () => {
  itemsContainers.forEach((itemsContainer) => {
    itemsContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const value = e.target.innerText;
        const tagColorClasses = Array.from(e.target.parentNode.classList);
        const tagColorClass = tagColorClasses.find((item) => {
          return item.includes("color");
        });
        handleAddTag(value, tagColorClass);
      }
    });
  });
};

/* Check if the tag can be added to tag field */
const handleAddTag = (value, tagColorClass) => {
  const tags = document.querySelectorAll(".tag");
  const currentTagsValues = Array.from(tags).map((tag) => {
    return tag.firstElementChild.innerText;
  });

  if (!currentTagsValues.includes(value)) {
    const tagsContainer = document.querySelector(".tags");
    const tagModel = tagFactory(value, tagColorClass);
    const tagNode = tagModel.createTagDOM();
    tagsContainer.append(tagNode);
  }
};

export { handleTagSelectionInMenu };
