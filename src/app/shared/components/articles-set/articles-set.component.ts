import { Component, Input } from '@angular/core';
import { ERRORS } from '@constants/index';
import { ArticlePage } from '@models/index';
import { ArticlesService, ToastService } from '@services/index';

@Component({
  selector: 'app-articles-set',
  templateUrl: './articles-set.component.html',
  styleUrls: ['./articles-set.component.scss'],
})
export class ArticlesSetComponent {
  @Input() public title: string;
  @Input() public data: ArticlePage;

  public noDataText = 'Sin artículos';

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly toastService: ToastService
  ) {}

  public loadData(event: any): void {
    const loadEvent = event;
    setTimeout(() => {
      if (this.data.next === null) {
        loadEvent.target.disabled = true;
      } else {
        this.retrieveNextPage();
        loadEvent.target.complete();
      }
    }, 500);
  }

  private retrieveNextPage(): void {
    this.articlesService.getAll(this.data.next).subscribe(
      (response: ArticlePage) => {
        this.data = this.assembleNewPageData(response);
      },
      () => {
        this.toastService.presentToastError(ERRORS.MESSAGES.ALL_ARTICLES);
        throw new Error(ERRORS.MESSAGES.ALL_ARTICLES);
      }
    );
  }

  private assembleNewPageData(newData: ArticlePage): ArticlePage {
    const formattedData = newData;
    formattedData.results = [...this.data.results, ...newData.results];
    return formattedData;
  }
}
