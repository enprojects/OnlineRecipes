import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';
import { ShopppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],
  providers: []
})
export class ShoopingListComponent implements OnInit {


  ingredients: Ingredient[];

  constructor(private shoppingService: ShopppingListService) { }

  ngOnInit() {

    this.shoppingService.notifyWhenItemAdded.subscribe(result => {
      if (result)
        this.getIngredients();
    })
    this.getIngredients();

  }


  getIngredients() {

    this.ingredients = this.shoppingService.getAllIngrediants();
  }

}
