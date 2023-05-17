import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuActorComponent } from './menu-actor.component';

describe('MenuActorComponent', () => {
  let component: MenuActorComponent;
  let fixture: ComponentFixture<MenuActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
