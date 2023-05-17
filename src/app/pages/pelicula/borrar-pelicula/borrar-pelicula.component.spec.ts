import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPeliculaComponent } from './borrar-pelicula.component';

describe('BorrarPeliculaComponent', () => {
  let component: BorrarPeliculaComponent;
  let fixture: ComponentFixture<BorrarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
