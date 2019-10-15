import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '@constants/index';
import { ArticleResumeData } from '@models/index';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public setReadMode(color: string, size: string) {
    this.setReadModeColor(color);
    this.setReadModeSize(size);
  }

  public getReadModeColor(): string {
    return localStorage.getItem(STORAGE_KEY.READ_MODE.COLOR);
  }

  private setReadModeColor(value: string): void {
    localStorage.setItem(STORAGE_KEY.READ_MODE.COLOR, value);
  }

  public getReadModeSize(): string {
    return localStorage.getItem(STORAGE_KEY.READ_MODE.SIZE);
  }

  private setReadModeSize(value: string): void {
    localStorage.setItem(STORAGE_KEY.READ_MODE.SIZE, value);
  }

  public getIsMailSended(): boolean {
    const key = localStorage.getItem(STORAGE_KEY.MAIL.IS_SENDED);
    if (key) {
      return JSON.parse(key);
    }
    return false;
  }

  public setIsMailSended(value: boolean): void {
    localStorage.setItem(STORAGE_KEY.MAIL.IS_SENDED, JSON.stringify(value));
  }

  public getMyList(): ArticleResumeData[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY.MY_LIST));
  }

  public setItemInMyList(item: ArticleResumeData): void {
    const previousList = this.getMyList();
    let newList = [item];
    if (previousList !== null) {
      newList = [...previousList, item];
    }
    localStorage.setItem(STORAGE_KEY.MY_LIST, JSON.stringify(newList));
  }
}
