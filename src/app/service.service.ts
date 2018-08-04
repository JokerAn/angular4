
import {Injectable} from "@angular/core"

@Injectable()
export class Service {
  anyData='service';//公共变量
  someFunction() {//公共方法
    alert(1);
  }
}
