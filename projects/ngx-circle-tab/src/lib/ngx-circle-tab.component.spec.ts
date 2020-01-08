import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCircleTabComponent } from './ngx-circle-tab.component';

describe('NgxCircleTabComponent', () => {
  let component: NgxCircleTabComponent;
  let fixture: ComponentFixture<NgxCircleTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCircleTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCircleTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
