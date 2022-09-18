import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useroption',
  templateUrl: './useroption.component.html',
  styleUrls: ['./useroption.component.scss']
})
export class UseroptionComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  route($event){

    this.router.navigate(['admin-home/useroption/'+$event]);


  }
}
