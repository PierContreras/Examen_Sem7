import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerComponente } from './primer-componente';

describe('PrimerComponente', () => {
  let component: PrimerComponente;
  let fixture: ComponentFixture<PrimerComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimerComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose and update the mobile menu state accessibly', () => {
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    const navigation = fixture.nativeElement.querySelector('nav') as HTMLElement;

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.getAttribute('aria-label')).toBe('Abrir menú de navegación');
    expect(navigation.classList.contains('is-open')).toBe(false);

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-label')).toBe('Cerrar menú de navegación');
    expect(navigation.classList.contains('is-open')).toBe(true);

    navigation.querySelector('a')?.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(navigation.classList.contains('is-open')).toBe(false);
  });
});
