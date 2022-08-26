import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName:string;
  logos:string[];
  logoIndex:number;
  logoWidth:number;

  isCentered:boolean;
  isBordered:boolean;

  constructor() {
    this.userName="Somebody";
    this.logos=[
      "assets/imgs/w1.jpg",
      "assets/imgs/w2.png",
      "assets/imgs/w3.jpg",
      "assets/imgs/w4.jpg"
    ];
    this.logoIndex=0;
    this.logoWidth=200;

    this.isCentered=true;
    this.isBordered=true;
  }

  ngOnInit(): void {
  }

  toggle(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }
}
