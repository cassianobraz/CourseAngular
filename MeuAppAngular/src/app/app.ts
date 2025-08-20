import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from "./initial/hello/hello";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Hello ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contador = signal(0);

  addContador() {
    this.contador.update(x => x + 1);
  }
}
