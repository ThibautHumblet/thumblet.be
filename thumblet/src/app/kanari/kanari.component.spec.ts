import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanariComponent } from './kanari.component';

describe('KanariComponent', () => {
  let component: KanariComponent;
  let fixture: ComponentFixture<KanariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
