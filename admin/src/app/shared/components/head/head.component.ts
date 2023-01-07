import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from "moment"
import { HttpRequestService } from 'src/app/services/http-request.service';
import { NavData } from './variables'

interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  @Output() onToggleSidenav:EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = NavData;
  album:any;
  active = 'active'
  timestamp:any
  usershow:boolean = false
  name:string;
  
  @Output() valueChange = new EventEmitter();
  @HostListener('window:resize',['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false
    }
  }
  constructor(private router:Router,public http:HttpRequestService) { }
  ngOnInit(): void {
    // this.timestamp = moment().format('LLLL');
    // setInterval(() =>{
    //   this.timestamp = moment().format('LLLL');
    // },60000)


    // if(localStorage.getItem("role")){
    //   if(localStorage.getItem("role") == "1"){
    //     this.usershow = true
    //   }
    // }
    this.screenWidth = window.innerWidth;



  }
  head(){


    localStorage.clear();
   this.router.navigate(['sign'])


  }
  signout(){
    localStorage.clear()
    this.router.navigate([''])
  }

  menu(nagivate){
  
    this.valueChange.emit(nagivate)
  }

  out(){

    localStorage.clear();
    this.router.navigate(['sign'])
   }
   navigate($event){
    this.router.navigate([$event])
   }
   
   toggleCollapse():void{
    this.collapsed = !this.collapsed
    this.onToggleSidenav.emit({
      collapsed:this.collapsed,
      screenWidth:this.screenWidth,
    })
   }
   navigates($event){
  
    this.router.navigate([$event])
    console.log($event)
   }

}
