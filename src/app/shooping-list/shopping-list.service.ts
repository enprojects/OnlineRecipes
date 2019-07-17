import { EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';

export class ShopppingListService {

    private ingredients = [
        new Ingredient("Apple", 2),
        new Ingredient("Tommatoes", 5)
    ];

  notifyWhenItemAdded  = new EventEmitter<boolean>();
    getAllIngrediants() {
     
        return this.ingredients.slice();
    }

    addIngrediand(ingredient: Ingredient) {
       
 
        if (this.ingredients == null) 
            this.ingredients = [];
    
        this.ingredients.push(ingredient);
        this.notifyWhenItemAdded.emit(ingredient !=null)
      
    }


}