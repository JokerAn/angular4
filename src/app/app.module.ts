// import * as an from './publicFun/publicFun.js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { Service } from './service.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';//引入router
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';
import { Page404Component } from './page404/page404.component';
import { Page03Component } from './page03/page03.component';
import { Page05Component } from './page05/page05.component';
import { Page051Component } from './page051/page051.component';
import { Page052Component } from './page052/page052.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { Http01Component } from './http01/http01.component';
import { TestTsLintComponent } from './test-ts-lint/test-ts-lint.component';

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
    Page01Component,
    Page02Component,
    Page404Component,
    Page03Component,
    Page05Component,
    Page051Component,
    Page052Component,
    IndexpageComponent,
    Http01Component,
    TestTsLintComponent,
    SevenComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],//设置那个文件是router RouterModule.forRoot(appRoutes)
  providers: [Service],//注册服务 第七个方法需要
  bootstrap: [AppComponent]
})
export class AppModule { }
