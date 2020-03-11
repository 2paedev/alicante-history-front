import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_ROUTE } from '@constants/index';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { CustomPost } from '@models/index';
import { ArticlesService, FCMService } from '@services/index';
import { DeviceMock, FCMMock } from '@testing/index';

describe('FCMService', (): void => {
  let httpTestingController: HttpTestingController;
  let service: FCMService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        ArticlesService,
        { provide: FCM, useValue: { ...FCMMock } },
        { provide: Device, useValue: { ...DeviceMock } },
      ],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(FCMService);
  });

  afterEach((): void => {
    httpTestingController.verify();
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  // it('should save token in back', (): void => {
  //   const spy = spyOn(FCM, 'getToken');
  //   const EXPECTED_RESPONSE = {};
  //   const UUID = 'aFakeUUID';
  //   service.saveToken();
  //   expect(spy).toHaveBeenCalled();

  //   const req = httpTestingController.expectOne(
  //     (request): boolean => request.url === `${API_ROUTE.FCM.SAVE_TOKEN}${UUID}`
  //   );
  //   req.flush(EXPECTED_RESPONSE);
  // });

  xit('should remove notification subscription', (): void => {
    const UUID = 'aFakeUUID';
    const EXPECTED_RESPONSE = {
      message: 'A message',
      error: null,
    };
    service
      .removeNotificationSubscription()
      .subscribe((response: CustomPost): void => {
        expect(response).toEqual(EXPECTED_RESPONSE);
      });

    const req = httpTestingController.expectOne((request): boolean => {
      debugger;
      return request.url === API_ROUTE.FCM.TOKEN_DETAIL(UUID);
    });
    req.flush(EXPECTED_RESPONSE);
  });
});
