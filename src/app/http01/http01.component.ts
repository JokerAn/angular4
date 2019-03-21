import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http01',
  templateUrl: './http01.component.html',
  styleUrls: ['./http01.component.css']
})
export class Http01Component implements OnInit {
  teacherList = {};
  constructor(private http: HttpClient ) { }
  ngOnInit() {

    // this.http.get('https://release.mtoliv.com/sps/api/v1/teacherGroups/pages?orgId=111111111111111111&pageNum=1&pageSize=15', {
    //   headers : {'Authorization': localStorage.getItem('user_token')},
    // })
    //   .subscribe(result => {
    //
    //     console.log(result);
    //     this.teacherList = result;
    //
    //   },error1 => {
    //     console.log(error1);
    //   });
  }

}
