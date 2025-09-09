import { Component } from '@angular/core';
import { Product, ProductsService } from '../../services/products';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  arrProductos : Product[] =[]; 
  constructor(private prod : ProductsService) {
      this.arrProductos = this.prod.getProducts(); 
  }
}
