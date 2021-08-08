import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { HttpRequestService } from '../../../services/http-request.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-redeem-requests',
  templateUrl: './redeem-requests.component.html',
  styleUrls: ['./redeem-requests.component.scss']
})
export class RedeemRequestsComponent implements OnInit {
  loader: any;

  redeem_requests = Array();
  redeem_requests_count: number;
  id: any;

  page: number;
  limit: number;
  pagebtntmp: any;
  pagebtn: any;

  searchpass: boolean = false;
  search;

  mybanks: any;
  
  chosenAccount: any;
  constructor(
    private activateRoute: ActivatedRoute,
    public service: ServiceService,
    public http: HttpRequestService,
    private router: Router
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.page = 1;
    this.limit = 50;
    this.pagebtn = Array();
  }

  ngOnInit(): void {
    this.getdata(this.page).then(() =>{
      
    })
   
  }
  refreshed() {}
  searchact() {}


 async getBanks(){
   await this.http.getData(`get-banks.php?id=${this.id}`).subscribe({
      next: data =>{
        
        this.mybanks = data.json().bankdetails
        this.mybanks = JSON.parse(this.mybanks)
        console.log(this.mybanks)
      }, error: err =>{
        console.log(err)
      }
    })
  }

  viewTransaction(id){
   
    this.router.navigate([`admin-home/transactions/${id}/${this.id}`])
  }

  

 async getdata(pager) {
    this.pagebtn = Array();
    var loader = document.getElementById('cover-spin');
    loader.style.display = 'block';
  await  this.http
      .getData(
        `get-redeem-requests.php?id=${this.id}&limit=${this.limit}&page=${pager}`
      )
      .subscribe((res) => {
        this.redeem_requests = res.json().redeem_requests;
        console.log(this.redeem_requests);
        this.redeem_requests_count = res.json().transactions_count;

        loader.style.display = 'none';

        this.pagebtntmp = this.redeem_requests_count / this.limit;
        for (var i = 1; i < this.pagebtntmp + 1; i++) {
          this.pagebtn.push(i);
        }
      });
  }
  
 
}
