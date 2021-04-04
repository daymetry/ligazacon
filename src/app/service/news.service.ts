import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { News } from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getList() {
    return this.http.get<any>('assets/news.json')
      .toPromise()
      .then(res => <News[]> res.data)
      .then(data => { return data; });
  }

  // tslint:disable-next-line:typedef
  getRecord(id: any) {
    return this.http.get<any>('assets/news.json')
      .toPromise()
      .then(res => <News[]> res.data)
      .then(data => {
        const record = data.filter((item) => item.id === id);
        return record[0] || {}; });
  }

  // tslint:disable-next-line:typedef
  generateId() {
    let text = ``;
    const letters = `ABCDEFGHIJKZabcdefghi23456789`;
    for (let i = 0; i < 5; i++) {
      text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return text;
  }
}
