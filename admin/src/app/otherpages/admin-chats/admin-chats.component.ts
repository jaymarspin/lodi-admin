import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-chats',
  templateUrl: './admin-chats.component.html',
  styleUrls: ['./admin-chats.component.scss']
})
export class AdminChatsComponent implements OnInit {
  range = [0,1,2,3,4,5];


  constructor() { }

  ngOnInit(): void {
  }

}
