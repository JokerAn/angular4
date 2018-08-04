import { Component, OnInit,OnChanges, SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent  implements OnChanges{

  constructor() { }
  @Input() id: number;
  @Input() password: number;
  changeLog: string[] = []; //这个数组用来存放修改日志，修改一个input就会储存相应的记录
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);//修改前的数据
      let prev = JSON.stringify(chng.previousValue);//修改后的数据
      this.changeLog.push(`${propName}被修改了: 前一个数据 = ${cur}, 后一个数据 = ${prev}`);
    }
  }
  reset() {
    this.changeLog.length = 0; //清除日志
  }
}
