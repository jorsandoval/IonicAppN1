import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Mivariable = "Hola Buenas Tardes";
  password = "";
  usuario = "";

  constructor() {}

}
