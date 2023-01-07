import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { of } from 'rxjs';
import Swal from 'sweetalert2'
import { HttpRequestService } from '../../services/http-request.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  key = 1000
  username:any;
  password:any;

  constructor(private router: Router,private service: HttpRequestService) {

    
   }

  ngOnInit(): void {
    if(localStorage.getItem("userid")){
      this.router.navigate(['admin-home'])
    }
    this.jque()

  }

  jque(){
    // var $:any;
    // $('#forget-credentials').modal('hide')
    
  }
  openclose = true;
  openclosed(){
    this.openclose = !this.openclose
    if(!this.openclose){
      $('#video').animate({
        'height':'20vw'
      },'fast')
    }
    if(this.openclose){
      $('#video').animate({
        'height':'0'
      },'fast')
    }
  }

  login(){
    let data = {
      username: this.username,
      password: this.password,
          
    }
    if(this.username === ""){this.username = undefined;}
    if(this.password === ""){this.password = undefined;}
    if(this.username === undefined){
      console.log('it works')
      $('.input').css({
        'display':'block',
      })
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or password is invalid',
        footer: '<span>Try again!</span>',
        timer:1000,
        showCancelButton:false,
        showConfirmButton:false,
        })
    }
    if(this.password === undefined){
      console.log('it works')
      $('.input').css({
        'display':'block',
      })
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or password is invalid',
        footer: '<span>Try again!</span>',
        timer:1000,
        showCancelButton:false,
        showConfirmButton:false,
        })
    }
    console.log(data)
    var loader = document.getElementById("cover-spin")
    loader.style.display = "block"
    this.service.postData("lodi-admin/signin.php",data).subscribe(res =>{
      console.log(this.username)
      console.log(res)
      let message = res.json().message     
      if(message === "success"){  
        this.service.userid = res.json().userid
        localStorage.setItem("userid",res.json().userid);
        localStorage.setItem("role",res.json().role);
        this.router.navigate(['admin-home'])
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username or password is invalid',
          footer: '<span>Try again!</span>',
          timer:1000,
          showCancelButton:false,
          showConfirmButton:false,
          })
        }
      loader.style.display = "none"
    })
  }
}


