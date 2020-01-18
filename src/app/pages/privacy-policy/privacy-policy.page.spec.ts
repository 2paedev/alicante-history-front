import { Shallow } from 'shallow-render';
import { PrivacyPolicyPageModule } from './privacy-policy.module';
import { PrivacyPolicyPage } from './privacy-policy.page';

describe('PrivacyPolicyPage', () => {
  let shallow: Shallow<PrivacyPolicyPage>;

  beforeEach((): void => {
    shallow = new Shallow(PrivacyPolicyPage, PrivacyPolicyPageModule);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render a title', async (): Promise<void> => {
    const { find } = await shallow.render();
    const title = find('.privacy-policy__title');
    expect(title.nativeElement.innerText).toEqual('Política de privacidad');
  });

  it('should render the content paragraphs', async (): Promise<void> => {
    const { find } = await shallow.render();
    const contentParagraphs = find('.privacy-policy__content p');
    expect(contentParagraphs.length).toEqual(3);
    const contentParagraphsLabels = find('.privacy-policy__content ion-label');
    expect(contentParagraphsLabels.length).toEqual(3);
  });
});
