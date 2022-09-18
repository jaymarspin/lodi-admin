import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  lodis: any;
  lodisCount: any;
  transactions_count: any;
  album: any;
  id:any;
  s3 = "https://lodi-bucket.s3.ap-southeast-1.amazonaws.com/"

  constructor(public http: HttpRequestService) { }

  clone_box = [
    {},
    {},
    {},
    {}
  ]


  ngOnInit(): void {
    this.getData()
      this.getprofile()
    
  }


  getData(){
    var loadercard = document.getElementById('loadingcard').setAttribute('style','display:block;')
    this.http.getData("lodi-admin/get-fan-transaction.php").subscribe(res =>{
      var loadercard = document.getElementById('loadingcard').setAttribute('style','display:none;')
      console.log(res)
      this.lodis = res.json().transactions
      console.log(this.lodis)
      this.transactions_count = res.json().transactions_count
      this.id = res.json().transaction.id
      
    }
    )
    
  }
  getprofile(){
    this.http.getData(`lodi-admin/get-profs.php?&limit=${50}&page=${1}`).subscribe(res =>{
      this.album = res.json().album
      console.log(res)
    })
   }

}
