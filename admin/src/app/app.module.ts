import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { HeadComponent } from './shared/components/head/head.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AddcertComponent } from './pages/admin-home/addcert/addcert.component';
import { CertlistingComponent } from './pages/admin-home/certlisting/certlisting.component';
import { ClientHomeComponent } from './pages/client-home/client-home.component';
import { CertComponent } from './pages/client-home/cert/cert.component';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { UsersComponent } from './pages/admin-home/users/users.component';
import { ReportComponent } from './report/report.component';
import { AddmedicalComponent } from './pages/addmedical/addmedical.component';
import { SafePipe } from './safe.pipe'; 
import { ViewcertComponent } from './pages/admin-home/viewcert/viewcert.component';
import { LodisComponent } from './pages/admin-home/lodis/lodis.component'; 
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FanComponent } from './pages/admin-home/fan/fan.component';
import { ChatsComponent } from './pages/admin-home/chats/chats.component';
import { UpdatesComponent } from './pages/admin-home/updates/updates.component';
 
// import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminHomeComponent,
    HeadComponent,
    MenuComponent,
    AddcertComponent,
    CertlistingComponent,
    ClientHomeComponent,
    CertComponent,
    CertificateComponent,
    UsersComponent,
    ReportComponent,
    AddmedicalComponent,
    SafePipe, 
    ViewcertComponent,
    LodisComponent,
    FanComponent,
    ChatsComponent,
    UpdatesComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CommonModule,
    PdfJsViewerModule,
    AngularFileUploaderModule,
    // NgxQRCodeModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
