import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page051',
  templateUrl: './page051.component.html',
  styleUrls: ['./page051.component.css']
})
export class Page051Component implements OnInit {

  constructor(private routerInfo:ActivatedRoute) { }

  private canshu:any;
  ngOnInit() {

    this.routerInfo.params.subscribe(res => {
      this.canshu = res.id;
    })
  }

}
