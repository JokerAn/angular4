import { Component, OnInit } from '@angular/core';
import {Service} from '../service.service'

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css']
})
export class SevenComponent {

  title07 = 'child';
  // constructor(public anyword: Service) { //其实这种写法比较友好 但是有的地方需要好几个定义好的servic这时候就用下边这个比较好 因为consturctor只能写一个
  // }
  anyword=new Service();
  btnsClicks() {
    this.title07 = this.anyword.anyData;
    console.log(this.title07);
    console.log(this.anyword);
  }

}
