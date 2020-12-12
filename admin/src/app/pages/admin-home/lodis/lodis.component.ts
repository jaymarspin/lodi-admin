import { Component, OnInit } from '@angular/core';
import pdfjs from 'jspdf';
 import { Router } from '@angular/router'
 import { ServiceService } from '../../../services/service.service'
 import { HttpRequestService} from '../../../services/http-request.service'
 

import Swal from 'sweetalert2' 
 
@Component({
  selector: 'app-lodis',
  templateUrl: './lodis.component.html',
  styleUrls: ['./lodis.component.scss']
})
export class LodisComponent implements OnInit {
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
  constructor(private router: Router,public service: ServiceService,public http: HttpRequestService) {
    this.page = 1
    this.limit = 50
    this.pagebtn = Array()
    this.filter = Array()


    this.categories.push({
      title: "Singer",
      value: "singer",
      css: "unselected"
    })
    this.categories.push({
      title: "Singer",
      value: "singer",
      css: "unselected"
    })
    this.categories.push({
      title: "Singer",
      value: "singer",
      css: "unselected"
    })
    this.categories.push({
      title: "Singer",
      value: "singer",
      css: "unselected"
    })
    this.categories.push({
      title: "Singer",
      value: "singer",
      css: "unselected"
    })
 

   }
  ngOnInit(): void {
 
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

    console.log(this.category)
  }

  
 filtercategory(){
  alert("adwada")
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
      this.refreshed()
    }
  })

}

cachedfilter(e,i){
  console.log(i)
}
 




}
