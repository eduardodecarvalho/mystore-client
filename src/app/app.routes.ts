import { Routes } from '@angular/router';
import { ProductComponent } from "./product/product.component";
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'clients', component: ClientComponent }
];
