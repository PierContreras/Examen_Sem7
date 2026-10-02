import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  imports: [],
  templateUrl: './primer-componente.html',
  styleUrl: './primer-componente.css',
})
export class PrimerComponente {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
