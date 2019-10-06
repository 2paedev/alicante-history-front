import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LastArticleComponent } from './last-article.component';

describe('LastArticleComponent', () => {
  let component: LastArticleComponent;
  let fixture: ComponentFixture<LastArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LastArticleComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
