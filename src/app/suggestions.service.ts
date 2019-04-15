import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor(private httpClient: HttpClient) { }

  getSuggestions(term: string): Observable<Suggestion> {

    let params = new HttpParams();
    params = params.append('term', term);
    return this.httpClient
      .get<Suggestion>('https://api.fashbash.co/api/suggestions', { params });
  }
}

export interface Suggestion {
  items: Item[];
  users: any;
}


