import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


  onSubmitTemplate(){
    console.log('Form submit')
  }

}
