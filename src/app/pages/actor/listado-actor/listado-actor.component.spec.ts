import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActorComponent } from './listado-actor.component';

describe('ListadoActorComponent', () => {
  let component: ListadoActorComponent;
  let fixture: ComponentFixture<ListadoActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
