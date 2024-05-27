import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from '../detail/detail.component';
import { BodyComponent } from '../home/body/body.component';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'detail',
        component:DetailComponent
      },
      {
        path:'detail/:item.id',
        component:DetailComponent
      }
    ]
  }
]

const components = [LayoutComponent,HeaderComponent,DetailComponent,BodyComponent,NavbarComponent,HomeComponent]

@NgModule({
  declarations: [components, HeaderComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
