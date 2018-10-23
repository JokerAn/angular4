import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page03',
  templateUrl: './page03.component.html',
  styleUrls: ['./page03.component.css']
})
export class Page03Component implements OnInit {

  constructor(private routeInfo:ActivatedRoute) {
  }
  private canshu:any;
  ngOnInit() {
    // this.canshu=this.routeInfo.snapshot.queryParams.id;//拿到参数//因为在路由已经定义了接受参数 就得使用 params 来获取路由中的值了,
    // 获取路由中的东西必须是params 因为params存的是路由中的东西
    // this.canshu=this.routeInfo.snapshot.params.id;//拿到参数//因为是路由传参(在路由中写死的)所以用params 快照方式自己跳转自己不刷新数据得用下边这种
    this.routeInfo.params.subscribe((res)=>{//这种方式不管是否是自己跳转自己 都会刷新数据
      this.canshu = res.id;
      console.log(res)
    })
  }

}
