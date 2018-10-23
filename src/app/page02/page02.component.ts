import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//这个可以拿到别的页面传递过来的参数

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.css']
})
export class Page02Component implements OnInit {

  constructor(private routeInfo:ActivatedRoute) {//注入ActivatedRoute

  }

  ngOnInit() {
    this.canshu=this.routeInfo.snapshot.queryParams.id;//拿到参数//参数快照方式获取参数

  }

}
