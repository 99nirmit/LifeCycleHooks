import { Component, Input, OnChanges, OnInit, SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() msg = "Angular";
  counter:any;
  num:number = 1;

  constructor(){
    console.log("constructor called");
  }
  ngOnDestroy() {
    console.log("OnDestroy called");
    clearInterval(this.counter)
    
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked called");
    
  }
  ngAfterViewInit() {
    console.log("AfterViewInit called");
    
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked called");
    
  }
  ngAfterContentInit() {
    console.log("AfterContentInit called");
    
  }
  ngDoCheck(){
    console.log("ngDoCheck Called");
    
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChange Called");
    console.log("ngOnChange Called  " + changes['msg'].currentValue);
    
  }

  ngOnInit(){
  console.log("ngOnInit called");
  this.counter = setInterval(()=>{
    this.num = this.num + 1;
    console.log(this.num);
    
  },1000)
  }

  
    
  }


