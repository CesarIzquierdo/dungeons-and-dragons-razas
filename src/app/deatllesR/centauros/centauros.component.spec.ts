import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentaurosComponent } from './centauros.component';

describe('CentaurosComponent', () => {
  let component: CentaurosComponent;
  let fixture: ComponentFixture<CentaurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentaurosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentaurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
