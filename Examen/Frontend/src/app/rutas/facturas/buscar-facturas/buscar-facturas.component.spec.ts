import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFacturasComponent } from './buscar-facturas.component';

describe('BuscarFacturasComponent', () => {
  let component: BuscarFacturasComponent;
  let fixture: ComponentFixture<BuscarFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
