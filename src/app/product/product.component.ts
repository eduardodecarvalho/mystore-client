import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgFor} from '@angular/common';
import {ProductService} from './product.service';
import {Product} from './product';
import {MatTableModule} from '@angular/material/table';
import {MatFormField} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {DialogProductComponent} from "./product.dialog";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, AsyncPipe, MatTableModule, FormsModule, MatFormField, MatInputModule,
    MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule, CurrencyPipe,
    MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
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
  dataSource!: Product[]
  displayedColumns: string[] = ['quantity', 'name', 'type', 'price', 'actions']

  constructor(private productService: ProductService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.productService.getProducts().subscribe(products => this.dataSource = products);
  }

  saveProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(() => this.fetchProducts())
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => this.fetchProducts())
  }

  editProduct(product: Product): void {
    const dialogRef = this.openDialogRef(product);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.updateProduct(result).subscribe(() => this.fetchProducts());
      }
    });
  }

  private openDialogRef(product: Product) {
    return this.dialog.open(DialogProductComponent, {
      width: '250px',
      data: {...product}
    });
  }
}
