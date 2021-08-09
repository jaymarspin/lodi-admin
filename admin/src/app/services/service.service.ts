import { Injectable } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  doc:any 
  pdfdata:any
  cert:any
  editcert:any
  viewcert:any


  pdflink:any
  testid:any

 cachedmeddata:any
 editbool:boolean = false
  constructor(private _lightbox: Lightbox) { }
  lightBoxOpen(images, index) {
    this._lightbox.open(images, index);
  }
}
