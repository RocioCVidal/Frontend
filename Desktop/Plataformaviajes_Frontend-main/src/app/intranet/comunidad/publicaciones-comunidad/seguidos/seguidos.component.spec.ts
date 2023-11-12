import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguidosComponent } from './seguidos.component';

describe('SeguidosComponent', () => {
  let component: SeguidosComponent;
  let fixture: ComponentFixture<SeguidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguidosComponent]
    });
    fixture = TestBed.createComponent(SeguidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
