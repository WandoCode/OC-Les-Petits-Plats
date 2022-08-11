import { initDropdowns } from "./scripts/utils/dropdown/main.js";
import { recipes } from "./datas/recipes.js";
import { searchFactory } from "./scripts/factories/mainSearch.js";

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value.length < 3) return;

  //Collect filters: tags + searchinput
  //=>Gets tags
  const tagsDOMArray = Array.from(document.querySelectorAll(".tag__text"));
  const tagsArray = tagsDOMArray.map((tagDOM) => {
    return tagDOM.innerText;
  });
  //=>Gets inputs
  const unfilteredInputsArray = value.split(" ");
  const inputsArray = unfilteredInputsArray.filter((item) => {
    // "" could be present into the initial array. It's removed here
    return item.length > 0;
  });

  //=> Puts every items in an array
  const filtersArray = [...tagsArray, ...inputsArray];

  //Make a search with mainSearch factory
  //=> Gets an array of recipes
  const searchModel = searchFactory(recipes);
  const foundRecipes = searchModel.filterRecipes(filtersArray);

  console.log(foundRecipes);
  //Update dropdown with new recipes array
});
/* TEST */

const main = () => {
  initDropdowns(recipes);
};

main();
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
