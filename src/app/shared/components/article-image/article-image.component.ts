import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ArticleResumeData } from '@models/index';
import { StorageService } from '@services/index';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss']
})
export class ArticleImageComponent implements OnInit {
  @Input() public data: ArticleResumeData;
  @Input() public showReadIcon = true;

  public title: string;
  public tags: string[];

  private id: string;

  constructor(private readonly router: Router, private readonly storageService: StorageService) {}

  public ngOnInit(): void {
    this.assembleDataCard();
  }

  public addToMyList(): void {
    this.storageService.setItemInMyList(this.data);
  }

  public goToArticle(): void {
    this.router.navigate([ROUTE.ARTICLE_DETAIL(this.id)]);
  }

  private assembleDataCard(): void {
    this.id = this.data.id;
    this.title = this.data.title;
    this.tags = this.data.tags;
  }
}
