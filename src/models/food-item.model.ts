import { Component } from './component.model';

export interface FoodItem {
  code: string;
  name: string;
  scientificName: string;
  group: string;
  components: Component[];
}
