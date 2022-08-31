import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
subjects;
  constructor(private router: Router, private menu: MenuController) {
    this.menu.enable(true);
   }

  ngOnInit() {
    this.subjects = [
      {
        img: 'assets/image',
        name: 'English'
      },
      {
        img: 'assets/image',
        name: 'English'
      },
      {
        img: 'assets/image',
        name: 'English'
      },
      {
        img: 'assets/image',
        name: 'English'
      },
    ]
  }

  goToSubject(){

  }
}
