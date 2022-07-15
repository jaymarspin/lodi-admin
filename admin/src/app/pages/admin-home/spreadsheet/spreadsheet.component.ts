import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss']
})
export class SpreadsheetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  route($event){

    this.router.navigate(["admin-home/spreadsheet/"+$event]);


  }

}
