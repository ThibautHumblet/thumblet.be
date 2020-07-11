import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyComponent } from './currently.component';

describe('CurrentlyComponent', () => {
  let component: CurrentlyComponent;
  let fixture: ComponentFixture<CurrentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
