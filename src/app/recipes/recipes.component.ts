import { Component, OnInit } from '@angular/core';
import { recipes } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe : recipes;
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipes : recipes)=>{
        this.selectedRecipe = recipes;
      }
    )
  }

}
