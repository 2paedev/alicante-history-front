import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ArticlesSetComponent } from './articles-set.component';

describe('ArticlesSetComponent', () => {
  let component: ArticlesSetComponent;
  let fixture: ComponentFixture<ArticlesSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesSetComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
