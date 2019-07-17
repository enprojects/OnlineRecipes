import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredients.model';
import { ShopppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']

})
export class ShoppingEditComponent implements OnInit {

//@ViewChild('inputName')  nameInputRef  : ElementRef;
//this.nameInputRef.nativeElement.value

  constructor(private shoppingListService : ShopppingListService) { }
  // @Output() ingrediantAdd = new EventEmitter<Ingredient>();



  ngOnInit() {
  }
  onAddItem(name: HTMLInputElement, amount: HTMLInputElement) {
    //this.ingrediantAdd.emit({ name: name.value, amount: Number(amount.value) })
    //this.ingrediantAdd.emit( new Ingredient (name.value, Number(amount.value))  )
   debugger;
    this.shoppingListService.addIngrediand(new Ingredient (name.value, Number(amount.value)));
  }
}
