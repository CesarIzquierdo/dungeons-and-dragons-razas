import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoliathsComponent } from './goliaths.component';

describe('GoliathsComponent', () => {
  let component: GoliathsComponent;
  let fixture: ComponentFixture<GoliathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoliathsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoliathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
