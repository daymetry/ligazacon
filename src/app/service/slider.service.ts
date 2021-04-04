import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from '../interface/slider';
import { News } from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getList() {
    return this.http.get<any>('assets/slider.json')
      .toPromise()
      .then(res => <Slider[]> res.data)
      .then(data => { return data; });
  }
}
