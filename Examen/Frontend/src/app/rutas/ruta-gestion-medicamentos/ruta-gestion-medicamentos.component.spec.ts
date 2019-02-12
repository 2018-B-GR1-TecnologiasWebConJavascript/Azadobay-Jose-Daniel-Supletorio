import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionMedicamentosComponent } from './ruta-gestion-medicamentos.component';

describe('RutaGestionMedicamentosComponent', () => {
  let component: RutaGestionMedicamentosComponent;
  let fixture: ComponentFixture<RutaGestionMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
