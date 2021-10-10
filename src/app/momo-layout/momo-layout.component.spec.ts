import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoLayoutComponent } from './momo-layout.component';

describe('MomoLayoutComponent', () => {
  let component: MomoLayoutComponent;
  let fixture: ComponentFixture<MomoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomoLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
