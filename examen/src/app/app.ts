import { Component } from '@angular/core';
import { PrimerComponente } from './components/primer-componente/primer-componente';
import { SegundoComponente } from './components/segundo-componente/segundo-componente';
import { TercerComponente } from './components/tercer-componente/tercer-componente';
import { CuartoComponente } from './components/cuarto-componente/cuarto-componente';

@Component({
  selector: 'app-root',
  imports: [PrimerComponente, SegundoComponente, TercerComponente, CuartoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
