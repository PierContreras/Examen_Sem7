import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoComponente } from './cuarto-componente';

describe('CuartoComponente', () => {
  let component: CuartoComponente;
  let fixture: ComponentFixture<CuartoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuartoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(CuartoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
