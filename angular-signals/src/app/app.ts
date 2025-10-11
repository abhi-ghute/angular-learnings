import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsExample } from "./signals-example/signals-example";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-signals');
}
