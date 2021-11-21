import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List in angular';
  list:any[]=[];
  addTask(item:string)
  {
    
    this.list.push({name:item})
    console.warn(this.list)
    
  }
  deleteTask(item:string)
  {
    
    this.list = this.list.filter(x=>x.name!==item) 
    console.warn(this.list)

  }
}
