import { initDropdowns } from "./scripts/utils/dropdown/main.js";
import { recipes } from "./datas/recipes.js";
import { searchFactory } from "./scripts/factories/mainSearch.js";
/* TEST */

initDropdowns(recipes);
const searchModel = searchFactory(recipes);
const rep = searchModel.filterRecipes(["coco"]);
console.log(rep);
/* FIN TEST */

/* Quand main searchbar input change ou quand un tag est ajouté
      Récupérer l'input de la searchbar
      Récupérer les tags choisis
      Rechercher les recettes correspondantes
      Les retourner
      Afficher les cartes recettes a partir des recettes retournées
      Mettre à jour les dropdowns a partir des recettes retournées
      
Mettre à jour les dropdown
  utiliser la fct 'showFilteredDropdownList'

SAvoir qu'un tag est ajouté:
  passer une cb à la fct qui ajoute les tag
  executer la cb quand un tag est ajouté
  La cb execute l'update des recherhces

SAvoir qu'un tag est retiré:
  idem mais la CB est passé à la tagfactory
    */
