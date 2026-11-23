import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MArticleComponent } from './m-article.component';

describe('MArticleComponent', () => {
  let component: MArticleComponent;
  let fixture: ComponentFixture<MArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
