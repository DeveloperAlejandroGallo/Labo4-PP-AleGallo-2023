import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaActorComponent } from './pelicula-actor.component';

describe('PeliculaActorComponent', () => {
  let component: PeliculaActorComponent;
  let fixture: ComponentFixture<PeliculaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
