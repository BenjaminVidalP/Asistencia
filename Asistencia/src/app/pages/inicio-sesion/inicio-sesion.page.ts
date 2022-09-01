import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

nombre: string;

usuario={
  email:'',
  password:''
};



  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form submit')
    console.log(this.usuario);
  }

}
