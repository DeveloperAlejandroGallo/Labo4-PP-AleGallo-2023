import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCardComponent } from './pais-card.component';

describe('PaisCardComponent', () => {
  let component: PaisCardComponent;
  let fixture: ComponentFixture<PaisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
