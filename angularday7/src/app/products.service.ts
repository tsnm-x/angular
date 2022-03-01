import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardProducts } from './interfaces/card-products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartProducts: CardProducts[] = [];
  counter: any;
  product: any;
  
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProductDetails(productId: any) {
    return this.http.get(`https://fakestoreapi.com/products/${productId}`);
  }

  getCartProducts() {
    return this.cartProducts;
  }

  pushCardProduct(productId: number) {

    this.getProductDetails(productId).subscribe((data) => {

      this.product = data;

      let item = this.cartProducts.find(obj => obj.product.id == this.product.id);

      if (item) {

        item.count++;

      } else {

        const newItem = {
          product: this.product,
          count: 1
        }

        this.cartProducts.push(newItem);

      }
    }, error => { console.log(error) })
  }

  removeCartProducts(productId: number) {
    this.cartProducts = this.cartProducts.filter(obj => obj.product.id !== productId);
  }

  removeCartProduct(productId: any) {
    let item: any;
    try {
      item = this.cartProducts.find(obj => obj.product.id == productId);
    } catch {
      item = undefined;
    }

    if (item) {
      item.count--;

      if (!item.count) {
        this.cartProducts = this.cartProducts.filter(obj => obj !== item);
      }

    }
  }

}
