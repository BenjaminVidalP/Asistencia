import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
subjects;
  constructor(private router: Router) { }

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
