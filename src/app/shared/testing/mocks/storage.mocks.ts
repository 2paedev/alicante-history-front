import { of } from 'rxjs';
import { buildLastFiveFixture } from '../../fixtures/resume';

export const STORAGE_SERVICE_MOCK = {
  myLikedList$: of('[]'),
  myList$: of('[]'),
  // eslint-disable-next-line no-empty-function
  addItemInList(): void {},
  // eslint-disable-next-line no-empty-function
  removeItemInMyList(): void {},
  // eslint-disable-next-line no-empty-function
  removeItemInMyLikedList(): void {},
  getStorageValue(): Promise<any> {
    return Promise.resolve(buildLastFiveFixture());
  },
  // eslint-disable-next-line no-empty-function
  updateMyList(): void {},
  // eslint-disable-next-line no-empty-function
  updateMyLikedList(): void {},
  // eslint-disable-next-line no-empty-function
  setReadMode(): void {},
  // eslint-disable-next-line no-empty-function
  setStorageValue(): void {},
};
