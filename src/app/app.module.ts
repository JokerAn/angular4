// import * as an from './publicFun/publicFun.js';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { Service } from './service.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';

//导入服务 第七个方法需要

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    ProductComponent,
    CustomerComponent,
    SevenComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [Service],//注册服务 第七个方法需要
  bootstrap: [AppComponent]
})
export class AppModule { }
