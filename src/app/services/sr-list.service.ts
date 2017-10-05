import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


export interface Sr {
  srNo: string;
  title: string;
  content: string;
  category: string;
  timestamp: Date;
}

const srList: Sr[] = [
  { srNo: 'T0001', title: '이것은 테스트용 SR입니다.', content: '어쩌고저꺼고 잰용...', category: 'L01', timestamp: new Date() },
  { srNo: 'T0002', title: '이것은 두번째 테스트용 SR입니다.', content: '카테고리가 안먹네..?', category: 'L02', timestamp: new Date() },
];

@Injectable()
export class SrListService {

  constructor() { }

  addSr (sr: Sr): string {
    const lastSrNo = srList[srList.length - 1].srNo;
    const next = parseInt(lastSrNo.substr(3), 10);
    sr.srNo = 'T' + ''.padStart(4 - next.toString().length, '0') + (next + 1);
    sr.timestamp = new Date();
    srList.push(sr);
    console.log(srList);
    return sr.srNo;
  }

  getSrBySrNo (srNo: string): Observable<Sr> {
    return Observable.of(srList.find(sr => sr.srNo === srNo)).delay(300);
  }

  getSrList (): Observable<Sr[]> {
    return Observable.of(srList).delay(1000);
  }
}


