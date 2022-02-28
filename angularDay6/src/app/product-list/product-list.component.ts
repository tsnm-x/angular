import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList : any;
  constructor(private products : ProductsService) { }

  ngOnInit(): void {
    this.products.getProducts().subscribe(
      (res) => {
        this.productList = res;
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

}
