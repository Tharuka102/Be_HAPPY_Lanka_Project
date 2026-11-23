import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DRequestsComponent } from './d-requests.component';

describe('DRequestsComponent', () => {
  let component: DRequestsComponent;
  let fixture: ComponentFixture<DRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
