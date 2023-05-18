import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPeliculaComponent } from './abm-pelicula.component';

describe('AbmPeliculaComponent', () => {
  let component: AbmPeliculaComponent;
  let fixture: ComponentFixture<AbmPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
