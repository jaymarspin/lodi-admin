import { Component, OnInit } from '@angular/core';
import pdfjs from 'jspdf';
 import { Router } from '@angular/router'
 import { ServiceService } from '../../../services/service.service'
 import { HttpRequestService} from '../../../services/http-request.service'
 

import Swal from 'sweetalert2' 
@Component({
  selector: 'app-fan-transactions',
  templateUrl: './fan-transactions.component.html',
  styleUrls: ['./fan-transactions.component.scss']
})
export class FanTransactionsComponent implements OnInit {

  constructor(public http: HttpRequestService) { }

  ngOnInit(): void {
    this.getdata().then(() =>{
      
    })
  }

 async getdata(){
  
    var loader = document.getElementById("cover-spin")
    loader.style.display = "block"
  await this.http.getData(`get-fans.php?id=7`).subscribe(res =>{
       console.log(res)
      
    })
  }

}
