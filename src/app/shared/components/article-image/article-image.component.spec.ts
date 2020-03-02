import { Router } from '@angular/router';
import { ToastService } from '@services/index';
import {
  buildBindWithReadButton,
  searchSetupWithErrorsWhenAddLike,
  searchSetupWithErrorsWhenRemoveLike,
  searchSetupWithoutErrorsInArticles,
} from '@testing/index';

describe('ArticleImageComponent', () => {
  it('should create', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { element } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    expect(element).toBeTruthy();
  });

  it('should render an image', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render({ bind: buildBindWithReadButton() });
    const image = find('.card__image');
    expect(image).toHaveFoundOne();
  });

  it('should render the correct title', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render({ bind: buildBindWithReadButton() });
    const title = find('.card__title');
    expect(title).toHaveFoundOne();
    expect(title.nativeElement.innerText).toEqual('theTitle');
  });

  it('should render the tags component', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render({ bind: buildBindWithReadButton() });
    const tags = find('app-tags-list');
    expect(tags).toHaveFoundOne();
  });

  it('should change star icon when click under him', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, fixture } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    const starButton = find('.card__buttons--star');
    const starIcon = find('.card__buttons--star ion-icon');
    expect(starIcon.nativeElement.getAttribute('name')).toEqual('star-outline');
    starButton.nativeElement.click();
    fixture.detectChanges();
    const otherIcon = find('.card__buttons--star ion-icon');
    expect(otherIcon.nativeElement.getAttribute('name')).toEqual('star');
  });

  it('should change like icon when click under him', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, fixture } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    const likeButton = find('.card__buttons--like');
    const likeIcon = find('.card__buttons--like ion-icon');
    expect(likeIcon.nativeElement.getAttribute('name')).toEqual(
      'heart-dislike'
    );
    likeButton.nativeElement.click();
    fixture.detectChanges();
    const otherIcon = find('.card__buttons--like ion-icon');
    expect(otherIcon.nativeElement.getAttribute('name')).toEqual('heart');
  });

  it('should change like icon when is activated', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, fixture, instance } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    instance.isLiked = true;
    fixture.detectChanges();
    const likeButton = find('.card__buttons--like');
    const likeIcon = find('.card__buttons--like ion-icon');
    expect(likeIcon.nativeElement.getAttribute('name')).toEqual('heart');
    likeButton.nativeElement.click();
    fixture.detectChanges();
    const otherIcon = find('.card__buttons--like ion-icon');
    expect(otherIcon.nativeElement.getAttribute('name')).toEqual(
      'heart-dislike'
    );
  });

  it('should go to article when click in read button', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, fixture, get } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    const router = get(Router);
    const readButton = find('.card__buttons--read');
    readButton.nativeElement.click();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['article/1']);
  });

  it('should not appear the read button', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render({
      bind: { ...buildBindWithReadButton(), showReadIcon: false },
    });
    const readButton = find('.card__buttons--read');
    expect(readButton).toHaveFound(0);
  });

  it('should unsubscribe when destroy the page', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { instance } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    spyOn(instance.myListSubscription, 'unsubscribe').and.callThrough();
    spyOn(instance.myLikedListSubscription, 'unsubscribe').and.callThrough();
    instance.ngOnDestroy();
    expect(instance.myListSubscription.unsubscribe).toHaveBeenCalled();
    expect(instance.myLikedListSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('should present toast error when addLike observable fail', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithErrorsWhenAddLike();
    const { find, fixture, get } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    const likeButton = find('.card__buttons--like');
    likeButton.nativeElement.click();
    fixture.detectChanges();
    const toast = get(ToastService);
    expect(toast.presentToastError).toHaveBeenCalled();
  });

  it('should present toast error when removeLike observable fail', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithErrorsWhenRemoveLike();
    const { find, fixture, get } = await shallow.render({
      bind: buildBindWithReadButton(),
    });
    const likeButton = find('.card__buttons--like');
    likeButton.nativeElement.click();
    fixture.detectChanges();
    const otherButton = find('.card__buttons--like');
    otherButton.nativeElement.click();
    const toast = get(ToastService);
    expect(toast.presentToastError).toHaveBeenCalled();
  });

  // Testear el metodo getColorClass y ver como cambia
});
