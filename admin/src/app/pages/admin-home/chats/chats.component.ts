import { Component, OnInit,ViewChild,NgZone, ChangeDetectorRef  } from '@angular/core';

 

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  chats =[
    {},
    {},
    {},
    
  ]

  
  constructor() {
}
  ngOnInit(): void {
  

  }
 

<<<<<<< Updated upstream
  cached(item){
 
    

    this.cd.markForCheck();
    setTimeout(() =>{
      this.caching = item
   
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
      this.chats = res.json()
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
    this.http.getData("get-lodi-chats.php?limit="+this.limit+"&page="+pager+"&id="+this.id).subscribe(res =>{
       console.log(res.json())
      this.chats = res.json().chats
      this.chat_count = res.json().chat_count


      loader.style.display = "none"

      this.pagebtntmp =  this.chat_count / this.limit
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

 

 
 
 
// rtpcr(){
//   this.router.navigate(["admin-home/"])
// }


 
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
    this.chats = res.json()
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
 
 
 
 

gotochats(){
  this.router.navigate(["admin-home/chats"])
}



=======
>>>>>>> Stashed changes


}

