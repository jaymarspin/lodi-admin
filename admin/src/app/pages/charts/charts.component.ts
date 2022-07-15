import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface Tile {
  icon:string;
  cols:number;
  rows:number;
  text:string;
  description:string;
  value:number;
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  Fans: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'andrea', weight: 1.0079, Fans:123},
  {position: 2, name: 'cong', weight: 4.0026, Fans:12213},
  {position: 3, name: 'catriona', weight: 6.941, Fans:1236456},
  {position: 4, name: 'duterte', weight: 9.0122, Fans:121233},
  {position: 5, name: 'dsadasd', weight: 10.811, Fans:13213},
  {position: 6, name: 'lkl;kl;', weight: 12.0107, Fans:23},
  {position: 7, name: 'sadlkasl', weight: 14.0067, Fans:12345},
  {position: 8, name: 'qweqwe', weight: 15.9994, Fans:123243},
  {position: 9, name: 'asdlksakld', weight: 18.9984, Fans:42323},
  {position: 10, name: 'ewqhek', weight: 20.1797, Fans:5423},
];
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  number= 12;
  supervisor_account='User activity this month';
  visibility ='Page views';
  cash = 'Total in money';
  mail = 'number of emails'

  tiles: Tile[] = [
    {text: '100,200', cols: 1, rows: 1, icon:'supervisor-account',description:this.supervisor_account,value:40},
    {text: '100,400', cols: 1, rows: 1, icon: 'visibility',description:this.visibility,value:70},
    {text: '5,000', cols: 1, rows: 1, icon: 'payments',description:this.cash,value:10},
    {text: '50', cols: 1, rows: 1, icon: 'mail',description:this.mail,value:90},
  ];
  
 
  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart('myChart', {
    type: 'line',
    data: {
        labels: ['january', 'february', 'march', 'april', 'may', 'june','july'],
        datasets: [{
            label: '# of Lodis',
            data: [12, 19, 3, 5, 2, 3,13],
            backgroundColor: ['gold'
            ],
            borderColor: ['gold'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var data = new Chart('piechart',{
  type:'pie',
  data:{
  labels:['lodis','fans','admins'],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]}
});


  }
 
}
