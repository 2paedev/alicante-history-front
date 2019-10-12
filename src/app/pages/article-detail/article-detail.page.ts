import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextPopoverComponent } from '@components/index';
import { PopoverController } from '@ionic/angular';
import { ArticleResumeData } from '@models/index';
import { ArticlesService } from '@services/index';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.page.html',
  styleUrls: ['article-detail.page.scss']
})
export class ArticleDetailPage implements OnInit {
  public articleData: ArticleResumeData;

  private id: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articlesService: ArticlesService,
    public readonly popoverController: PopoverController
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.id = data.params.id;
      this.getData();
    });
  }

  private getData(): void {
    this.articlesService.getDetail(this.id).subscribe(
      (response: ArticleResumeData) => {
        this.articleData = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  public async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TextPopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
