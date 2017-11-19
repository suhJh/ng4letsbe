import { Component, OnDestroy } from '@angular/core';
import { MemberService, Member } from './../../services/member.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css'],
})
export class NavLeftComponent {

  isLogin: Observable<boolean>;
  isChrpe: Observable<boolean>;

  constructor (private memberService: MemberService) {
    this.isLogin = this.memberService.isLogin$.map(member => member !== null);
    this.isChrpe = this.memberService.isLogin$.map(member => member !== null ? member.chrpeYn === true : false);
  }
}
