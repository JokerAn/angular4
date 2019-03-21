import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

  /***
    写成这样就相当于第一种传参的写法了


   @Input() child
   constructor() { }


   ***/



  /****** 这种写法是用set跟get写法写的 也就是第二种写法 *********/
   _name = ''; //定义一个私有向量，来暂时储存父组件传递过来的数据

  @Input() set child(res) { //child是我们用来接收父组件传递过来的数据的一个变量，我们用setter来截取到这个变量，然后做一些修改，child这个变量名
    //它是取决于父组件app.component.html里面的[child]="app" 中的child，不能随便改动，
    this._name = res.trim(res) || 'Oranges'; //会trim掉名字里的空格，并把空值替换成Oranges。
  }

  get child(){ //用get重新获取重置过后的child变量，这个过程中_name这个私有变量就用到了
    return this._name;
  }
  constructor(){
    let me=this;
    setTimeout(function(){
      me._name=me._name+'***';
      console.log(me._name);
    },3000)
  }

}
