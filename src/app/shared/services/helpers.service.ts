import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  public getImageUrl(url: string): string {
    return `${environment.baseUrl}${url}`;
  }
}
