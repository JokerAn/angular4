
import {ProductComponent} from './product/product.component';
import {CustomerComponent} from './customer/customer.component';
import {Page01Component} from './page01/page01.component';
import {Page02Component} from './page02/page02.component';
import {Page404Component} from './page404/page404.component';
import {Page03Component} from './page03/page03.component';

export const appRoutes=[
  {path:'product',component:ProductComponent},
  {path:'customer',component:CustomerComponent},
  {path:'page01/:name',component:Page01Component},
  {path:'page02',component:Page02Component},
  {path:'page03/:id',component:Page03Component},
  {path:'**',component:Page404Component},
]
