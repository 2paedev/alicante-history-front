import { Component, OnDestroy } from '@angular/core';
import { Article } from '@models/index';
import { StorageService } from '@services/index';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-my-list',
  templateUrl: 'my-list.page.html',
  styleUrls: ['my-list.page.scss'],
})
export class MyListPage implements OnDestroy {
  public myListData: Article[] = [];

  private myListSubscription: Subscription;

  constructor(private readonly storageService: StorageService) {
    this.myListSubscription = this.storageService.myList$
      .pipe(filter((data: any): boolean => !!data))
      .subscribe((data: any): void => {
        this.myListData = JSON.parse(data);
      });
  }

  public ngOnDestroy(): void {
    this.myListSubscription.unsubscribe();
  }
}
