import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntranetComponent } from './intranet/intranet.component';
//import { PerfilComponent } from './intranet/perfil/perfil.component';
//import { MPublicacionesComponent } from './intranet/perfil/m-publicaciones/m-publicaciones.component';
//import { SeguidoresComponent } from './intranet/perfil/seguidores/seguidores.component';
//import { SeguidosComponent } from './intranet/perfil/seguidos/seguidos.component';
//import { ComunidadComponent } from './intranet/comunidad/comunidad.component';
//import { PublicacionesComunidadComponent } from './intranet/comunidad/publicaciones-comunidad/publicaciones-comunidad.component';
import { PublicacionesUsuarioComponent } from './intranet/comunidad/publicaciones-usuario/publicaciones-usuario.component';
import { PublicacionesComponent } from './intranet/comunidad/publicaciones-comunidad/publicaciones/publicaciones.component';

//import { PublicModule } from './public/public.module';
//import { HomeComponent } from './public/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IntranetComponent,
    //PerfilComponent,
    //MPublicacionesComponent,
    //SeguidoresComponent,
    //SeguidosComponent,
    //ComunidadComponent,
    //PublicacionesComunidadComponent,
    PublicacionesUsuarioComponent,
    PublicacionesComponent,
 //   HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

