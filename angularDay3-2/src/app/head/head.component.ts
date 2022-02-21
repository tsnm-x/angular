import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit, DoCheck {
  todos : string[] = [];
  @Output() list = new EventEmitter();
  @Input() del : any;
  val : any = "";
  constructor() {
    
   }

  ngOnInit(): void {
  }

  ngDoCheck(): void {

    this.todos = this.todos.filter(item => item !== this.del);
    this.list.emit(this.todos);
    
  }

  saveData(){
    this.todos.push(this.val);
    this.list.emit(this.todos);
  }

}
