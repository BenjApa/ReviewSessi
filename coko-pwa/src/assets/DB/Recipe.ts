import {TypeRecipe} from "./TypeRecipe";
import {Ingredient} from "./Ingredient";
import {Step} from "./Step";

export interface Recipe {
  id: number;
  name: string;
  creatorId: number;
  picture: string;
  calories: number;
  time: number;
  quantity: string;
  challenge: string;
  price: number;
  type: TypeRecipe[];
  tools: string[];
  ingredients: Ingredient[];
  steps: Step[];
}
/*
 "id": 0,
      "name": "Tarte citron meringué",
      "creatorId": 1,
      "picture": "img/recettes/tarte-citron-meringue.jpg",
      "calories": 460,
      "time":85,
      "quantity":4,
      "challenge": "moyen",
      "price": 10,
      "type": [
        {
          "name": "Dessert",
          "description": "Gâteau à déguster en fin de repas."
        }
      ],
      "tools": [
        "Four",
        "Plaque de cuisson"
      ],
      "ingredients": [
        {
          "name": "oeuf",
          "quantity": 4,
          "unity" : "unité"
        },
        {
          "name": "citron",
          "quantity": 2,
          "unity": "unité"
        },
        {
          "name": "sucre",
          "quantity": 180,
          "unity": "grammes"
        },
        {
          "name": "farine",
          "quantiy": 250,
          "unity": "grammes"
        },
        {
          "name": "beurre",
          "quantiy": 150,
          "unity": "grammes"
        },
        {
          "name": "sucre",
          "quantiy": 70,
          "unity": "grammes"
        },
        {
          "name": "sel",
          "quantiy": 1,
          "unity": "pincée"
        },
        {
          "name": "crème fraîche",
          "quantiy": 20,
          "unity": "cl"
        }
      ],
      "steps": [
        {
          "action": "PÂTE:Blanchir les jaunes et le sucre au fouet et détendre le mélange avec un peu d'eau.",
          "time": 2,
          "alert": "Le mélange est prêt ?"
        },
        {
          "action": "Mélanger au doigt la farine et le beurre coupé en petites parcelles pour obtenir une consistance sableuse et que tout le beurre soit absorbé (!!! Il faut faire vite pour que le mélange ne ramollisse pas trop!).",
          "time": 3,
          "alert": "Le mélange est prêt ?"
        },
        {
          "action": "Verser au milieu de ce 'sable' le mélange liquide.",
          "time": 0.30,
          "alert": "Ok ?"
        },
        {
          "action": "Incoporer au couteau les éléments rapidement sans leur donner de corps.",
          "time": 1,
          "alert": "Ok ?"
        },
        {
          "action":"Former une boule avec les paumes et fraiser 1 ou 2 fois pour rendre la boule plus homogène.",
          "time": 2,
          "alert": "La boule est prête ?"
        },
        {
          "action":"Foncez un moule de 25 cm de diamètre avec la pâte, garnissez la de papier sulfurisé.",
          "time": 1,
          "alert": "Le moule est prêt ?"
        },
        {
          "action":"Faites cuire à blanc 20 à 25 mn, à 180°C, Th 6-7 . (NB après baisser le four à 120°C/150°C environ pour la meringue).",
          "time": 20,
          "alert": "Pensez à vérifier votre cuisson ! Est-ce prêt ?"
        },
        {
          "action":"CRÈME AU CITRON :Laver les citrons et en 'zester' 2.",
          "time": 2,
          "alert": "Zestes prêts ?"
        },
        {
          "action":"Mettre les zestes très fins dans une casserole.",
          "time": 1,
          "alert": "Ok ?"
        },
        {
          "action":"Presser les citrons et mettre le jus avec les zestes dans la casserole.",
          "time": 1,
          "alert": "Ok ?"
        },
        {
          "action":"Verser le sucre.",
          "time": "0.30",
          "alert": "Ok ?"
        },
        {
          "action":"Remuer, et commencer à faire chauffer à feux doux.",
          "time": 3,
          "alert": "Assez remué ?"
        },
        {
          "action":"Battre les oeufs dans un récipients séparé.",
          "time": 1,
          "alert": "Oeufs prêts ?"
        },
        {
          "action":"Une fois les oeufs battus, incorporer tout en remuant le jus de citron, le sucre, et les zestes.",
          "time": 1,
          "alert": "Ok ?"
        },
        {
          "action":"Mettre à feu fort et continuer à remuer à l'aide d'un fouet.",
          "time": 2,
          "alert": "Assez fouetté ?"
        },
        {
          "action":"Le mélange va commencer à s'épaissir.Attention de toujours remuer lorsque les oeufs sont ajoutés, car la crème de citron pourrait brûler.",
          "time": 1,
          "alert": "Ca y est ?"
        },
        {
          "action":"Oter du feux et verser l'appareil sur le fond de tarte cuit.",
          "time": 1,
          "alert": "Ok ?"
        },
        {
          "action":"MERINGUE :Monter les blancs en neige avec une pincée de sel.",
          "time": 2,
          "alert": "Les blancs sont neige ?"
        },
        {
          "action":"Quand ils commencent à être fermes, ajouter le sucre puis la levure.",
          "time": 1,
          "alert": "Ok ?"
        },
        {
          "action":"Mixer jusqu'à ce que la neige soit ferme.",
          "time": 2,
          "alert": "La neige est ferme ?"
        },
        {
          "action":"Recouvrir avec les blancs en neige et napper. Cuire à four doux (120°C/150°C) juqu'à ce que la meringue dore (10 mn)",
          "time": 20,
          "alert": "Pensez à vérifier votre cuisson. Est-ce prêt ?"
        }
      ]
 */
