import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  links:string[][];

  constructor(){
    this.title="HR Portal";
    this.links=[
      ["/list","Employees"],
      ["/add","New Employee"]
    ];
  }
}
