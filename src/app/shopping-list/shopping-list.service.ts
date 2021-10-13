
import { Subject } from "rxjs";
import { ingredients } from "../shared/ingredients.model";

export class ShoppingListService{

    ingredientChanged = new Subject<ingredients[]>();

    private ingredients : ingredients [] = [
        new ingredients('Apple',5),
        new ingredients('Tomato',10)
    ]

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : ingredients){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredient:ingredients[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}