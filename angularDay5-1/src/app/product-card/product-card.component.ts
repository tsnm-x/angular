import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
    image: "",
    rating : {
        rate: 0,
        count: 0
    }
};
  availItems : string = '';
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  viewProduct(){
    this.router.navigate(['/product-details', this.cardDetails.id])
  }

  addToCart(){
    this.router.navigate(['/add-to-cart']);
  }
}
