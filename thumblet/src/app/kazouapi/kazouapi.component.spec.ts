import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazouapiComponent } from './kazouapi.component';

describe('KazouapiComponent', () => {
  let component: KazouapiComponent;
  let fixture: ComponentFixture<KazouapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazouapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazouapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
