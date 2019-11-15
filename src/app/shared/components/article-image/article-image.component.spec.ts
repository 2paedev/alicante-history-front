import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ArticleImageComponent } from './article-image.component';

describe('ArticleImageComponent', () => {
  let component: ArticleImageComponent;
  let fixture: ComponentFixture<ArticleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleImageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
