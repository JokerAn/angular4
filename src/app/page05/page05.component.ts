import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page05',
  templateUrl: './page05.component.html',
  styleUrls: ['./page05.component.css']
})
export class Page05Component implements OnInit {

  constructor(private routerInfo:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // var me=this;
    // this.routerInfo.params.subscribe(function (res) {
    //   console.log(me);//当前页面 Page05Component
    //   console.log(this);//本个函数（不确定 箭头函数不会出这个问题）
    //   me.canshu=res.id
    // })
    this.routerInfo.params.subscribe((res)=>{
      this.canshu=res.id
    })

  }
gotopage052(){
  this.router.navigate(['./page052'],{
    relativeTo: this.routerInfo,//基于当前路由跳转
    queryParams: {
      'name': "keatkeat" // ng 会对值调用 toString + encode 才放入 url 中, 解析时会 decode, 然后我们自己把 str convert to 我们要的值
    }
  })
}
}
