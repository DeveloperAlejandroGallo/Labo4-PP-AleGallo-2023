import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaRepartidorComponent } from './carga-repartidor.component';

describe('CargaRepartidorComponent', () => {
  let component: CargaRepartidorComponent;
  let fixture: ComponentFixture<CargaRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaRepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
