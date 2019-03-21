import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component implements OnInit {
  public canshu:string
  private canshu2:string
  constructor( private routeInfo:ActivatedRoute) {

  }

  ngOnInit() {
    this.canshu=this.routeInfo.snapshot.params.name;
  }

}
