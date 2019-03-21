import { Component } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent {

  title05='我是第五个组件用到的原数据（子组件中定义的）'
  changeTitle(){//子组件的方法
    this.title05="我是第五个组件用到的数据（子组件中定义的-点击事件触发候改变的数据）";
  }

}
