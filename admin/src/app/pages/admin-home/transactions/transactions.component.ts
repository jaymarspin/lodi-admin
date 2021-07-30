import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { HttpRequestService } from '../../../services/http-request.service';

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

  page: number;
  limit: number;
  pagebtntmp: any;
  pagebtn: any;

  searchpass: boolean = false;
  search;

  
  constructor(
    private activateRoute: ActivatedRoute,
    public service: ServiceService,
    public http: HttpRequestService
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.page = 1;
    this.limit = 50;
    this.pagebtn = Array();
  }

  ngOnInit(): void {
    this.getdata(this.page);
  }
  refreshed() {}
  searchact() {}

  getdata(pager) {
    this.pagebtn = Array();
    var loader = document.getElementById('cover-spin');
    loader.style.display = 'block';
    this.http
      .getData(
        `get-transactions.php?id=${this.id}&limit=${this.limit}&page=${pager}`
      )
      .subscribe((res) => {
        console.log(res);
        this.transactions = res.json().transactions;
        console.log(this.transactions);
        this.transactions_count = res.json().transactions_count;

        loader.style.display = 'none';

        this.pagebtntmp = this.transactions_count / this.limit;
        for (var i = 1; i < this.pagebtntmp + 1; i++) {
          this.pagebtn.push(i);
        }
      });
  }
  redemmedaction(redembool){

  }
}
