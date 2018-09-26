import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  private  canshubylastPage;
  constructor(public router:Router) {



  }

  ngOnInit() {
    console.log(this.router.data);
    this.router.data
      .subscribe((data: { crisis: Crisis }) => {
       console.log(crisis)
      });
  }
  aaa(){
    this.router.navigate(["/customer"]);

  }

}
