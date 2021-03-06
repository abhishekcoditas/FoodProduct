import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipes } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : recipes;
  id:number;
  constructor(private recipeService : RecipeService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params:Params) =>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient)
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
