import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailComponent } from './article-detail';

describe('ArticleDetail', () => {
  let component: ArticleDetail;
  let fixture: ComponentFixture<ArticleDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
