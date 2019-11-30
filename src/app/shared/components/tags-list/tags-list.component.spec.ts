import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { TagsListComponent } from './tags-list.component';

describe('TagsListComponent', () => {
  let shallow: Shallow<TagsListComponent>;

  beforeEach((): void => {
    shallow = new Shallow(TagsListComponent, SharedModule);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
