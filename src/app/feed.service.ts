import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item } from './item.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) { }

  getFeed(page = 0): Observable<Item[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());

    return this.httpClient.get<Item[]>(`https://api.fashbash.co/api/feed`, { params });
  }
}
