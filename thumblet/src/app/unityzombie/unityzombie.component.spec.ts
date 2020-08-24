import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityzombieComponent } from './unityzombie.component';

describe('UnityzombieComponent', () => {
  let component: UnityzombieComponent;
  let fixture: ComponentFixture<UnityzombieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityzombieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityzombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
