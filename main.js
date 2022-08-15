import { dropdownsFactory } from './scripts/factories/dropdown.js'
import { initDropdowns } from './scripts/utils/dropdown/main.js'
import { recipes } from './datas/recipes.js'
import { initSearch, triggerSearch } from './scripts/pages/index.js'

const main = () => {
  const dropdownModel = dropdownsFactory(recipes)
  dropdownModel.setRecipes(recipes)
  dropdownModel.createTagsArray()

  // Initialize search logic
  initSearch(dropdownModel)

  // Initialize dropdown menus
  initDropdowns(dropdownModel, triggerSearch)
}

main()
