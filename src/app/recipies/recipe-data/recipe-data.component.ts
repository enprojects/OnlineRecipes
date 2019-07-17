import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css']
})
export class RecipeDataComponent implements OnInit {

  @Input()  recipe : Recipe;
  constructor() { }

  ngOnInit() {
  }

}
