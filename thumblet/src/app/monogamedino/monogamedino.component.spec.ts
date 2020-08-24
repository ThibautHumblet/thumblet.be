import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonogamedinoComponent } from './monogamedino.component';

describe('MonogamedinoComponent', () => {
  let component: MonogamedinoComponent;
  let fixture: ComponentFixture<MonogamedinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonogamedinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonogamedinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
