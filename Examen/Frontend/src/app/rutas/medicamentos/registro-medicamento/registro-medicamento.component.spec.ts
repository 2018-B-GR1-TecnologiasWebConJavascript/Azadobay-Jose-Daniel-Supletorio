import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedicamentoComponent } from './registro-medicamento.component';

describe('RegistroMedicamentoComponent', () => {
  let component: RegistroMedicamentoComponent;
  let fixture: ComponentFixture<RegistroMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
