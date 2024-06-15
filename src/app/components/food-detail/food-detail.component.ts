import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { FoodItem } from 'src/models/food-item.model';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
})
export class FoodDetailComponent implements OnInit {
  foodItem: FoodItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService
  ) {}
  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.foodService.getFoodItemByCode(code).subscribe((data: FoodItem) => {
        this.foodItem = data;
      });
    }
  }
  backHome() {
    this.router.navigate(['/foods']);
  }
}
