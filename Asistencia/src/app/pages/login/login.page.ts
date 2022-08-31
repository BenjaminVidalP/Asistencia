import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menu: MenuController) { 
    this.menu.enable(false);
  }

  ngOnInit() {
  }

}
