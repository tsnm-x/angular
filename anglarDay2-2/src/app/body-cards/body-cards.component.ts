import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-cards',
  templateUrl: './body-cards.component.html',
  styleUrls: ['./body-cards.component.css']
})
export class BodyCardsComponent implements OnInit {
  elements : any = [
    {
      title: "title1",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius fugiat, aliquam deleniti placeat porro dicta! Quidem nemo fugit fuga illum a doloremque sunt consequatur voluptate. Cum libero provident cupiditate.",
      src: "../../assets/card2.jfif"
    },
    {
      title: "title2",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius fugiat, aliquam deleniti placeat porro dicta! Quidem nemo fugit fuga illum a doloremque sunt consequatur voluptate. Cum libero provident cupiditate.",
      src: "../../assets/card1.jfif"
    },
    {
      title: "title3",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius fugiat, aliquam deleniti placeat porro dicta! Quidem nemo fugit fuga illum a doloremque sunt consequatur voluptate. Cum libero provident cupiditate.",
      src: "../../assets/card2.jfif"
    },
    {
      title: "title4",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius fugiat, aliquam deleniti placeat porro dicta! Quidem nemo fugit fuga illum a doloremque sunt consequatur voluptate. Cum libero provident cupiditate.",
      src: "../../assets/card1.jfif"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
