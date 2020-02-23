import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '@constants/index';
import { Storage } from '@ionic/storage';
import { Article } from '@models/index';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public readonly myListSubject = new BehaviorSubject<string>(null);
  public readonly myList$ = this.myListSubject.asObservable();
  public readonly myLikedListSubject = new BehaviorSubject<string>(null);
  public readonly myLikedList$ = this.myLikedListSubject.asObservable();

  constructor(private readonly storage: Storage) {}

  public getStorageValue(key: string): Promise<any> {
    return this.storage.get(key);
  }

  public setStorageValue(key: string, value: boolean | string | any[]): void {
    this.storage.set(key, value);
  }

  public setReadMode(color: string, size: string): void {
    this.setStorageValue(STORAGE_KEY.READ_MODE.COLOR, color);
    this.setStorageValue(STORAGE_KEY.READ_MODE.SIZE, size);
  }

  public addItemInList(item: Article | number, key: string): void {
    let previousList = [];
    this.getStorageValue(key).then(value => {
      previousList = JSON.parse(value);
      let newList = [item];
      if (previousList !== null) {
        newList = [...previousList, item];
      }
      this.setStorageValue(key, JSON.stringify(newList));
      if (key === STORAGE_KEY.MY_LIST) {
        this.updateMyList(JSON.stringify(newList));
      }
      if (key === STORAGE_KEY.MY_LIKED_LIST) {
        this.updateMyLikedList(JSON.stringify(newList));
      }
    });
  }

  public removeItemInMyLikedList(itemId: number, key: string): void {
    let previousList = [];
    this.getStorageValue(key).then(value => {
      previousList = JSON.parse(value);
      let newList = [];

      if (previousList !== null) {
        newList = previousList.filter(data => data !== itemId);
      }
      this.setStorageValue(key, JSON.stringify(newList));
      this.updateMyLikedList(JSON.stringify(newList));
    });
  }

  public removeItemInMyList(itemId: number, key: string): void {
    let previousList = [];
    this.getStorageValue(key).then(value => {
      previousList = JSON.parse(value);
      let newList = [];

      if (previousList !== null) {
        newList = previousList.filter(data => data.id !== itemId);
      }
      this.setStorageValue(key, JSON.stringify(newList));
      this.updateMyList(JSON.stringify(newList));
    });
  }

  public updateMyList(myList?: string): void {
    const currentMyList = this.myListSubject.value;
    this.myListSubject.next(myList || currentMyList);
  }

  public updateMyLikedList(myLikedList?: string): void {
    const currentMyLikedList = this.myLikedListSubject.value;
    this.myLikedListSubject.next(myLikedList || currentMyLikedList);
  }
}
