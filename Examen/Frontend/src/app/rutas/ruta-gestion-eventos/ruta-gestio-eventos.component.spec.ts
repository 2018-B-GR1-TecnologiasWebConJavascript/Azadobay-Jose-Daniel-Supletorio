import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestioEventosComponent } from './ruta-gestio-eventos.component';

describe('RutaGestioEventosComponent', () => {
  let component: RutaGestioEventosComponent;
  let fixture: ComponentFixture<RutaGestioEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestioEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestioEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
