import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string;

  usuario ={
    email: '',
    password:''

  };

  constructor(private menu: MenuController) { 
    this.menu.enable(false);
  }
  
  ngOnInit() {
  }


  onSubmitTemplate(){
    console.log('Form submit')
    console.log(this.usuario);
  }

}
