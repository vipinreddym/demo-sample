import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuurencyComponent } from './cuurency.component';

describe('CuurencyComponent', () => {
  let component: CuurencyComponent;
  let fixture: ComponentFixture<CuurencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuurencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuurencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
