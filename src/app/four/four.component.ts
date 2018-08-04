import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent {
  msg_004='我是子组件的数据';
  @Output() hahaha = new EventEmitter();//暴露自定义事件hahaha
  tests(res,res2) { //tests()只是一个普通的方法
    this.hahaha.emit([res,res2,this.msg_004]);//向父组件弹射hahaha变量，这个变量在button被点击的时候触发
  }
}
