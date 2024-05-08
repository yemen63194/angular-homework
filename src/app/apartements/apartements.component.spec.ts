import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartementsComponent } from './apartements.component';

describe('ApartementsComponent', () => {
  let component: ApartementsComponent;
  let fixture: ComponentFixture<ApartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
