import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

interface searchBox{
  collapsed:boolean,
  screenWidth:number,
}


@Component({
  selector: 'app-top-head',
  templateUrl: './top-head.component.html',
  styleUrls: ['./top-head.component.scss']
})
export class TopHeadComponent implements OnInit {
  @Output() SearchBoxEmitter:EventEmitter<searchBox> = new EventEmitter();
  collapsed = false;
  screenWidth = 0


  @ViewChild('search') searchElement:ElementRef;


  opensearch_box = false;
  constructor() { }

  ngOnInit(): void {

    

  }

  search_Box(){
    
    this.collapsed = !this.collapsed
    this.SearchBoxEmitter.emit({
      collapsed:this.collapsed,
      screenWidth:this.screenWidth,
    })
  }

  jque(){
    $('#help-sign').click(function clicked(){
      
    })
  }

}
