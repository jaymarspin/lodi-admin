 
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../../../services/http-request.service'
import pdfjs from 'jspdf';
import {MedicalService}  from '../../../report-print/medical.service'
import { navigationINFORMATION } from './navigationData';
import { counts } from './navigationData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navigation = navigationINFORMATION;
  @Output() valueChange = new EventEmitter();

  usershow:boolean = false

  reporttype:string


  doc:any
  baseY:any = 150
  cached:any

  certificate:any
   certificateSelect = Array()

   from:any

   to:any
  constructor(public medical: MedicalService,private router:Router,private http: HttpRequestService) {
    this.certificate = "singer"
    this.certificateSelect.push({value: "singer", title: "Singer"})
   }

  ngOnInit(): void {
    if(localStorage.getItem("role")){
      if(localStorage.getItem("role") == "1"){
        this.usershow = true
      }
    }else{
      localStorage.clear()
      this.router.navigate([''])
    }

    this.getCount();
  }
  menu(nagivate){
  
    this.valueChange.emit(nagivate)
  }
  signout(){
    localStorage.clear()
    this.router.navigate([''])
  }
  count:any;
  SumCount:any;
  lodistatus:any;
  fanstatus:any;
  lodi_status:any;
  fan_status:any;
  update_count:any;
  getCount(){
    this.http.getData(`lodi-admin/get-count.php?limit=${50}&page=${1}`).subscribe({
      next:res => {
        this.count = res.json();
        const fans = res.json().fans_count;
        const lods = res.json().lodis_count;
        const update = res.json().upate_count;
        this.SumCount = fans + lods + update;
        if(lods < 50 ){
          this.lodi_status = 'Decreasing';
          this.lodistatus = 'danger';
        }
        if(fans < 50 ){
          this.fan_status = 'Decreasing';
          this.fanstatus = 'danger';
        }
        if(lods > 50){
          this.lodi_status = 'Increasing';
          this.lodistatus = 'success';
        }
        if(fans > 50){
          this.fan_status = 'Increasing';
          this.fanstatus = 'success';
        }
      }
    })
  }

  report(){
    this.doc = new pdfjs('p','mm','a4');
      var img =  new Image()
  
      img.src = 'assets/logo/barmm-logo.png'
      this.doc.addImage(img, 'png'  ,8, 10, 48, 48);
  
  
      img.src = 'assets/logo/moh-logo.png'
      this.doc.addImage(img, 'jpg'  ,155, 10, 48, 48);
   
  
      // img.src = 'assets/logo/moh-logo.png'
      // this.doc.addImage(img, 'png'  ,74, 18, 60, 10);
  
    // img.src = 'assets/logo/moh-logo.png'
    // this.doc.addImage(img, 'jpg'  ,83, 10, 50, 20);
  
   
  
  
  
  
  this.doc.setFont('Times New Roman','bold');
  this.doc.setFontSize(20);
  this.doc.text('MINISTRY OF HEALTH',this.doc.internal.pageSize.getWidth()/2, 30, { align: "center" });
  
  
  this.doc.setFont('Times New Roman','normal');
  this.doc.setFontSize(9);
  this.doc.text('BANGSAMORO AUTONOMOUS REGION IN MUSLIM MINDANAO',this.doc.internal.pageSize.getWidth()/2, 35, { align: "center" });
  
  
  
  
  this.doc.setFont('Times New Roman','bold');
  this.doc.setFontSize(14);
  this.doc.text('',this.doc.internal.pageSize.getWidth()/2, 40, { align: "center" }),this.doc.setFontSize(13);
  
  
  // this.doc.setFont('Times New Roman','normal');
  // this.doc.setFontSize(14);
  // this.doc.text('Barangay Bagua Mother',this.doc.internal.pageSize.getWidth()/2, 45, { align: "center" });
  
  // this.doc.setFont('Times New Roman','normal');
  // this.doc.setFontSize(14);
  // this.doc.text('Cotabato City',this.doc.internal.pageSize.getWidth()/2, 50, { align: "center" });
  
  // this.doc.setFont('Times New Roman','normal');
  // this.doc.setFontSize(14);
  // this.doc.text('Tel No.557-1885',this.doc.internal.pageSize.getWidth()/2, 55, { align: "center" });
  
  
  this.doc.setFont('Calibri','bold');
  this.doc.setFontSize(22);
  this.doc.text('___________________________________________' ,this.doc.internal.pageSize.getWidth()/2,63, { align: "center" }),this.doc.setFontSize(12);
  
  
  this.doc.setFont('Arial Rounded','bold');
  
  if(this.from && this.to && this.certificate){
   
    let data = {
      from: this.from,
      to: this.to
    }
    this.http.postData("get-report.php",data).subscribe(res =>{
  
      console.log(res)
       let result = res.json()
      
  
  
  
      this.medical.viewcert(this.doc,result,this.from,this.to,this.certificate)
  
  
      })
  
  
  }
  
  }

  

 
}
