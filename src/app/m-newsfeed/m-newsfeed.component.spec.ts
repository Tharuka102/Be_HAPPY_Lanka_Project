import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNewsfeedComponent } from './m-newsfeed.component';

describe('MNewsfeedComponent', () => {
  let component: MNewsfeedComponent;
  let fixture: ComponentFixture<MNewsfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MNewsfeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
