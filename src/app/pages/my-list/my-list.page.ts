import { Component, OnInit } from '@angular/core';
import { Article } from '@models/index';
import { StorageService } from '@services/index';

@Component({
  selector: 'app-my-list',
  templateUrl: 'my-list.page.html',
  styleUrls: ['my-list.page.scss'],
})
export class MyListPage implements OnInit {
  public myListData: Article[] = [];

  constructor(private readonly storageService: StorageService) {}

  public ngOnInit(): void {
    this.storageService.getMyList().then(value => {
      this.myListData = JSON.parse(value);
    });
  }
}
