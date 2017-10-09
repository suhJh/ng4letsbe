import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { memberList } from './../mocks/memberList';

export interface Member {
  name: string;
  sabun: string;
  dptNm: string;
  itJobYn: boolean;
  bossYn: boolean;
  chrpeYn: boolean;
}

export interface LoginParam {
  sabun: string;
  password: string;
}

@Injectable()
export class MemberService {

  private isLoginSource: BehaviorSubject<Member> = new BehaviorSubject(null);
  isLogin$ = this.isLoginSource.asObservable();

  constructor () {
    this.isLogin$.subscribe(member => console.log('isLogin: ', member));
  }

  goLogin (param: LoginParam): Member {
    const found = memberList.find(member => member.sabun === param.sabun);
    if (found) {
      this.isLoginSource.next(found);
      return found;
    } else {
      return null;
    }
  }

  logout (): void {
    this.isLoginSource.next(null);
  }
}
