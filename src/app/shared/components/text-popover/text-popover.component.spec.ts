import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TextPopoverComponent } from './text-popover.component';

describe('TextPopoverComponent', () => {
  let component: TextPopoverComponent;
  let fixture: ComponentFixture<TextPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextPopoverComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
