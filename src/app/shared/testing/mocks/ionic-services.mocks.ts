/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */

import { NavigationEnd } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

export const FCMMock = {
  getToken: (): Promise<string> => Promise.resolve('aFakeToken'),
};

export const DeviceMock = {
  uuid: 'aFakeUUID',
};

let ops: any;
const modal = {
  data: null,
  present: (): any => {},
  component: {},
  onDidDismiss: (): Promise<any> => {
    return Promise.resolve(modal.data);
  },
};

export const NavControllerMock = {
  navigateForward: (): void => {},
  navigateBack: (): void => {},
  navigateRoot: (): void => {},
  back: (): void => {},
  pop: (): void => {},
};

export const NavParamsMock = {
  get(_: any): any {
    return {
      img: 'aFakeUrl',
    };
  },
};

export const ActivatedRouteMock = {
  snapshot: {
    paramMap: {
      get: (param: any): any => {
        return param;
      },
    },
    parent: {
      params: {
        date: '2019-08-01',
      },
    },
  },
  queryParams: of({}),
  params: of({}),
};

export const ModalControllerMock = {
  create: (options?: any): Promise<any> => {
    modal.component = options;
    return Promise.resolve(modal);
  },

  dismiss: (dataDetail: any): Promise<any> => {
    modal.data = {
      data: dataDetail,
    };
    return Promise.resolve({ data: dataDetail });
  },

  present: (): Promise<any> => {
    return Promise.resolve();
  },

  getTop: (): Promise<any> => {
    return Promise.resolve(modal);
  },
};

export const ActionSheetControllerMock = {
  create(createOps?: any): Promise<any> {
    ops = createOps;
    return Promise.resolve({
      present: (): void => {},
      buttons: createOps.buttons,
    });
  },

  dismiss(): Promise<any> {
    return Promise.resolve();
  },

  present(): Promise<any> {
    return Promise.resolve();
  },

  getTop(): Promise<any> {
    return Promise.resolve({
      present: (): void => {},
      buttons: ops.buttons,
    });
  },
};

export const RouterMock = {
  routerSubject: new Subject<NavigationEnd>(),
  url: '/home',
  get events(): Subject<any> {
    return RouterMock.routerSubject;
  },
  navigate: ([url], router?: any): Promise<boolean> => {
    if (router) {
      // eslint-disable-next-line no-param-reassign
      router.url = url;
    }
    RouterMock.routerSubject.next(new NavigationEnd(null, url, url));
    return Promise.resolve(true);
  },
};

export const SplashScreenMock = {
  hide: (): void => {},
};

export const PlatformMock = {
  ready(): Promise<any> {
    return Promise.resolve();
  },

  is(platform: string): boolean {
    return platform !== 'mobile' && platform !== 'tablet';
  },

  width(): number {
    return 700;
  },
};

export const PlatformMobileMock = {
  is: (platform: string): boolean => platform === 'mobile',
  width(): number {
    return 300;
  },
};

export const FingerPrintAIOMock = {
  isAvailable(): Promise<any> {
    return Promise.resolve();
  },

  show(): Promise<any> {
    return Promise.resolve();
  },
};

const toast = {
  present(): Promise<any> {
    return Promise.resolve();
  },
};

export const ToastControllerMock = {
  create(data: any): Promise<any> {
    return Promise.resolve(toast);
  },

  present(): Promise<any> {
    return Promise.resolve();
  },
};

export const KeyboardMock = {
  onKeyboardWillShow(): Observable<boolean> {
    return of(true);
  },

  onKeyboardWillHide(): Observable<boolean> {
    return of(true);
  },
};

export const ScreenOrientationMock = {
  ORIENTATIONS: {
    PORTRAIT: 0,
    LANDSCAPE: 1,
  },

  lock: (): void => {},
};

export const InAppBrowserMock = {
  create: (): void => {},
};

export const ApplicationRefMock = {
  tick: (): void => {},
};

export const WebViewMock = {
  convertFileSrc(data: any): any {
    return data;
  },
};

export const StatusBarMock = {
  styleDefault: (): void => {},
  styleLightContent: (): void => {},
};

export const AppMinimizeMock = {
  minimize: (): void => {},
};

export const FileMock = {};

export const FileOpenerMock = {};
