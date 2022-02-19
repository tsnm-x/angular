import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  elements : any = [
    {
      head: "Header1",
      des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btn: "More Details"
    },
    {
      head: "Header2",
      des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btn: "More Details"
    },
    {
      head: "Header3",
      des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      btn: "More Details"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
