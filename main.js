import { dropdownsFactory } from "./scripts/factories/dropdown.js";
/* TEST */
const recipesTest = [
  {
    id: 2,
    name: "Poisson Cru à la tahitienne",
    servings: 2,
    ingredients: [
      {
        ingredient: "Thon Rouge (ou blanc)",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Concombre",
        quantity: 1,
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Carotte",
        quantite: 1,
      },
      {
        ingredient: "Citron Vert",
        quantity: 5,
      },
      {
        ingredient: "Lait de Coco",
        quantity: 100,
        unit: "ml",
      },
    ],
    time: 60,
    description:
      "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco",
    appliance: "Saladier",
    ustensils: ["presse citron"],
  },
  {
    id: 3,
    name: "Poulet coco réunionnais",
    servings: 4,
    ingredients: [
      {
        ingredient: "Poulet",
        quantity: 1,
      },
      {
        ingredient: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "Coulis de tomate",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Poivron rouge",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
        quantity: 1,
        unit: "cuillères à soupe",
      },
    ],
    time: 80,
    description:
      "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
    appliance: "Cocotte",
    ustensils: ["couteau"],
  },
  {
    id: 4,
    name: "Salade de riz",
    servings: 4,
    ingredients: [
      {
        ingredient: "Riz blanc",
        quantity: 500,
        unit: "grammes",
      },
      {
        ingredient: "Thon en miettes",
        quantity: 200,
        unit: "grammes",
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Oeuf dur",
        quantity: 2,
      },
      {
        ingredient: "Maïs",
        quantity: 300,
        unit: "grammes",
      },
      {
        ingredient: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 50,
    description:
      "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
    appliance: "Cuiseur de riz",
    ustensils: ["saladier", "passoire"],
  },
];

const dropdownModel = dropdownsFactory(recipesTest);
const ingredientsList = dropdownModel.getDropdownListDOM("ingredients");
const ustensilsList = dropdownModel.getDropdownListDOM("ustensils");
const appliancesList = dropdownModel.getDropdownListDOM("appliances");
const ingredientsMenu = document.getElementById("ingredient-menu");
const ustensilsMenu = document.getElementById("ustensil-menu");
const appliancesMenu = document.getElementById("appareil-menu");
ingredientsMenu.append(...ingredientsList);
console.log(ustensilsList);
ustensilsMenu.append(...ustensilsList);
appliancesMenu.append(...appliancesList);

/* FIN TEST */
