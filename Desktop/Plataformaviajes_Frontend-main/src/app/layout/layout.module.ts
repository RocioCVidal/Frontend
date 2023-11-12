
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterGeneralComponent } from './footer-general/footer-general.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarInicioComponent } from './navbar-inicio/navbar-inicio.component';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    FooterGeneralComponent,
    NavbarInicioComponent
  ],

  exports: [
    FooterGeneralComponent,
    NavbarInicioComponent
  ],

  imports: [
    CommonModule,
    RouterLink,
    HttpClientModule,
    //MatMenuModule,
    //MatButtonModule
    
  ]
})
export class LayoutModule { }