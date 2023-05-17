import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPeliculaComponent } from './menu-pelicula.component';

describe('MenuPeliculaComponent', () => {
  let component: MenuPeliculaComponent;
  let fixture: ComponentFixture<MenuPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
