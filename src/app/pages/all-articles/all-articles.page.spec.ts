import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AllArticlesPage } from './all-articles.page';

describe('AllArticlesPage', () => {
  let component: AllArticlesPage;
  let fixture: ComponentFixture<AllArticlesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllArticlesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
