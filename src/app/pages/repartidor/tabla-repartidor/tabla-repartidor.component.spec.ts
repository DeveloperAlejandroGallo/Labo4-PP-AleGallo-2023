import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRepartidorComponent } from './tabla-repartidor.component';

describe('TablaRepartidorComponent', () => {
  let component: TablaRepartidorComponent;
  let fixture: ComponentFixture<TablaRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
