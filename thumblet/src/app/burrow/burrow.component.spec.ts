import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurrowComponent } from './burrow.component';

describe('BurrowComponent', () => {
  let component: BurrowComponent;
  let fixture: ComponentFixture<BurrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
