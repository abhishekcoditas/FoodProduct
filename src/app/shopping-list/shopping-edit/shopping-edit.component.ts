import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('nameInput') nameRef : ElementRef;
  @ViewChild('numberInput') numberRef : ElementRef;
  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const igName = this.nameRef.nativeElement.value;
    const igAmount = this.numberRef.nativeElement.value;
    const newIngredient = new ingredients(igName,igAmount);
    this.slService.addIngredient(newIngredient);
  }
}
