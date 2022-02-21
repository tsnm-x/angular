import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  data : any;
  title = 'angularDay3-2';
  deleted : any;

  receiveData(data : any){
    this.data = data;
  }

  recieveDeletedData(data: string){
    this.deleted = data;
    
  }
}
