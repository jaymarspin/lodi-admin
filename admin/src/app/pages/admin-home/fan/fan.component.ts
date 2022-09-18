import { Component, OnInit,ViewChild,NgZone, ChangeDetectorRef  } from '@angular/core';
import pdfjs from 'jspdf';
 import { Router } from '@angular/router'
 import { ServiceService } from '../../../services/service.service'
 import { HttpRequestService} from '../../../services/http-request.service'
 

import Swal from 'sweetalert2' 
import * as $ from 'jquery'
import { AngularFileUploaderComponent } from "angular-file-uploader";
@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.scss']
})
export class FanComponent implements OnInit {

  @ViewChild('fileUpload1')
  customers = 6546798
  lodis = Array()
  lodisCount:number
  base64: any



   search:string
   searchpass:boolean = false


   page:number
   limit:number
   pagebtntmp:any
   pagebtn:any

  
    fname:any = ""
    lname:any = ""
    contact:any = ""
    email:any = ""
    social:any = ""
    followers:any = ""
    approved:any = 0
    updateid:any
    category:any = ""





   usershow:boolean = false
  

   userType:any



 
resetVar:boolean = false
caching:any
 
  constructor(private cd: ChangeDetectorRef,
    private zone: NgZone,private router: Router,public service: ServiceService,public http: HttpRequestService) {
    this.page = 1
    this.limit = 50
    this.pagebtn = Array()
   

   }
  ngOnInit(): void {
    $(() =>{
      
     
      $.getScript("assets/bootstrap-fileinput/js/fileinput.min.js" )
      $('body #lodiinfo').on('hidden.bs.modal',  () => {
        
    });
     
    })

   
    this.userType = localStorage.getItem("role")
    this.getdata(this.page)

    


  }
   

  cached(item){

    console.log(item)
    this.fname = item.fname
    this.lname = item.lname
    this.email = item.email
    this.contact = item.contact
    this.social = item.social
    this.followers = item.followers
    this.updateid = item.id
    this.approved = item.active
    this.category = item.category

    

    this.cd.markForCheck();
  
     
    
  }

 








  searchact(){


    if(!this.search){


      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your searchbox is empty',
        footer: '<span>You need to fill the searchbox to search for something</span>'
      })

    }else{
      if(!this.search.trim()){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your searchbox is empty',
          footer: '<span>You need to fill the searchbox to search for something</span>'
        })
      }else{
        var loader = document.getElementById("cover-spin")
    loader.style.display = "block"
    this.http.getData("lodi-admin/search-lodis.php?search="+this.search).subscribe(res =>{
      console.log(res)
      this.lodis = res.json()
      this.searchpass = true
      loader.style.display = "none"
    })
      }

    }

  }
  refreshed(){
    this.getdata(this.page)
    this.searchpass = false
    delete(this.search)
 

  }

  getdata(pager){
    this.pagebtn = Array()
    var loader = document.getElementById("cover-spin")
    loader.style.display = "block"
    this.http.getData("lodi-admin/get-fans.php?limit="+this.limit+"&page="+pager).subscribe(res =>{
       console.log(res)
      this.lodis = res.json().lodis
      this.lodisCount = res.json().lodis_count


      loader.style.display = "none"

      this.pagebtntmp =  this.lodisCount / this.limit
      for(var i = 1;i < this.pagebtntmp + 1;i++){
        this.pagebtn.push(i)
      }
    })
  }

  pager(page){
    this.page = page
    this.getdata(page)
  }

 
 

// cacheData(item){
//   this.cached = item
//   console.log(this.cached)
// }


reportData:any
<<<<<<< Updated upstream

=======
navigateFanTransactions($event){
  this.router.navigate([`/admin-home/transactions/id=${$event}`])
}
>>>>>>> Stashed changes

delete(id){
  let data = {
    id: id,
    userid: localStorage.getItem("userid")
  }
 
  var c = confirm("Are you sure?")
    if(c){
      this.http.postData("delete-lodi.php",data).subscribe(res =>{
        let result = res.json()
        if(result.message = "success"){
          this.page = 1
          this.getdata(this.page)
          Swal.fire(
            'Good job!',
            'Successfully deleted',
            'success'
          )
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error occured',
            footer: ' '
          })
        }
      })
    }
  
}
 

 

 
 
cacheData(item){
  console.log(item)
  this.caching = item
}
inactivate(item){
  console.log(item.id)
  Swal.fire({
    title: 'Are you sure?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      const data ={
        id: item.id
      }
      console.log(data)
      this.http.postData(`inactivate-fan.php`,data).subscribe({
        next: data =>{
          console.log(data)
          const result = data.json()
          if(result.message === 'success'){
            Swal.fire(
              'Good job!',
              'Successfully inactivated!',
              'success'
            ).then(() =>{
              this.getdata(this.page)
            })
            
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${result.message}`,
              footer: ''
            })
          }
        },error: err =>{
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err}`,
            footer: ''
          })
        }
      })
    }
  })

}
transactions: any;
transactionsCount: any;
gettransactions(item){
  this.http.getData(`get-transactions.php?id=${item.id}&limit=${50}&page=${1}&filter=action`).subscribe({
    next: data =>{
      setTimeout(() =>{
        const result = data.json()
      this.transactionsCount = result.transactions_count
      this.transactions = result.transactions
    
        this.cd.detectChanges()
      },1000)
      
      
      
    },error: err =>{
      console.log(err)
    }
  })
}


}


