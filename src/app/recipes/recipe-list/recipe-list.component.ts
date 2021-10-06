import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { recipes } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: recipes[];

  constructor(private recipeService : RecipeService) {}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  
}
