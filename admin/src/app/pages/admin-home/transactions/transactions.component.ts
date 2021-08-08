import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { HttpRequestService } from '../../../services/http-request.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  loader: any;

  transactions = Array();
  transactions_count: number;
  id: any;
  lodiid:any

  page: number;
  limit: number;
  pagebtntmp: any;
  pagebtn: any;

  searchpass: boolean = false;
  search;

  mybanks: any;
  
  chosenAccount: any;

  redemmable:any
  constructor(
    private activateRoute: ActivatedRoute,
    public service: ServiceService,
    public http: HttpRequestService
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.lodiid = this.activateRoute.snapshot.paramMap.get('lodiid');
    this.page = 1;
    this.limit = 50;
    this.pagebtn = Array();
    this.redemmable = 0
  }

  ngOnInit(): void {
    this.getdata(this.page).then(() =>{
      this.getBanks().then(() =>{
        
      })
    })
   
  }
  refreshed() {}
  searchact() {}


 async getBanks(){
   await this.http.getData(`get-banks.php?id=${this.lodiid}`).subscribe({
      next: data =>{
        
        this.mybanks = data.json().bankdetails
        this.mybanks = JSON.parse(this.mybanks)
        console.log(this.mybanks)
      }, error: err =>{
        console.log(err)
      }
    })
  }

  

 async getdata(pager) {
    this.pagebtn = Array();
    var loader = document.getElementById('cover-spin');
    loader.style.display = 'block';
  await  this.http
      .getData(
        `get-transactions.php?id=${this.id}&limit=${this.limit}&page=${pager}`
      )
      .subscribe((res) => {
        this.redemmable = 0
        this.transactions = res.json().transactions;
        console.log(this.transactions);
        this.transactions_count = res.json().transactions_count;

        loader.style.display = 'none';

        this.pagebtntmp = this.transactions_count / this.limit;
        for (var i = 1; i < this.pagebtntmp + 1; i++) {
          this.pagebtn.push(i);
        }

        this.transactions.forEach(element => {
          console.log(element.accepted)
          if(element.redemmed === false){
            this.redemmable += parseFloat(element.value)
          }
          
          
        });
      });
  }
  redemmedaction(e, id) {
    
    let data = {
      request_id: this.id,
      value: e.detail.value,
      transaction_id: id,
    };
    if(id === 0){
      data = {
        request_id: this.id,
        value: 1,
        transaction_id: 0,
      };
    }
    var loader = document.getElementById('cover-spin');
    loader.style.display = 'block';

    
    console.log(data)
    this.http.postData('update-redemmed.php', data).subscribe({
      next: (data) => {
        loader.style.display = 'none';
        const response = data.json();
        if (response.message === 'success') {
          this.getdata(this.page);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
            footer: '',
          });
        }
      },
      error: (err) => {
        loader.style.display = 'none';
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'error occures',
          footer: err,
        });
      },
    });
  }
   
}
