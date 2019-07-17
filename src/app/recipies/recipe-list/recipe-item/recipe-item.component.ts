import { Component, OnInit, Input,NgModule, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
 


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeServerice : RecipeService) { }

  @Input('recipe') recipe:Recipe;
 // @Output() recipeClicked  = new EventEmitter<void> ();

  onSelected (){
 //this.recipeClicked.emit();
  this.recipeServerice.recipeSelected.emit(this.recipe);
  
  }

  ngOnInit() {
  }

 
}
