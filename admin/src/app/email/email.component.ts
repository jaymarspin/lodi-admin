import { Component, OnInit } from '@angular/core';

export interface Optioninbox {
  name:string;
}


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  optioninboxs:Optioninbox[] = [
    {name:'Inbox'},
    {name: 'Sent'},
    {name: 'Draft'},
    {name: 'Spam'},
    {name: 'Trash'},
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
