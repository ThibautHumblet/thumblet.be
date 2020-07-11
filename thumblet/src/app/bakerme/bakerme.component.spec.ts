import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakermeComponent } from './bakerme.component';

describe('BakermeComponent', () => {
  let component: BakermeComponent;
  let fixture: ComponentFixture<BakermeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakermeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
