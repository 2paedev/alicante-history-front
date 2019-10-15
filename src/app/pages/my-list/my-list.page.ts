import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services/index';
import { ArticleResumeData } from './../../shared/models/home-resume';

@Component({
  selector: 'app-my-list',
  templateUrl: 'my-list.page.html',
  styleUrls: ['my-list.page.scss']
})
export class MyListPage implements OnInit {
  public myListData: ArticleResumeData[] = [];

  constructor(private readonly storageService: StorageService) {}

  public ngOnInit(): void {
    this.myListData = this.storageService.getMyList();
  }
}
