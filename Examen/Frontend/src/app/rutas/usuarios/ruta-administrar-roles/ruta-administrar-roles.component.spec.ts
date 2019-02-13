import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdministrarRolesComponent } from './ruta-administrar-roles.component';

describe('RutaAdministrarRolesComponent', () => {
  let component: RutaAdministrarRolesComponent;
  let fixture: ComponentFixture<RutaAdministrarRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdministrarRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdministrarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
