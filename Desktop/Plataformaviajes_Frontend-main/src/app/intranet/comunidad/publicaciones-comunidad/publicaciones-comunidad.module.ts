import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { SeguidoresComponent } from './seguidores/seguidores.component';
import { SeguidosComponent } from './seguidos/seguidos.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicacionesComponent,
    SeguidoresComponent,
    SeguidosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PublicacionesComunidadModule { }
