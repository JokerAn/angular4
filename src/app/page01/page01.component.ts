import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component implements OnInit {

  constructor( private routeInfo:ActivatedRoute) {
    let canshu;
  }

  ngOnInit() {
    this.canshu=this.routeInfo.snapshot.params.name
  }

}
