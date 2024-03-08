import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AarakocraComponent } from './aarakocra.component';

describe('AarakocraComponent', () => {
  let component: AarakocraComponent;
  let fixture: ComponentFixture<AarakocraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AarakocraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AarakocraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
