import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  lodis:any =[];
  lodisCount: any;
  transactions_count: any;
  album: any;
  id:any;
  value:any
  s3 = "https://lodi-bucket.s3.ap-southeast-1.amazonaws.com/"
  observe = new Observable((observes)=>{
    observes.next('1')
  })
  constructor(public http: HttpRequestService) { }

  clone_box = [
    {},
    {},
    
  ]


  ngOnInit(): void {
    this.observe.subscribe((res)=>{
      console.log(res)
      this.value = res
    })
    $('#loadingcard').css({
      'display':'block'
    })
    
    this.getData()
    this.getprofile()
    this.jque()
  }

  ress:any = [];
 getData(){
  this.http.getData("lodi-admin/get-fan-transaction.php").subscribe({next:res =>{
      this.lodis = res.json().transaction
      // this.lodis.pipe(map(data =>{ return data})).subscribe({next:res =>{
      //   console.log(res)
      // }})
      $('#loadingcard').css({
        'display':'none'
      })
      $('#fed-card').css({
        'display':'block'
      })
      console.log(res)
      console.log(this.ress)
    }})

    this.http.getData("lodi-admin/get-fan-transaction.php").subscribe(data =>{

    },err =>{
      
    })
    
      // this.lodis.pipe(map(data =>{ return data})).subscribe({next:res =>{
      //   console.log(re})
    
  }
  getprofile(){
    this.http.getData(`lodi-admin/get-profs.php?&limit=${50}&page=${1}`).subscribe(res =>{
      this.album = res.json().album
      console.log(res)
    })
   }
   scrollY:any;
   jque(){
    this.scrollY = $(document).scrollTop()
    $(document).scroll(function(){
      if($(this).scrollTop() >= 41){
        $('.navbar-left-2').animate({
          'top':'4.5vw'
        },'fast')
        $('.navnav').animate({
          'top':'0'
        },'fast')
      }
      if($(this).scrollTop() <= 40){
        $('.navbar-left-2').animate({
          'top':'10vw'
        },'fast')
        $('.navnav').animate({
          'top':'5vw'
        },'fast')
      }
    })
   }


}
