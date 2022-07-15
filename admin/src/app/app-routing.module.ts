import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component'
import { AdminHomeComponent } from './pages/admin-home/admin-home.component'
import { AddcertComponent } from './pages/admin-home/addcert/addcert.component'
import { CertlistingComponent } from './pages/admin-home/certlisting/certlisting.component'
import { CertComponent } from './pages/client-home/cert/cert.component'
import { ClientHomeComponent } from './pages/client-home/client-home.component'
import { CertificateComponent } from './pages/certificate/certificate.component'
import { UsersComponent } from '../app/pages/admin-home/users/users.component'
import { ReportComponent } from '../app/report/report.component'
import {AddmedicalComponent} from '../app/pages/addmedical/addmedical.component' 
import {ViewcertComponent} from '../app/pages/admin-home/viewcert/viewcert.component'
import {LodisComponent} from '../app/pages/admin-home/lodis/lodis.component'
import {FanComponent} from '../app/pages/admin-home/fan/fan.component'
import { ChatsComponent } from '../app/pages/admin-home/chats/chats.component'
import { UpdatesComponent } from '../app/pages/admin-home/updates/updates.component'
import { TransactionsComponent } from './pages/admin-home/transactions/transactions.component';
import { RedeemRequestsComponent } from './pages/admin-home/redeem-requests/redeem-requests.component';
import { TryComponent } from './pages/try/try.component';
import { SpreadsheetComponent } from './pages/admin-home/spreadsheet/spreadsheet.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { AdminChatsComponent } from './otherpages/admin-chats/admin-chats.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'sign',
    pathMatch: 'full'
  },
  {path: "certificate/:id", component: CertificateComponent},
  {path: "report", component: ReportComponent},
  { path: 'sign', component: SigninComponent},
  { path: 'addmedical', component: AddmedicalComponent},
  { path: 'admin-home', component: AdminHomeComponent,children: [
      {  path: '',
        redirectTo: 'spreadsheet',
        pathMatch: 'full'
      },{path:'spreadsheet',component:SpreadsheetComponent,children:[
        { path:'',
          redirectTo:'lodis',
          pathMatch:'full'
        },
        { path: 'addcert', component: AddcertComponent},
      { path: 'certlisting', component: CertlistingComponent},
      { path: 'user', component: UsersComponent}, 
      { path: 'lodis', component: LodisComponent},
      { path: 'requests/:id', component: RedeemRequestsComponent},
      { path: 'transactions/:id/:lodiid/:mybank_id/:choosen', component: TransactionsComponent},
      { path: 'fan', component: FanComponent},
      { path: 'chats/:id', component: ChatsComponent},
      { path: 'updates', component: UpdatesComponent},
      
      
    ]
  },
  {path:'try',component:TryComponent},
  {path:'charts',component:ChartsComponent},
  { path: 'chat', component:AdminChatsComponent},
  { path:'email', component:EmailComponent}    
  ]}
  ,{path: 'client-home', component: ClientHomeComponent,children:[
    {  path: '',
    redirectTo: 'cert',
    pathMatch: 'full'
  },{ path: 'cert/:id', component: CertComponent},
  { path: 'cert', component: CertComponent},
  ]},{ path: 'certview', component: ViewcertComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }