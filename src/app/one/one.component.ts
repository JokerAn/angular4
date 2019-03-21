import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent{

  @Input() childData;//接收数据的接口


  constructor() { }


}
