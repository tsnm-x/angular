import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects : any = [
    {
      title: "Project1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Project2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Project3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Project4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Project5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Project6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
