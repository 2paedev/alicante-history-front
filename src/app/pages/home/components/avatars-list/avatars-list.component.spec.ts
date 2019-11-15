import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AvatarsListComponent } from './avatars-list.component';

describe('AvatarsListComponent', () => {
  let component: AvatarsListComponent;
  let fixture: ComponentFixture<AvatarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarsListComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
