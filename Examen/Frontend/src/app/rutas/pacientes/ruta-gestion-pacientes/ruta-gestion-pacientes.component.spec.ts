import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionPacientesComponent } from './ruta-gestion-pacientes.component';

describe('RutaGestionPacientesComponent', () => {
  let component: RutaGestionPacientesComponent;
  let fixture: ComponentFixture<RutaGestionPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
