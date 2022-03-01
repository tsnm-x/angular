import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from "../../assets/products.json"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails : any;
  constructor(private activeRoute : ActivatedRoute) { 
    let id = activeRoute.snapshot.params['id'];
    this.productDetails = products.find(product => product.id == id);
  }

  ngOnInit(): void {
  }

}
