import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [

        new Recipe(
            "Spaggetti recipe", "about this recipe..",
            "https://media.giphy.com/media/6PopYBwOlKS8o/giphy.gif"),

        new Recipe(
            "Pasta recipe", "about this recipe..",
            "https://media.giphy.com/media/7fwBcr9lB0Fos/giphy.gif"),

        new Recipe(
            "Pizza recipe", "about this recipe..",
            "https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg")

    ]
    getRecipes() {
        return this.recipes.slice();
    }
}