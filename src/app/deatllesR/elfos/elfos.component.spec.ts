import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfosComponent } from './elfos.component';

describe('ElfosComponent', () => {
  let component: ElfosComponent;
  let fixture: ComponentFixture<ElfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
