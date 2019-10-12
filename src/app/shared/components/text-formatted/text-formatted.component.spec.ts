import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TextFormattedComponent } from './text-formatted.component';

describe('TextFormattedComponent', () => {
  let component: TextFormattedComponent;
  let fixture: ComponentFixture<TextFormattedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextFormattedComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextFormattedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
