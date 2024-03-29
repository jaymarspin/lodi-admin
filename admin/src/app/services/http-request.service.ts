import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import "rxjs"
import "rxjs-compat"
import { Router } from '@angular/router'

import { apiURL } from '../../environments/environment';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  server: string
  brgyid:number
  userid:number
  constructor(public http: Http,public router: Router) {
    this.server = apiURL

   }

  postData(file,body){
    let type = "application/json; charset=UTF-8"

    let headers = new Headers({'Content-Type': type
  })
    let options = new RequestOptions({headers: headers})

    return this.http.post(this.server + file, JSON.stringify(body), options).map(res => res)

  }

  getData(file){

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
