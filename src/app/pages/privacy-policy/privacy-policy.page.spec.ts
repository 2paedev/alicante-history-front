import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { PrivacyPolicyPageModule } from './privacy-policy.module';
import { PrivacyPolicyPage } from './privacy-policy.page';

const router = {
  navigate: jasmine.createSpy('navigate'),
  events: of({}),
};

describe('PrivacyPolicyPage', () => {
  let shallow: Shallow<PrivacyPolicyPage>;

  beforeEach((): void => {
    shallow = new Shallow(PrivacyPolicyPage, PrivacyPolicyPageModule)
      .provide(Router)
      .mock(Router, router);
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
    expect(contentParagraphs.length).toEqual(4);
    const contentParagraphsLabels = find('.privacy-policy__content ion-label');
    expect(contentParagraphsLabels.length).toEqual(3);
  });

  it('should go to home page when click in button', async (): Promise<void> => {
    const { find } = await shallow.render();
    const goBackButton = find('.privacy-policy__content--go-back ion-button');
    goBackButton.nativeElement.click();
    expect(router.navigate).toHaveBeenCalledWith([ROUTE.HOME]);
  });
});
