import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { ProductsService } from '../services/products.service';
import {Products} from "./../interfaces/products"

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() cardDetails : Products = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: ""
    // rating : {
    //     rate: 0,
    //     count: 0
    // }
  };
  counter : any;
  constructor(private router : Router, private productCount : CounterService, private products : ProductsService) { }

  ngOnInit(): void {
  }

  viewProduct(){
    this.router.navigate(['/product-details', this.cardDetails.id])
  }

  addToCart(id : any){
    this.productCount.getProductCount().subscribe(
      count => {
        this.counter = count;
      },
      (error)=>{
        console.log(error);
      }
    )
    this.productCount.setProductCount(++this.counter);
    this.products.pushCardProduct(id);
  }
}
