import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerComponente } from './tercer-componente';

describe('TercerComponente', () => {
  let component: TercerComponente;
  let fixture: ComponentFixture<TercerComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TercerComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(TercerComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
