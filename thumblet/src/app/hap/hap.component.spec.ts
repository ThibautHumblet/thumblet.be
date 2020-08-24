import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapComponent } from './hap.component';

describe('HapComponent', () => {
  let component: HapComponent;
  let fixture: ComponentFixture<HapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
