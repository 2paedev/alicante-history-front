import { Component, Input, OnInit } from '@angular/core';
import { ReadMode } from '@models/index';
import { UserService } from '@services/index';
import { READ_MODE } from '../../constants/global.constants';

@Component({
  selector: 'app-text-popover',
  templateUrl: './text-popover.component.html',
  styleUrls: ['./text-popover.component.scss'],
})
export class TextPopoverComponent implements OnInit {
  @Input() public checkedColorValue: string;
  @Input() public checkedSizeValue: string;

  public READ_MODE = READ_MODE;
  private readMode: ReadMode;

  constructor(private readonly userService: UserService) {}

  public ngOnInit(): void {
    this.setDefaultValues();
  }

  private setDefaultValues(): void {
    if (this.checkedColorValue == null) {
      this.checkedColorValue = this.READ_MODE.DAY;
    }
    if (this.checkedSizeValue == null) {
      this.checkedSizeValue = this.READ_MODE.NORMAL;
    }
  }

  public segmentChanged(ev: any): void {
    const newValue = ev.detail.value;
    this.checkColor(newValue);
    this.checkSize(newValue);
    this.userService.sendUser(this.readMode);
  }

  private checkColor(color: string): void {
    if (color === READ_MODE.DAY || color === READ_MODE.NIGHT) {
      this.readMode = { ...this.readMode, color };
      this.readMode = { ...this.readMode, size: this.checkedSizeValue };
      this.checkedColorValue = color;
    }
  }

  private checkSize(size: string): void {
    if (size === READ_MODE.NORMAL || size === READ_MODE.BIG) {
      this.readMode = { ...this.readMode, size };
      this.readMode = { ...this.readMode, color: this.checkedColorValue };
      this.checkedSizeValue = size;
    }
  }
}
