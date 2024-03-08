import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirbolgsComponent } from './firbolgs.component';

describe('FirbolgsComponent', () => {
  let component: FirbolgsComponent;
  let fixture: ComponentFixture<FirbolgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirbolgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirbolgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
