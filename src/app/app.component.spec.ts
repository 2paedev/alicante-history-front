import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import {
  PlatformMock,
  SplashScreenMock,
  StatusBarMock,
} from './shared/testing/mocks/ionic-services.mocks';

function appSetup(): {
  shallow: Shallow<AppComponent>;
} {
  const shallow = new Shallow(AppComponent, AppModule)
    .provide(Platform, SplashScreen, StatusBar)
    .mock(Platform, PlatformMock)
    .mock(SplashScreen, SplashScreenMock)
    .mock(StatusBar, StatusBarMock);
  return { shallow };
}

describe('AppComponent', () => {
  it('should create', async (): Promise<void> => {
    const { shallow } = appSetup();
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
