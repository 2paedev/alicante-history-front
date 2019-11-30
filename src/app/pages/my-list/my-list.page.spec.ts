import { Article } from '@models/index';
import { StorageService } from '@services/index';
import { Shallow } from 'shallow-render';
import { buildLastFiveFixture } from 'src/app/shared/fixtures/resume';
import { MyListPageModule } from './my-list.module';
import { MyListPage } from './my-list.page';

const STORAGE_SERVICE_MOCK = {
  getMyList(): Article[] {
    return buildLastFiveFixture();
  },
};

describe('MyListPage', () => {
  let shallow: Shallow<MyListPage>;

  beforeEach((): void => {
    shallow = new Shallow(MyListPage, MyListPageModule)
      .provide(StorageService)
      .mock(StorageService, STORAGE_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
