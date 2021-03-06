import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing.module';



@NgModule({
  declarations: [
     DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    

  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
