
import {ProductComponent} from './product/product.component';
import {CustomerComponent} from './customer/customer.component';
import {Page01Component} from './page01/page01.component';
import {Page02Component} from './page02/page02.component';
import {Page404Component} from './page404/page404.component';
import {Page03Component} from './page03/page03.component';
import {Page05Component} from './page05/page05.component';
import {Page052Component} from './page052/page052.component';
import {Page051Component} from './page051/page051.component';
import {IndexpageComponent} from './indexpage/indexpage.component';

export const appRoutes=[

  {path:'index',component:IndexpageComponent},
  {path:'product',component:ProductComponent},
  {path:'customer',component:CustomerComponent},
  {path:'page01/:name',component:Page01Component},
  {path:'page02',component:Page02Component},
  {path:'page03/:id',component:Page03Component},
  {path:'page05/:id',component:Page05Component,children:[
      // {path:'',component:Page05Component},
      {path:'page051/:id',component:Page051Component},
      {path:'page052',component:Page052Component},
    ]},
  {path:'**',component:Page404Component},
]
