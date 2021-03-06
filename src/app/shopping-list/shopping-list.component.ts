import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy {

  ingredients : ingredients [] ;
  private igChangeSub : Subscription

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients(); 
    this.igChangeSub = this.slService.ingredientChanged.subscribe(
      ( ingredients : ingredients[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }

}
