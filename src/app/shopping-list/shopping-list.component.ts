import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : ingredients [] ;

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients(); 
    this.slService.ingredientChanged.subscribe(
      ( ingredients : ingredients[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
