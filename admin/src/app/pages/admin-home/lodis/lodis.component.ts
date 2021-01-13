import { Component, OnInit,ViewChild,NgZone, ChangeDetectorRef  } from '@angular/core';
import pdfjs from 'jspdf';
 import { Router } from '@angular/router'
 import { ServiceService } from '../../../services/service.service'
 import { HttpRequestService} from '../../../services/http-request.service'
 

import Swal from 'sweetalert2' 
import * as $ from 'jquery'
import { AngularFileUploaderComponent } from "angular-file-uploader";
@Component({
  selector: 'app-lodis',
  templateUrl: './lodis.component.html',
  styleUrls: ['./lodis.component.scss']
})
export class LodisComponent implements OnInit {

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



    filter:any

   usershow:boolean = false
  
   categories:any = Array()
   userType:any

   filtergo:boolean = false

   teaser:any



   afuConfig = {
    multiple: false,
    formatsAllowed: ".mp4,.png",
    
    maxSize: "50",
    uploadAPI:  {
      url:this.http.server+"teaser-upload.php",
      method:"POST",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8", 
      },
      params: {
         
      },
      responseType: 'stringify',
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

resetVar:boolean = false
caching:any

teaserplay:any
 
private fileUpload1:  AngularFileUploaderComponent;
  constructor(private cd: ChangeDetectorRef,
    private zone: NgZone,private router: Router,public service: ServiceService,public http: HttpRequestService) {
    this.page = 1
    this.limit = 50
    this.pagebtn = Array()
    this.filter = Array()


    this.categories.push({
      title: "Actor",
      value: "actor",
      css: "unselected"
    })
    this.categories.push({
      title: "Actress",
      value: "actress",
      css: "unselected"
    })
    this.categories.push({
      title: "Youtuber",
      value: "youtuber",
      css: "unselected"
    })
    this.categories.push({
      title: "Singer",
      value: "singer",
      css: "unselected"
    })
    this.categories.push({
      title: "Rapper",
      value: "rapper",
      css: "unselected"
    })
    this.categories.push({
      title: "TV Host",
      value: "tvhost",
      css: "unselected"
    })
    this.categories.push({
      title: "News Anchor",
      value: "newsanchor",
      css: "unselected"
    })
    this.categories.push({
      title: "Media",
      value: "media",
      css: "unselected"
    })
    this.categories.push({
      title: "DJ",
      value: "dj",
      css: "unselected"
    })
    this.categories.push({
      title: "Athletes",
      value: "athletes",
      css: "unselected"
    })
    this.categories.push({
      title: "Streamer",
      value: "streamer",
      css: "unselected"
    })
    this.categories.push({
      title: "Influencer",
      value: "influencer",
      css: "unselected"
    })
    this.categories.push({
      title: "Politicians",
      value: "politicians",
      css: "unselected"
    })
    this.categories.push({
      title: "Spiritual",
      value: "spiritual",
      css: "unselected"
    })
    this.categories.push({
      title: "Wealth Coach",
      value: "wealthcoach",
      css: "unselected"
    })
    this.categories.push({
      title: "Business Tycoon",
      value: "businesstycon",
      css: "unselected"
    })

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
    this.http.getData("search-lodis.php?search="+this.search).subscribe(res =>{
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
    delete(this.filterarray)
    this.filtergo = false
  }

  getdata(pager){
    this.pagebtn = Array()
    var loader = document.getElementById("cover-spin")
    loader.style.display = "block"
    this.http.getData("get-lodis.php?limit="+this.limit+"&page="+pager).subscribe(res =>{
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
 

 
 
 
// rtpcr(){
//   this.router.navigate(["admin-home/"])
// }


updateLodi(){
  let data = {
    fname: this.fname,
    lname: this.lname,
    email: this.email,
    contact: this.contact,
    social: this.social,
    followers: this.followers,
    id: this.updateid,
    active: this.approved,
    category: this.category

  }

  this.http.postData("update-lodi.php",data).subscribe(res =>{
    let result = res.json()
    if(result.message == "success"){
    delete(this.filterarray)
      this.refreshed()
    }
  })

}
filterarray:any = Array()
cachedfilter(e,i){
   

  if(this.categories[i].css == "unselected"){
    this.categories[i].css = 'selected'
  }else{
    this.categories[i].css = 'unselected'
  }
  delete(this.filterarray)
  this.filterarray = Array()
  for(var ii = 0;ii < this.categories.length;ii++){
    if(this.categories[ii].css == "selected"){
      this.filterarray.push(this.categories[ii].value)
    }
    
  }

  console.log(this.filterarray)
}


filternow(){
  this.filtergo = true
  if(this.filterarray.length > 0){  
    let data = {
      filterarray: this.filterarray
  }

  this.http.postData("filterlodi.php",data).subscribe(res =>{
    this.lodis = res.json()
    this.searchpass = true
  })
  }else{
    this.refreshed()
  }


  
  
}
 
cacheData(item){
  console.log(item)
  this.caching = item
}
uploadteaser(){

 
  //  $.post( this.http.server+"teaser-upload.php",{ "video": $("#video").val() },  res =>{
  //   console.log(res)
  // })

 
  let data = {
    teaser: this.teaserarr[0],
    id: this.caching.id
  }
  this.http.postData("teaser-upload.php",data).subscribe(res =>{
    console.log(res)
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

