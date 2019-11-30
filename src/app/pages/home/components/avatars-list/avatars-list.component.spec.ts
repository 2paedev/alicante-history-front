import { Shallow } from 'shallow-render';
import { HomePageModule } from '../../home.module';
import { AvatarsListComponent } from './avatars-list.component';

function buildBind(): any {
  return {
    title: 'A title',
  };
}

describe('AvatarsListComponent', () => {
  let shallow: Shallow<AvatarsListComponent>;

  beforeEach((): void => {
    shallow = new Shallow(AvatarsListComponent, HomePageModule);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render a title', async (): Promise<void> => {
    const { find } = await shallow.render({ bind: buildBind() });
    const title = find('.avatars-list__name');
    expect(title.nativeElement.innerText).toEqual('A title');
  });

  it('should change button "Show more" when click it', async (): Promise<
    void
  > => {
    const { find, fixture } = await shallow.render();
    let button = find('.avatars-list__content--show');
    expect(button.nativeElement.innerText).toEqual('Ver más');
    button.nativeElement.click();
    fixture.detectChanges();
    button = find('.avatars-list__content--show');
    expect(button.nativeElement.innerText).toEqual('Ver menos');
  });
});
