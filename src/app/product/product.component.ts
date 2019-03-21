import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  private  canshubylastPage;
  constructor(public router:Router,routerInfo:ActivatedRoute) {



  }

  ngOnInit() {
    console.log(this.router);
  }
  aaa(){
    this.router.navigate(["/customer"]);

  }

}
