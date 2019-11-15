import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AuthorAvatarComponent } from './author-avatar.component';

describe('AuthorAvatarComponent', () => {
  let component: AuthorAvatarComponent;
  let fixture: ComponentFixture<AuthorAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorAvatarComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
