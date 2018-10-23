import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page052',
  templateUrl: './page052.component.html',
  styleUrls: ['./page052.component.css']
})
export class Page052Component implements OnInit {

  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    // this.routerInfo.params.subscribe(res=>{//因为这个是queryParams传过来的所以要用queryParams来接收
    this.routerInfo.queryParams.subscribe(res=>{
      console.log(res);
      this.canshu=res.name
    })
  }

}
