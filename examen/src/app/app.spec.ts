import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the school content in the semantic page layout', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-primer-componente header')).toBeTruthy();
    expect(compiled.querySelector('main h1')?.textContent).toContain('Aprende un idioma');
    expect(compiled.querySelectorAll('.program-card')).toHaveLength(3);
    expect(compiled.querySelector('app-tercer-componente aside')).toBeTruthy();
    expect(compiled.querySelector('app-cuarto-componente footer')).toBeTruthy();
  });
});
