import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMedicamentoComponent } from './crear-medicamento.component';

describe('CrearMedicamentoComponent', () => {
  let component: CrearMedicamentoComponent;
  let fixture: ComponentFixture<CrearMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
