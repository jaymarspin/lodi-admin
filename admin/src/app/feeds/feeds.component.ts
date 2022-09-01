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

  constructor(public http: HttpRequestService) { }

  clone_box = [
    {},
    {},
    {},
    {}
  ]


  ngOnInit(): void {
    this.getData()
      
    
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
    this.getprofile(this.id)
  }
  getprofile(id){
    this.http.getData(`lodi-admin/get-profs.php?id=${id}&limit=${50}`).subscribe(res =>{
      this.album = res.json().album
    })
   }

}
