import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails : any;
  id : any;
  constructor(private activeRoute : ActivatedRoute, private products : ProductsService) { 


    // this.productDetails = products.find(product => product.id == id);
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.products.getProductDetails(this.id).subscribe(
      (res) =>{
        this.productDetails = res;
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

}
