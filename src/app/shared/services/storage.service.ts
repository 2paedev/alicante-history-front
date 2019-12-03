import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '@constants/index';
import { Storage } from '@ionic/storage';
import { Article } from '@models/index';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor(private readonly storage: Storage) {}

  public setReadMode(color: string, size: string): void {
    this.setReadModeColor(color);
    this.setReadModeSize(size);
  }

  public getReadModeColor(): Promise<any> {
    return this.storage.get(STORAGE_KEY.READ_MODE.COLOR);
  }

  private setReadModeColor(value: string): void {
    this.storage.set(STORAGE_KEY.READ_MODE.COLOR, value);
  }

  public getReadModeSize(): Promise<any> {
    return this.storage.get(STORAGE_KEY.READ_MODE.SIZE);
  }

  private setReadModeSize(value: string): void {
    this.storage.set(STORAGE_KEY.READ_MODE.SIZE, value);
  }

  public getIsMailSended(): Promise<any> {
    return this.storage.get(STORAGE_KEY.MAIL.IS_SENDED);
  }

  public setIsMailSended(value: boolean): void {
    this.storage.set(STORAGE_KEY.MAIL.IS_SENDED, JSON.stringify(value));
  }

  public getMyList(): Promise<any> {
    return this.storage.get(STORAGE_KEY.MY_LIST);
  }

  public setItemInMyList(item: Article): void {
    let previousList = [];
    this.getMyList().then(value => {
      previousList = JSON.parse(value);
      let newList = [item];
      if (previousList !== null) {
        newList = [...previousList, item];
      }
      this.storage.set(STORAGE_KEY.MY_LIST, JSON.stringify(newList));
    });
  }

  public removeItemInMyList(item: Article): void {
    let previousList = [];
    this.getMyList().then(value => {
      previousList = JSON.parse(value);
      let newList = [];
      if (previousList !== null) {
        newList = previousList.filter(data => data.id !== item.id);
      }
      this.storage.set(STORAGE_KEY.MY_LIST, JSON.stringify(newList));
    });
  }

  public getMyLikedList(): Promise<any> {
    return this.storage.get(STORAGE_KEY.MY_LIKED_LIST);
  }

  public setItemInMyLikedList(itemId: number): void {
    let previousList = [];
    this.getMyLikedList().then(value => {
      previousList = JSON.parse(value);
      let newList = [itemId];
      if (previousList !== null) {
        newList = [...previousList, itemId];
      }
      this.storage.set(STORAGE_KEY.MY_LIKED_LIST, JSON.stringify(newList));
    });
  }

  public removeItemInMyLikedList(itemId: number): void {
    let previousList = [];
    this.getMyLikedList().then(value => {
      previousList = JSON.parse(value);
      let newList = [];
      if (previousList !== null) {
        newList = previousList.filter(id => id !== itemId);
      }
      this.storage.set(STORAGE_KEY.MY_LIKED_LIST, JSON.stringify(newList));
    });
  }
}
