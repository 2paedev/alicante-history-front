import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services/index';
import { Article } from '../../shared/models/articles';

@Component({
  selector: 'app-my-list',
  templateUrl: 'my-list.page.html',
  styleUrls: ['my-list.page.scss']
})
export class MyListPage implements OnInit {
  public myListData: Article[] = [];

  constructor(private readonly storageService: StorageService) {}

  public ngOnInit(): void {
    this.myListData = this.storageService.getMyList();
  }
}
