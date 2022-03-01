import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartProducts = 0;
  constructor(private productCount : CounterService) { }

  ngOnInit(): void {
    this.productCount.getProductCount().subscribe(
      (count) =>{
        this.cartProducts = count;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
