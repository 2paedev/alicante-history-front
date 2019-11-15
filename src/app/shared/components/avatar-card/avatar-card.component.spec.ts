import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AvatarCardComponent } from './avatar-card.component';

describe('AvatarCardComponent', () => {
  let component: AvatarCardComponent;
  let fixture: ComponentFixture<AvatarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
