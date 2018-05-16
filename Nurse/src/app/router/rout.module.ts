import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthService} from'../services/auth.service';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { NewPatientComponent } from '../new-patient/new-patient.component';
import { PatientListComponent } from'../patient-list/patient-list.component';
import { MainComponent } from '../main/main.component';
import { RegisterComponent } from '../register/register.component';
const routes: Routes = [
    {
        path: 'login',
        component : LoginComponent,
        
    },
    {
        path : 'register',
        component : RegisterComponent,
    },
    {
        path: 'main',
        component : MainComponent,
        children :[
            {
                path: 'home',
                component : HomeComponent,
                //canActivate: [AuthService],
            },
            {
                path:'newP',
                component:NewPatientComponent,
                //canActivate: [AuthService],
            },
            {
                path:'pList',
                component:PatientListComponent,
                //canActivate: [AuthService],
            },

        ],
        canActivate: [AuthService],
    },
 
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
  
  ];
  
  @NgModule({
      imports: [CommonModule, RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
  })

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})

export class Rout {
}
