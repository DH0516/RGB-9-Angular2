import { Component } from '@angular/core';
import { GetProductsService } from './get-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor
  (public getProduct:GetProductsService) 
  { } 
  Products = this.getProduct.getProducts();
  
}
