import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '@constants/index';
import { Device } from '@ionic-native/device/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { CustomPost } from '@models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FCMService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    }),
  };

  public constructor(
    private readonly http: HttpClient,
    private readonly device: Device,
    private readonly fcm: FCM
  ) {}

  public saveToken(): void {
    this.fcm.getToken().then((token: string) => {
      this.saveTokenInBBDD(this.device.uuid, { token }).subscribe();
    });
  }

  private saveTokenInBBDD(
    idDevice: string,
    bodyParams: any
  ): Observable<CustomPost> {
    return this.http.put<any>(
      `${API_ROUTE.FCM.TOKEN(idDevice)}`,
      bodyParams,
      this.httpOptions
    );
  }

  public removeNotificationSubscription(): Observable<CustomPost> {
    return this.http.delete<any>(`${API_ROUTE.FCM.TOKEN(this.device.uuid)}`);
  }
}
