import { Component, OnInit, DoCheck } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, DoCheck {
  cartList :any;
  counter : any;
  constructor(private products : ProductsService, private count : CounterService) { }

  ngOnInit(): void {
    this.cartList = this.products.getCartProducts();
    this.count.getProductCount().subscribe(
      (productCount)=>{
        this.counter = productCount
      },
      (error) =>{
        console.log(error);
      }
    )
    
  }

  ngDoCheck(): void {
    this.cartList = this.products.getCartProducts();
  }

  increaseNum(item: any){
    this.count.setProductCount(++this.counter);
    this.products.pushCardProduct(item.id)
  }

  decreaseNum(item: any){
    this.count.setProductCount(--this.counter);
    this.products.removeCartProduct(item.id);

  }

  removeItem(item: any){
    this.count.setProductCount(0);
    this.products.removeCartProducts(item.id);
  }

}
