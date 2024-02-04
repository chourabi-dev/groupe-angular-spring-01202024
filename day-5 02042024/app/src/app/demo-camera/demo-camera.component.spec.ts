import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCameraComponent } from './demo-camera.component';

describe('DemoCameraComponent', () => {
  let component: DemoCameraComponent;
  let fixture: ComponentFixture<DemoCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
