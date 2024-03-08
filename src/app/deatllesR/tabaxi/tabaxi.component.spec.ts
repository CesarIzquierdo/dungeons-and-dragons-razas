import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabaxiComponent } from './tabaxi.component';

describe('TabaxiComponent', () => {
  let component: TabaxiComponent;
  let fixture: ComponentFixture<TabaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabaxiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
