import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { HttpRequestService } from '../../../services/http-request.service';
import Swal from 'sweetalert2';
import {NgxImageCompressService} from 'ngx-image-compress';
import S3 from 'aws-s3';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  loader: any;

  transactions = Array();
  transactions_count: number;
  id: any;
  lodiid:any
  mybank_id:any;

  page: number;
  limit: number;
  pagebtntmp: any;
  pagebtn: any;

  searchpass: boolean = false;
  search;

  mybanks: any;
  
  chosenAccount: any;

  redemmable:any 
  choosen:any

  imgsrc: any;
  base64data: any;
  file:any;
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;
  constructor(
    private activateRoute: ActivatedRoute,
    public service: ServiceService,
    public http: HttpRequestService,
    private imageCompress: NgxImageCompressService,
  ) {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    
    this.lodiid = this.activateRoute.snapshot.paramMap.get('lodiid');
    this.mybank_id = this.activateRoute.snapshot.paramMap.get('mybank_id');
  

    this.choosen = this.activateRoute.snapshot.paramMap.get('choosen');
    console.log(this.choosen)
    if(this.choosen === 'account no'){
      this.chosenAccount = 'accountno'
    }
    this.page = 1;
    this.limit = 50;
    this.pagebtn = Array();
    this.redemmable = 0
  }

  ngOnInit(): void {
    this.getdata(this.page).then(() =>{
      this.getBanks().then(() =>{
        
      })
    })
   
  }
  refreshed() {}
  searchact() {}


 async getBanks(){
   await this.http.getData(`get-banks.php?id=${this.mybank_id}`).subscribe({
      next: data =>{
         
        this.mybanks = data.json().bankdetails
        this.mybanks = JSON.parse(this.mybanks) 
        console.log(this.mybanks)
      }, error: err =>{
        console.log(err)
      }
    })
  }

  promiseCompressedImg = () => new Promise((resolve, reject) => {
    this.imageCompress.uploadFile().then(({image, orientation}) => {

    // console.warn('Size in bytes was:', this.imageCompress.byteCount(image));

    this.imageCompress.compressFile(image, orientation, 100, 100).then(
      result => {
        resolve(result);
        
        this.base64data = result;
        this.dataUrlToFile(result,"sample.jpg").then(file =>{
          this.file = file
        })
        console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
      }
    );

  });
 });

  

 async getdata(pager) {
    this.pagebtn = Array();
    var loader = document.getElementById('cover-spin');
    loader.style.display = 'block';
    let link = `get-transactions.php?id=${this.id}&limit=${this.limit}&page=${pager}`
    console.log(link)
  await  this.http
      .getData(
        link
      )
      .subscribe((res) => {
        this.redemmable = 0
        this.transactions = res.json().transactions;
        console.log(this.transactions);
        this.transactions_count = res.json().transactions_count;

        loader.style.display = 'none';

        this.pagebtntmp = this.transactions_count / this.limit;
        for (var i = 1; i < this.pagebtntmp + 1; i++) {
          this.pagebtn.push(i);
        }

        this.transactions.forEach(element => {
          console.log(element.accepted)
          if(element.redemmed === false){
            this.redemmable += parseFloat(element.value)
          }
          
          
        });
      });
  }
  redemmedaction(e, id) {
    
    let data = {
      request_id: this.id,
      value: e.detail.value,
      transaction_id: id,
      reciept: this.base64data
    };
    if(id === 0){
      data = {
        request_id: this.id,
        value: 1,
        transaction_id: 0,
        reciept: this.base64data
      };
    }
    var loader = document.getElementById('cover-spin');
    loader.style.display = 'block';

    
    console.log(data)
    this.http.postData('update-redemmed.php', data).subscribe({
      next: (data) => {
        loader.style.display = 'none';
        const response = data.json();
        if (response.message === 'success') {
          this.getdata(this.page);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
            footer: '',
          });
        }
      },
      error: (err) => {
        loader.style.display = 'none';
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'error occures',
          footer: err,
        });
      },
    });
  }

  openimage(){
    let image = new Array({src: this.base64data})
    this.service.lightBoxOpen(image,0);
  }

  async  dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {

    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
}

upload(){
  
 
const config = {
    bucketName: 'myBucket',
    dirName: 'photos', /* optional */
    region: 'eu-west-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
    s3Url: 'https://my-s3-url.com/', /* optional */
}
 
const S3Client = new S3(config);


/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
 
/* This is optional */
const newFileName = Date.now();
 
S3Client
    .uploadFile(this.file, newFileName)
    .then(data => console.log(data))
    .catch(err => console.error(err))
 
  /**
   * {
   *   Response: {
   *     bucket: "your-bucket-name",
   *     key: "photos/image.jpg",
   *     location: "https://your-bucket.s3.amazonaws.com/photos/image.jpg"
   *   }
   * }
   */

}
   
}
