import { fakeAsync, tick } from '@angular/core/testing';
import { ToastService } from '@services/index';
import {
  setupWithLastFiveErrorInArticles,
  setupWithoutErrorsInArticles,
  setupWithResumeErrorInArticles,
} from '@testing/index';

describe('HomePage', () => {
  it('should create', async (): Promise<void> => {
    const { shallow } = setupWithoutErrorsInArticles();
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render the main article image', async (): Promise<void> => {
    const { shallow } = setupWithoutErrorsInArticles();
    const { find, instance, fixture } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    expect(find('app-article-image')).toHaveFoundOne();
  });

  it('should render the list of avatars', async (): Promise<void> => {
    const { shallow } = setupWithoutErrorsInArticles();
    const { find, instance, fixture } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    expect(find('app-avatars-list')).toHaveFound(2);
  });

  it('should format the last article', async (): Promise<void> => {
    const { shallow } = setupWithoutErrorsInArticles();
    const { instance, fixture } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    expect(instance.lastArticleData.id).toEqual(5);
  });

  it('should format the last five article', async (): Promise<void> => {
    const { shallow } = setupWithoutErrorsInArticles();
    const { instance, fixture } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    expect(instance.lastFiveArticlesData.length).toEqual(5);
  });

  it('should refresh content when call refreshPage method', fakeAsync(async (): Promise<
    void
  > => {
    const { shallow } = setupWithoutErrorsInArticles();
    const { instance, fixture } = await shallow.render();
    instance.ionViewDidEnter();
    // instance.homePageData = [];
    // instance.lastFiveArticlesData = [];
    // eslint-disable-next-line no-empty-function
    instance.refreshPage({ target: { complete: (): void => {} } });
    tick(2000);
    fixture.detectChanges();
    expect(instance.homePageData.length).toEqual(1);
    expect(instance.lastFiveArticlesData.length).toEqual(5);
  }));

  it('should unsubscribe when leave the page', async (): Promise<void> => {
    const { shallow } = setupWithoutErrorsInArticles();
    const { instance } = await shallow.render();
    instance.ionViewDidEnter();
    spyOn(instance.backButtonSubscription, 'unsubscribe').and.callThrough();
    spyOn(instance.lastFiveSubscription, 'unsubscribe').and.callThrough();
    spyOn(instance.resumeSubscription, 'unsubscribe').and.callThrough();
    instance.ionViewDidLeave();
    expect(instance.backButtonSubscription.unsubscribe).toHaveBeenCalled();
    expect(instance.lastFiveSubscription.unsubscribe).toHaveBeenCalled();
    expect(instance.resumeSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('should present toast error when lastFive observable fail', async (): Promise<
    void
  > => {
    const { shallow } = setupWithLastFiveErrorInArticles();
    const { instance, fixture, get } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    const toast = get(ToastService);
    expect(toast.presentToastError).toHaveBeenCalled();
  });

  it('should present toast error when resume observable fail', async (): Promise<
    void
  > => {
    const { shallow } = setupWithResumeErrorInArticles();
    const { instance, fixture, get } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    const toast = get(ToastService);
    expect(toast.presentToastError).toHaveBeenCalled();
  });
});
