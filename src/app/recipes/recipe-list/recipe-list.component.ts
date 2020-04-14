import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Test', 'A simple test recipe', 'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
