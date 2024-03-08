import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuanTiComponent } from './yuan-ti.component';

describe('YuanTiComponent', () => {
  let component: YuanTiComponent;
  let fixture: ComponentFixture<YuanTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuanTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YuanTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
