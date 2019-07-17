import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDataComponent } from './recipies/recipe-data/recipe-data.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { ShoppingEditComponent } from './shooping-list/shopping-edit/shopping-edit.component';
import { ShopppingListService } from './shooping-list/shopping-list.service';
import { EmpServ } from './EmpServ';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDataComponent,
    RecipeItemComponent,
    ShoopingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShopppingListService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { } 
