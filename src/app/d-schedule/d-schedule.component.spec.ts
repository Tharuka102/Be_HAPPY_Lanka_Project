import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DScheduleComponent } from './d-schedule.component';

describe('DScheduleComponent', () => {
  let component: DScheduleComponent;
  let fixture: ComponentFixture<DScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
