import { Component, Input } from "@angular/core";
import { Article, ArticlePage } from "@models/index";
import { ArticlesService } from "@services/index";

@Component({
  selector: "app-articles-set",
  templateUrl: "./articles-set.component.html",
  styleUrls: ["./articles-set.component.scss"]
})
export class ArticlesSetComponent {
  @Input() public title: string;
  @Input() public data: ArticlePage;
  @Input() public results: Article[];

  constructor(private readonly articlesService: ArticlesService) {}

  public loadData(event: any): void {
    setTimeout(() => {
      if (this.data.next === null) {
        event.target.disabled = true;
      } else {
        this.retrieveNextPage();
        event.target.complete();
      }
    }, 500);
  }

  private retrieveNextPage(): void {
    this.articlesService.getAll(this.data.next).subscribe(
      (response: ArticlePage) => {
        this.data = this.assembleNewPageData(response);
      },
      (error: any) => {}
    );
  }

  private assembleNewPageData(newData: ArticlePage): ArticlePage {
    let formattedData = newData;
    formattedData.results = [...this.data.results, ...newData.results];
    this.results = formattedData.results;
    return formattedData;
  }
}
