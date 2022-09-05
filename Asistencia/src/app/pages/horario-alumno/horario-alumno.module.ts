import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HorarioAlumnoPageRoutingModule } from './horario-alumno-routing.module';
import { HorarioAlumnoPage } from './horario-alumno.page';
import { HaLunesComponent } from 'src/app/components/ha-lunes/ha-lunes.component';
import { HaMartesComponent } from 'src/app/components/ha-martes/ha-martes.component';
import { HaMiercolesComponent } from 'src/app/components/ha-miercoles/ha-miercoles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioAlumnoPageRoutingModule
  ],
  declarations: [HorarioAlumnoPage, HaLunesComponent,HaMartesComponent,HaMiercolesComponent]
})
export class HorarioAlumnoPageModule {}
