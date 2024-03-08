import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasRazasComponent } from './todas-razas.component';

describe('TodasRazasComponent', () => {
  let component: TodasRazasComponent;
  let fixture: ComponentFixture<TodasRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodasRazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodasRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
