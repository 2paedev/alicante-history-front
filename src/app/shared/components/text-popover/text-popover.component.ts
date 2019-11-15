import { Component, Input } from '@angular/core';
import { ReadMode } from '@models/index';
import { UserService } from '@services/index';
import { READ_MODE } from '../../constants/global.constants';

@Component({
  selector: 'app-text-popover',
  templateUrl: './text-popover.component.html',
  styleUrls: ['./text-popover.component.scss'],
})
export class TextPopoverComponent {
  @Input() public isCheckedDay: boolean;
  @Input() public isCheckedNormal: boolean;

  public READ_MODE = READ_MODE;
  private readMode: ReadMode;

  constructor(private readonly userService: UserService) {}

  public segmentChanged(ev: any): void {
    const newValue = ev.detail.value;
    this.checkColor(newValue);
    this.checkSize(newValue);
    this.userService.sendUser(this.readMode);
  }

  private checkColor(color: string): void {
    if (color === READ_MODE.DAY || color === READ_MODE.NIGHT) {
      this.readMode = { ...this.readMode, color };
    }
  }

  private checkSize(size: string): void {
    if (size === READ_MODE.NORMAL || size === READ_MODE.BIG) {
      this.readMode = { ...this.readMode, size };
    }
  }
}
