import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '@constants/index';
import { Article } from '@models/index';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public setReadMode(color: string, size: string): void {
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

  public getMyList(): Article[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY.MY_LIST));
  }

  public setItemInMyList(item: Article): void {
    const previousList = this.getMyList();
    let newList = [item];
    if (previousList !== null) {
      newList = [...previousList, item];
    }
    localStorage.setItem(STORAGE_KEY.MY_LIST, JSON.stringify(newList));
  }

  public removeItemInMyList(item: Article): void {
    const previousList = this.getMyList();
    let newList = [];
    if (previousList !== null) {
      newList = previousList.filter(data => data.id !== item.id);
    }
    localStorage.setItem(STORAGE_KEY.MY_LIST, JSON.stringify(newList));
  }

  public getMyLikedList(): number[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY.MY_LIKED_LIST));
  }

  public setItemInMyLikedList(itemId: number): void {
    const previousList = this.getMyLikedList();
    let newList = [itemId];
    if (previousList !== null) {
      newList = [...previousList, itemId];
    }
    localStorage.setItem(STORAGE_KEY.MY_LIKED_LIST, JSON.stringify(newList));
  }

  public removeItemInMyLikedList(itemId: number): void {
    const previousList = this.getMyLikedList();
    let newList = [];
    if (previousList !== null) {
      newList = previousList.filter(id => id !== itemId);
    }
    localStorage.setItem(STORAGE_KEY.MY_LIKED_LIST, JSON.stringify(newList));
  }
}
