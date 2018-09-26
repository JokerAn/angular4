import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public router:Router) {
    console.log(this.router);
  }
  ngOnInit() {
    const productId = 1;
    console.log(this.router);

  }
  bbb=function(){
    console.log(this);
    this.router.navigate(["/product"],{queryParams:{name: 'Tom', age: '18'}});
  }

}
