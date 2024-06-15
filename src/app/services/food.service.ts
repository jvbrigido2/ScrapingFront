import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FoodItem } from 'src/models/food-item.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getAllFoods(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(`${environment.apiLocalUrl}/api/Food`);
  }

  getFoodsByName(name: string): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(
      `${environment.apiLocalUrl}/api/Food/search?name=${name}`
    );
  }

  getFoodItemByCode(code: string): Observable<FoodItem> {
    return this.http.get<FoodItem>(
      `${environment.apiLocalUrl}/api/Food/code?code=${code}`
    );
  }
}
