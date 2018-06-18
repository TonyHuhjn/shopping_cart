import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CONFIG } from './config';

let topitemsUrl = CONFIG.baseUrls.topitems;

export class Topitem {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  category: string;
  price: number;
}

@Injectable()
export class TopitemService {
  constructor(private http: Http) { }

  getTopitems() {
    return this.http
      .get(topitemsUrl)
      .map((response: Response) => <Topitem[]>response.json().data);
  }

  getTopitem(id: number) {
    return this.getTopitems()
      .map(topitems => topitems.find(topitem => topitem.id === id));
  }
}