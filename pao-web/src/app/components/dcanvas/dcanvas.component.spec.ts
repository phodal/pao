import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcanvasComponent } from './dcanvas.component';

describe('DcanvasComponent', () => {
  let component: DcanvasComponent;
  let fixture: ComponentFixture<DcanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
