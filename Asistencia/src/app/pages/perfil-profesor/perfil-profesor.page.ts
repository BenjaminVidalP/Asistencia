import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.page.html',
  styleUrls: ['./perfil-profesor.page.scss'],
})
export class PerfilProfesorPage implements OnInit {
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

}
