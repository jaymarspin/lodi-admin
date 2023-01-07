import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import "rxjs"
import "rxjs-compat"
import { Router } from '@angular/router'

import { apiURL, environment } from '../../environments/environment';
import axios from 'axios'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  server: string
  servers:string = environment.beanstalk;
  brgyid:number
  userid:number

  constructor(public http: Http,public router: Router,public https:HttpClient) {
    // this.server = apiURL
    this.server = environment.server2;
   }

  postData(file,body){
    let type = "application/json; charset=UTF-8"

    let headers = new Headers({'Content-Type': type
  })
    let options = new RequestOptions({headers: headers})

    return this.http.post(this.server + file, JSON.stringify(body), options).map(res => res)

  }
  public getDataFull(link){
    return this.https.get<any[]>(this.servers+ link)
  }
  public  getData(file){
    return this.http.get(this.server+file)
  }



  axiospost(file,data){
     console.log(data)

    axios({
      method: 'post',
      url: this.server+file,
      data: data,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
  }

}
