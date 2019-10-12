import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-formatted',
  templateUrl: './text-formatted.component.html',
  styleUrls: ['./text-formatted.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextFormattedComponent {
  @Input() public textAsHtml: string;
}
