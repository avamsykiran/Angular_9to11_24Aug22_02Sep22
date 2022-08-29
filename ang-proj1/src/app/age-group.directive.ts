import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAgeGroup]'
})
export class AgeGroupDirective implements OnInit {

  @Input('appAgeGroup')
  age:number;

  constructor(private ele:ElementRef,private renderer:Renderer2) {
    this.age=0;
  }

  ngOnInit(): void {
      let color=null;

      if(this.age<18){
        color="#ff0000";
      }else if(this.age<50){
        color="#00ff00";
      }else{
        color="#0000ff";
      }

      this.renderer.setStyle(this.ele.nativeElement,"color",color);
  }

}
