import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazousiteComponent } from './kazousite.component';

describe('KazousiteComponent', () => {
  let component: KazousiteComponent;
  let fixture: ComponentFixture<KazousiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazousiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazousiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
