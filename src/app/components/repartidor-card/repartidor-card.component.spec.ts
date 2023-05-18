import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorCardComponent } from './repartidor-card.component';

describe('RepartidorCardComponent', () => {
  let component: RepartidorCardComponent;
  let fixture: ComponentFixture<RepartidorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartidorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartidorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
