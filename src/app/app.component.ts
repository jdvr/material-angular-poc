import { Component } from '@angular/core';
import {Persona} from "./persona";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yo q se';
  persona: Persona = {
    nombre: "",
    apellidos: "",
    edad: 0,
    dni: 0,
    cumpleanos: new Date(),
    colorFavorito:"Verde",
    sexo: "nb",
    notas: "lslsls"
  }

  getCurrentPersona () {
    return JSON.stringify(this.persona)
  }
}
