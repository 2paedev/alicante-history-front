import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/index';

@Component({
  selector: 'app-my-list',
  templateUrl: 'my-list.page.html',
  styleUrls: ['my-list.page.scss']
})
export class MyListPage implements OnInit {
  public myListData: any;

  constructor(private readonly userService: UserService) {}

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.userService.getMyListData().subscribe(
      (response: any) => {
        this.myListData = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
