import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';
import { ProductService } from './product.service';
import { Product } from './product';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, AsyncPipe, MatTableModule, FormsModule, MatFormField, MatInputModule,
    MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})



export class ProductComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl('')

  })
  productList$!: Observable<Product[]>
  displayedColumns: string[] = ['quantity', 'name', 'type', 'price', 'actions']
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productList$ = this.productService.getProducts()
  }
  saveProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(() => {
      this.productList$ = this.productService.getProducts()
    })
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productList$ = this.productService.getProducts()
    })
  }
  editProduct(product: Product) {
    this.productService.editProduct(product).subscribe(() => {
      this.productList$ = this.productService.getProducts()
    })
  }
}
