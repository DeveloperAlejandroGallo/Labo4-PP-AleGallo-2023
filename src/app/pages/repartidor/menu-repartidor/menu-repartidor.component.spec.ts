import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRepartidorComponent } from './menu-repartidor.component';

describe('MenuRepartidorComponent', () => {
  let component: MenuRepartidorComponent;
  let fixture: ComponentFixture<MenuRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
