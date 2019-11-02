import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdititComponent } from './editit.component';

describe('EdititComponent', () => {
  let component: EdititComponent;
  let fixture: ComponentFixture<EdititComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdititComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdititComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
