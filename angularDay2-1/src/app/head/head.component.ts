import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  name : string = "Katie Reed";
  jobTitle : string = "Web developer and designer";
  constructor() { }

  ngOnInit(): void {
  }

}
