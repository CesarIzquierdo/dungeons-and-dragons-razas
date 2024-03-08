import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarforgedComponent } from './warforged.component';

describe('WarforgedComponent', () => {
  let component: WarforgedComponent;
  let fixture: ComponentFixture<WarforgedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarforgedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarforgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
