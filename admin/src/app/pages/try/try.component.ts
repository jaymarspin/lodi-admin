import { Component, Inject, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent implements OnInit {
  lodis = Array()
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(public http: HttpRequestService,public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    
  }
  openDialog(stack){
    this.dataSource = stack.name
    const item = this.dataSource;
    this.dialog.open(TryHtml,{
      width:'250px',
      data:{
        name
      }
    })
    console.log(stack);
  
}

}
@Component({
  selector:'try',
  templateUrl:'./try.html',
})
export class TryHtml implements OnInit{
  item:any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(public dialogRef: MatDialogRef<TryHtml>,@Inject(MAT_DIALOG_DATA)public data:PeriodicElement) {}
}