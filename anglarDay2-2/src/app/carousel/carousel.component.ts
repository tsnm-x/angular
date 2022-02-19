import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  elements : any = [
    {
      title: "title1",
      des: "Some representative placeholder content for the first slide.",
      src: "../../assets/1.jpg",
      btn: "More Details"
    },
    {
      title: "title2",
      des: "Some representative placeholder content for the first slide.",
      src: "../../assets/1.jpg",
      btn: "More Details"
    },
    {
      title: "title3",
      des: "Some representative placeholder content for the first slide.",
      src: "../../assets/1.jpg",
      btn: "More Details"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
