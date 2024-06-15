import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { FoodItem } from 'src/models/food-item.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foodItems: FoodItem[] = [];
  searchTerm: string = '';

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void {
    this.loadFoods();
  }
  loadFoods(): void {
    this.foodService.getAllFoods().subscribe((data) => {
      this.foodItems = data;
    });
  }

  searchFoods(): void {
    if (this.searchTerm) {
      this.foodService.getFoodsByName(this.searchTerm).subscribe((data) => {
        this.foodItems = data;
      });
    } else {
      this.loadFoods();
    }
  }
  viewDetails(code: string): void {
    this.router.navigate(['/foods', code]);
  }
}
