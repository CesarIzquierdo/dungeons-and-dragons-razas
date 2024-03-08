import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieflingsComponent } from './tieflings.component';

describe('TieflingsComponent', () => {
  let component: TieflingsComponent;
  let fixture: ComponentFixture<TieflingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TieflingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TieflingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
