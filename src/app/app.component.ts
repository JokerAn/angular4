import { Component,ViewChild  } from '@angular/core';
import { ThreeComponent } from './three/three.component';
import {SixComponent} from './six/six.component';
import { Service } from './service.service';//导入服务 第七个方法需要
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //这是第一个跟第二个用到的数据
  appData = ['我是appComponent中的第一个数据','Apple','Banana','watermelon','pear'];

  //这是三个用到的数据
  id;password;
  @ViewChild(ThreeComponent) childView: ThreeComponent;//相当于将<app-one [childData]="appData"></app-one>中的childData
  constructor() {
    this.reset();//构造函数，有初始化id和password的功能
  }

  reset() {
    this.id = 100001;
    this.password = 123456;

    if (this.childView) {
      let linshi=this.pService.copy(this.childView.changeLog);
      console.log(linshi);//
      console.log(this.childView.changeLog);//这个数据很是特别啊 直接打印只能显示一条 因为下一行代码将组件内的这个数据给清空了就剩一条了
      this.childView.reset();
    }
  }

//第四个用到的东西
  title="你还没点击按钮";
  zidingyishijian(res) { //父组件的方法，更换title的值
    console.log({'我是父组件我接受到了子组件的数据':res})
    if(res[0]){ //如果子组件弹射出来的变量为true
      this.title="你点击了按钮"; //那么就更改title
    }
  }

  //第五个组件用到的数据
  title05='我是第五个组件用到的数据（父组件中定义的）'

 //第六个组件用到的数据
  title06='我是第六个组件用到的数据（父组件中定义的）';
  @ViewChild(SixComponent)//通过@ViewChild属性装饰器，将子组件CountdownTimerComponent注入到私有属性timerComponent里面，此处不能加分号。
  //相当于 方法五中 用一个本地变量#data来代替子组件（写在html中） 这个是用变量res_six=子组件 （写在js）中 其实是一样的
  // private child: SixComponent;
  res_six: SixComponent;
  btnClick(){
    this.res_six.changeTitle06();//调用子组件的方法
  }



//第七个组件用到的数据
  title07='app';
  // constructor(public pService: Service) { //原来的写法是这样的pService = new Service();
  // }
  pService = new Service()
  btnClick07(){
    this.title07 = this.pService.anyData;
    this.pService.someFunction();//调用某些公共方法
    console.log(this.title07);
  }






}
