import { Injectable } from '@angular/core';
import { STORAGE_KEY } from './../constants/global.constants';

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
}
