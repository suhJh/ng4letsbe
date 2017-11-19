import { Component } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogin: Observable<boolean>;

  constructor (private memberService: MemberService) {
    this.isLogin = this.memberService.isLogin$.map(member => member !== null);
  }

}
