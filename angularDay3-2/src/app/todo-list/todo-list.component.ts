import { Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, DoCheck {
  @Input() Rdata : any;
  @Output() itemSender = new EventEmitter();
  selected : any;
  sendData : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
      if(this.sendData == false){
        this.selected = '';
        this.itemSender.emit(this.selected);
        this.sendData = true;
      }
  }

  deleteItem(data: string){
    this.selected = data;
    this.itemSender.emit(this.selected);
    this.sendData = false;

  }

}
