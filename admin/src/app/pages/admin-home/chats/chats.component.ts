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
 



}

