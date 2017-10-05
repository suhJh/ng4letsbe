import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


export interface CategoryLarge {
  name: string;
  value: string;
}


@Injectable()
export class SrConstService {

  constructor() { }

  getCategoriesLarge (): Observable<CategoryLarge[]> {
    return Observable.of(categoriesLarge).delay(1000);
  }

}


const categoriesLarge: CategoryLarge[] = [
  { name: '상품', value: 'L01' },
  { name: '자동차', value: 'L02' },
  { name: '장기', value: 'L03' },
];
