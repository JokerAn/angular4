
import {Injectable} from "@angular/core"

@Injectable()
export class Service {
  anyData='servicessssssss';//公共变量
  someFunction() {//公共方法
    alert(1);
  }
  copy=function(res){
    return JSON.parse(JSON.stringify(res));
  }
}
