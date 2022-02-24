import { Component, OnInit } from '@angular/core';
import {Products} from './../interfaces/products';
import productList from '../../assets/products.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cards : Products[] = productList;
  constructor() { }

  ngOnInit(): void {
  }

}
