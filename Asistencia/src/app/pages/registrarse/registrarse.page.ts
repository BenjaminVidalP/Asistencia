import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private menu: MenuController) {
    this.menu.enable(false);
   }

  ngOnInit() {
  }

}
