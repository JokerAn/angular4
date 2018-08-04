import { Component } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent {

  title06 = '我是在子组件中定义的变量（页面初始化的值）';
  changeTitle06(){
    this.title06="我是在子组件中定义的变量（调用方法后改变的值）";
  }
}
