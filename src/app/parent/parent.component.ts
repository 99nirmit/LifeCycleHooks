import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  greeting:string="Hello my name is nimrit";

  childExist:boolean=true;
  value !:string;
  submitValue(val:any){
    this.value = val.value;
  }

  destroy(){
    this.childExist = false;
  }

}
