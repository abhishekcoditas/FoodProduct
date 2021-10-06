import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: recipes; 

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  onSelect(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
