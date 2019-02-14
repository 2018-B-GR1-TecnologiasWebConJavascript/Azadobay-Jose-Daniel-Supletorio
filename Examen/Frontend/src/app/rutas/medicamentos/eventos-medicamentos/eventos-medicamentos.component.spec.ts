import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosMedicamentosComponent } from './eventos-medicamentos.component';

describe('EventosMedicamentosComponent', () => {
  let component: EventosMedicamentosComponent;
  let fixture: ComponentFixture<EventosMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
