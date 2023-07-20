import { Injectable } from '@angular/core';
import { myProducts } from './products';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor() { }

  getProducts() {
    return myProducts;
  }
}
