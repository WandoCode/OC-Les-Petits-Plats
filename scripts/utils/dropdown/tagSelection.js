import { tagFactory } from "../../factories/tag.js";

/* DOM nodes */
const itemsContainers = document.querySelectorAll(".item-container");

/* Add tag to tags section when user click in menu dropdown */
const handleTagSelectionInMenu = () => {
  itemsContainers.forEach((itemsContainer) => {
    itemsContainer.addEventListener("click", (e) => {
      // Select only tag element from dropdown menu
      if (e.target.tagName === "LI") {
        const value = e.target.innerText;
        // Retrieve the color class of parent the give it to displayed tag
        const parentClasses = Array.from(e.target.parentNode.classList);
        const tagColorClass = parentClasses.find((item) => {
          return item.includes("color");
        });

        // Add the tag to screen if possible
        handleAddTag(value, tagColorClass);
      }
    });
  });
};

/* Add tag if the tag can be added to tags section */
const handleAddTag = (value, tagColorClass) => {
  const tags = document.querySelectorAll(".tag");
  const currentTagsValues = Array.from(tags).map((tag) => {
    return tag.firstElementChild.innerText;
  });

  if (!currentTagsValues.includes(value)) {
    addTag(value, tagColorClass);
  }
};

/* Add tag */
const addTag = (value, tagColorClass) => {
  const tagsContainer = document.querySelector(".tags");
  const tagModel = tagFactory(value, tagColorClass);
  const tagNode = tagModel.createTagDOM();
  tagsContainer.append(tagNode);
};

export { handleTagSelectionInMenu };
