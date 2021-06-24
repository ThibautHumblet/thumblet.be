import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingAndSourcingComponent } from './matching-and-sourcing.component';

describe('MatchingAndSourcingComponent', () => {
  let component: MatchingAndSourcingComponent;
  let fixture: ComponentFixture<MatchingAndSourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingAndSourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingAndSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
