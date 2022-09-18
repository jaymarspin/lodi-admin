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
<<<<<<< Updated upstream
=======
import { FeedsComponent } from './feeds/feeds.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { UseroptionComponent } from './useroption/useroption.component';
import { SettingsComponent } from './settings/settings.component';
>>>>>>> Stashed changes

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
        redirectTo: 'useroption',
        pathMatch: 'full'
      },
      { path:'useroption',component:UseroptionComponent,children:[
        {
          path:'',
          redirectTo:'lodis',
          pathMatch:'full'
        },
        { path: 'user', component: UsersComponent}, 
        { path: 'lodis', component: LodisComponent},
        { path: 'fan', component: FanComponent},
        { path: 'updates', component: UpdatesComponent},
      ]},
      { path: 'addcert', component: AddcertComponent},
      { path: 'certlisting', component: CertlistingComponent},
      
      { path: 'requests/:id', component: RedeemRequestsComponent},
      { path: 'transactions/:id/:lodiid/:mybank_id/:choosen', component: TransactionsComponent},
<<<<<<< Updated upstream
      { path: 'fan', component: FanComponent},
      { path: 'chats/:id', component: ChatsComponent},
      { path: 'updates', component: UpdatesComponent},
      
  ]},{path: 'client-home', component: ClientHomeComponent,children:[
=======
      { path: 'transactions/:id', component:TransactionsComponent},
      
      { path: 'chats', component: ChatsComponent},
      
      { path: 'feeds' , component:FeedsComponent },
      { path:'charts' ,component:ChartsComponent},
      { path:'settings',component:SettingsComponent}
      
  ]},
      { path: 'chats/:id', component: ChatsComponent},
  
  {path: 'client-home', component: ClientHomeComponent,children:[
>>>>>>> Stashed changes
    {  path: '',
    redirectTo: 'cert',
    pathMatch: 'full'
  },{ path: 'cert/:id', component: CertComponent},
  { path: 'cert', component: CertComponent},
  ]},{ path: 'certview', component: ViewcertComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }