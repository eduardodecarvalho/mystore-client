import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL: string = "http://localhost:3000/products/"

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL)
  }
  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.baseURL + id)
  }
  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseURL + product.id, product)
  }
}
