import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecipeService]
})
export class RecipiesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  recipePassFromParent: Recipe;
  ngOnInit() {

    this.recipeService.recipeSelected.subscribe((recipe :Recipe)=> {
 
      this.recipePassFromParent = recipe;

    })
  }

  passDataToDataComp(recipe: Recipe) {
    this.recipePassFromParent = recipe;
  }

}
