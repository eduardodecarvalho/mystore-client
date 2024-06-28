import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { ProductService } from './product.service';
import { Product } from './product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productList$!: Observable<Product[]>
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productList$ = this.productService.getProducts()
  }
}
