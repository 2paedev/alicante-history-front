import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { FCMService, UserService } from '@services/index';
import { FCM_SERVICE_MOCK, USER_SERVICE_MOCK } from '@testing/index';
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
    .provide(Platform, SplashScreen, StatusBar, FCMService, UserService)
    .mock(Platform, PlatformMock)
    .mock(SplashScreen, SplashScreenMock)
    .mock(StatusBar, StatusBarMock)
    .mock(FCMService, FCM_SERVICE_MOCK)
    .mock(UserService, USER_SERVICE_MOCK);
  return { shallow };
}

describe('AppComponent', () => {
  it('should create', async (): Promise<void> => {
    const { shallow } = appSetup();
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  xit('should call to retrieve FCM token ', async (): Promise<void> => {
    const fcmSpy = jasmine.createSpyObj('FCMService', ['saveToken']);
    const { shallow } = appSetup();
    const { fixture } = await shallow.render();
    await fixture.whenStable();
    expect(fcmSpy.saveToken).toHaveBeenCalled();
  });
});
