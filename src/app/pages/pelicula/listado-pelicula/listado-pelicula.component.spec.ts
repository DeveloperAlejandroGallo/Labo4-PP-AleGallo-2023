import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeliculaComponent } from './listado-pelicula.component';

describe('ListadoPeliculaComponent', () => {
  let component: ListadoPeliculaComponent;
  let fixture: ComponentFixture<ListadoPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
