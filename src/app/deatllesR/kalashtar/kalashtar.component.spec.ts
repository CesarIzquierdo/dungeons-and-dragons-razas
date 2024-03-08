import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalashtarComponent } from './kalashtar.component';

describe('KalashtarComponent', () => {
  let component: KalashtarComponent;
  let fixture: ComponentFixture<KalashtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalashtarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalashtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
