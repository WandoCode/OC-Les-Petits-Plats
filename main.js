import { initDropdowns } from "./scripts/utils/dropdown/main.js";
import { recipes } from "./datas/recipes.js";
import { initSearch, triggerSearch } from "./scripts/pages/index.js";

const main = () => {
  // Initialize search logic
  initSearch();

  // Initialize dropdown menus
  initDropdowns(recipes, triggerSearch);

  return;
};

main();
