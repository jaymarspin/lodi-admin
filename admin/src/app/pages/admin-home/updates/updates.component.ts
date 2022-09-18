 
import { Component, OnInit,ViewChild,NgZone, ChangeDetectorRef  } from '@angular/core';
import pdfjs from 'jspdf';
 import { Router } from '@angular/router'
 import { ServiceService } from '../../../services/service.service'
 import { HttpRequestService} from '../../../services/http-request.service'

 import Swal from 'sweetalert2' 
import * as $ from 'jquery'
import { AngularFileUploaderComponent } from "angular-file-uploader";
 

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  @ViewChild('fileUpload1')

  loader:any
  customers = 6546798
  updates = Array()
  updatescount:number
  base64: any



   search:string
   searchpass:boolean = false


   page:number
   limit:number
   pagebtntmp:any
   pagebtn:any

  
  


    filter:any

   usershow:boolean = false
  
 
 

 
 


resetVar:boolean = false
caching:any

teaserplay:any

dmamount:any
videogreetingsamount
fansignamount
 
private fileUpload1:  AngularFileUploaderComponent;
  constructor(private cd: ChangeDetectorRef,
    private zone: NgZone,private router: Router,public service: ServiceService,public http: HttpRequestService) {
    this.page = 1
    this.limit = 50
    this.pagebtn = Array()
    this.filter = Array()


    
   }
  ngOnInit(): void {
    $(() =>{
      
     
      $.getScript("assets/bootstrap-fileinput/js/fileinput.min.js" )
      $('body #lodiinfo').on('hidden.bs.modal',  () => {
        
    });
     
    })

    
    this.getdata(this.page)

    


  }
  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  cached(item){
    delete(this.teaserplay)
    console.log(item)
 
    
    
    this.cd.markForCheck();
    setTimeout(() =>{
      this.caching = item
    if(item.teaser.length > 0){
      this.teaserplay = item.teaser[0].teaser
    } 
      this.cd.detectChanges()
    },100)
     
    
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
    this.http.getData("lodi-admin/search-updates.php?search="+this.search).subscribe(res =>{
      console.log(res)
      // this.lodis = res.json()
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
    this.http.getData("lodi-admin/get-updates.php?limit="+this.limit+"&page="+pager).subscribe(res =>{
       
      this.updates = res.json().updates
      console.log(this.updates)
      this.updatescount = res.json().updates_count


      loader.style.display = "none"

      this.pagebtntmp =  this.updatescount / this.limit
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


delete(id){
  let data = {
    id: id,
    userid: localStorage.getItem("userid")
  }
 
  var c = confirm("Are you sure?")
    if(c){
      this.http.postData("lodi-admin/delete-lodi.php",data).subscribe(res =>{
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
 

 
 
 
// rtpcr(){
//   this.router.navigate(["admin-home/"])
// }


 
 

 
cacheData(item){
  console.log(item)
  this.caching = item
}

updatedescription:any
uploadupdate(){

 
  //  $.post( this.http.server+"teaser-upload.php",{ "video": $("#video").val() },  res =>{
  //   console.log(res)
  // })

 
  let data = {
    media: this.teaserarr[0],
    description: this.updatedescription
  }
  this.loader = document.getElementById("cover-spin")

      this.loader.style.display = "block"
  this.http.postData("lodi-admin/add-updates.php",data).subscribe(res =>{
    console.log(res)
    // let result = res.json()
    this.loader.style.display = "none"
  })


  }

 getBase64(e) {
  var file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
    let image = e.target.result;
    console.log(image);
    };
  reader.readAsDataURL(file);
  
}
teaserarr:any = new Array()
handleUpload(event) {
  $(".harang").css({display: "none"})

  $(".fileinput-remove, fileinput-remove-button").click(() =>{
   $(".harang").css({display: "block"})
    
  })
   
 for(var i =0;i < event.target.files.length;i++){
    
   const file = event.target.files[i];
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = () => {
       console.log
       this.teaserarr.push({
         base64: reader.result,
         name: file.name
       }) 
       
       
   };

   console.log(this.teaserarr)

   setInterval((e) =>{
     $(".kv-zoom-thumb").css({display: "none"}) 
   },500)
  
    
  
   
 }

 
 
 
}

 
 
 
}

