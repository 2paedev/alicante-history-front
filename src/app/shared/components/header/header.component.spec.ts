import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import {
  ModalControllerMock,
  RouterMock,
} from '../../testing/mocks/ionic-services.mocks';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let shallow: Shallow<HeaderComponent>;

  beforeEach((): void => {
    shallow = new Shallow(HeaderComponent, SharedModule)
      .provide(Router, ModalController)
      .mock(Router, RouterMock)
      .mock(ModalController, ModalControllerMock);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
