import { Injectable } from "@angular/core";
import { ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { recipes } from "./recipe-list/recipe.model";

@Injectable()
export class RecipeService{


    recipes: recipes[] = [
        new recipes(
          'Cheese Burger',
          'This is a Awesome',
          'https://i.pinimg.com/originals/b6/51/c4/b651c473c595f728118644568221637e.jpg',
          [
            new ingredients('Meat',1),
            new ingredients('Bread',2),
            new ingredients('cheese Slice',2)
          ]
        ),
        new recipes(
          'Calicut Chicken Biryani',
          'This is a Awesome',
          'https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg',
          [
            new ingredients('chicken',1),
            new ingredients('Rice',1)
          ]
        )
      ];

      constructor(private slService : ShoppingListService){}

      getRecipes(){
        return  this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredient : ingredients[]){
        this.slService.addIngredients(ingredient);
      }
}