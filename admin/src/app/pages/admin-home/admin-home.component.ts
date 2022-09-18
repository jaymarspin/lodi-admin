import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {AutologoutService} from '../../services/autologout.service'


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  title = 'sidenav';

  isSideNavCollapsed = false;
  isscreenWidth = 0;
  constructor(private router: Router,private autologout: AutologoutService) { }

  ngOnInit(): void {
    this.autologout

    if(!localStorage.getItem("userid")){
      this.router.navigate(['signin'])
    }
    // else if(localStorage.getItem("userid")){
    //   this.router.navigate(['client-home'])
    // }
  }

  route($event){

    this.router.navigate([$event]);


  }
  onToggleSideNav(data:SideNavToggle): void{
    this.isscreenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  getBodyClass(){
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed'
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
