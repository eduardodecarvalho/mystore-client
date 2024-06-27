import { Component } from '@angular/core';
import { Product } from './product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productList: Product[] = [
    new Product("3", "Laptop", "Technology", "1000.00"),
    new Product("7", "Bicycle", "Sports", "340.00"),
    new Product("14", "Baguette", "Food", "01.10")
  ]
}
