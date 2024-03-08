import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianosComponent } from './medianos.component';

describe('MedianosComponent', () => {
  let component: MedianosComponent;
  let fixture: ComponentFixture<MedianosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedianosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedianosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
