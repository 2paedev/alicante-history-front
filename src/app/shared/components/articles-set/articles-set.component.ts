import { Component, Input } from '@angular/core';
import { Article } from '@models/index';

@Component({
  selector: 'app-articles-set',
  templateUrl: './articles-set.component.html',
  styleUrls: ['./articles-set.component.scss']
})
export class ArticlesSetComponent {
  @Input() public title: string;
  @Input() public data: Article[];

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  // public loadData(event): void {
  //   setTimeout(() => {
  //     for (let i = 0; i < 25; i++) {
  //       this.dataList.push('Item number ' + this.dataList.length);
  //     }
  //     event.target.complete();

  //     // App logic to determine if all data is loaded
  //     // and disable the infinite scroll
  //     if (this.dataList.length == 1000) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }
}
