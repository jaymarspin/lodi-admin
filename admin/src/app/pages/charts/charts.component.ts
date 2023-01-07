import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { HttpRequestService } from 'src/app/services/http-request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @ViewChild('first-chart') chart:Chart;
  pagebtntmp:any;
  lodisCount:number;
  pagebtn:any;
  lodis = Array();
  limit:number;


  block = [
    {title:'Income Last Year',cash:'₱'+'1,000,500',date:new Date().getMonth(),textColor:'text-success'},
    {title:'your Cash now',cash:'₱'+'900,000',date:new Date().getMonth(),textColor:'text-warning'},
    {title:'Recent Income',cash:'₱'+'20,500',date:new Date().getMonth(),textColor:'text-primary'}
  ]
  page: number;

  constructor(public http:HttpRequestService,public route:Router) { 
    this.limit = 50;
    this.page = 1
  }

  ngOnInit(): void {
    this.chartss()
    this.getDataInfo(this.page)
    
  }
  chartss(){
    const  revenuechart = new Chart('first-chart', {
      type: 'bar',
      data: {
          labels: ['', '', '', '', '', ''],
          datasets: [{
              borderRadius:15,
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              

          }]
      },
      options: {
          plugins:{
            legend: {
                display: false //This will do the task
                
             },tooltip:{
                enabled:false,
            },
          },
          scales: {
              y: {
                  beginAtZero: true,
                  display:false,
              },
              x: {
                  beginAtZero: true,
                  display:false,
              },
          }
          
      }
  });


  const chartincome = new Chart('first-charts', {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill:true,
            tension: 0.4,
            pointBorderColor:'rgb(255,255,255)',
            pointBackgroundColor:'rgb(255,255,255)',
            backgroundColor: [
                'rgb(240, 173, 78)',
                
            ],
            borderColor: [
                'rgb(240, 173, 78)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins:{
            legend: {
                display: false,
             },
          },
        scales: {
            y: {
                beginAtZero: true,
                display:false
            },
            x:{
                beginAtZero: true,
                display:false
            }
        }
    },  
});

  const TotalNetWorth = new Chart('networth', {
    type: 'bar',
      data: {
          labels: ['', '', '', '', '', ''],
          datasets: [{
              borderRadius:15,
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              

          }]
      },
      options: {
          plugins:{
            legend: {
                display: false //This will do the task
                
             },tooltip:{
                enabled:false,
            },
          },
          scales: {
              y: {
                  beginAtZero: true,
                  display:false,
              },
              x: {
                  beginAtZero: true,
                  display:false,
              },
          }
          
      }
  });

  const Total = new Chart('total', {
    type: 'line',
      data: {
          labels: ['', '', '', '', '', ''],
          datasets: [{
              data: [12, 19, 3, 5, 2, 3],
              fill:true,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              

          }]
      },
      options: {
          plugins:{
            legend: {
                display: false //This will do the task
                
             },tooltip:{
                enabled:false,
            },
            
          },
          scales: {
              y: {
                  beginAtZero: true,
                  display:false,
              },
              x: {
                  beginAtZero: true,
                  display:false,
              },
          }
          
      }
  });

  }

  getDataInfo(pager){
    this.pagebtn = Array()
    // var loader = document.getElementById("cover-spin")
    // loader.style.display = "block"
    this.http.getData("lodi-admin/get-lodis.php?limit="+this.limit+"&page="+pager).subscribe(res =>{
       
      this.lodis = res.json().lodis
      console.log(this.lodis)
      this.lodisCount = res.json().lodis_count


      // loader.style.display = "none"

      this.pagebtntmp =  this.lodisCount / this.limit
      for(var i = 1;i < this.pagebtntmp + 1;i++){
        this.pagebtn.push(i)
      }
    })
  }

  navigate($event){
    $event:String;
    this.route.navigate([$event])
  }

  count:any;
  color:any;
  cached(data){


    
    this.count = data;
    const less = 1000;
    const high = 5000
    if(this.count < less){
        this.color = "warning";
    }
    if(this.count > high){
        this.color = "success"
    }


  }


  hide = false;
  Hide(){
    this.hide = !this.hide
    if (this.hide){
        var table_container = $('.table-container');
        $('#hide').text('Show')
        table_container.animate({'height':'500px',},'slow')
        table_container.animate({'height':'0px'},'slow')
        table_container.css({'height':'0px'})
    }
    if(!this.hide){
        $('#hide').text('Hide')
        var table_container = $('.table-container');
        table_container.animate({'height':'0px',},'slow')
        table_container.animate({'height':'500px'},'slow')
        table_container.css({'height':'500px'})
    }
  }

  ViewSwal($event){
    Swal.fire({
        title:$event,
        timer:2000
    })
  }
  jque(){
    // $('.box').click(function(){
    //     Swal.fire({
    //         title:'Charts',
    //         timer:200
    //     })
    // })
  }

}
