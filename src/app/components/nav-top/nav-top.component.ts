import { Component, OnInit, OnDestroy } from '@angular/core';
import { MemberService, Member } from './../../services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent {

  formModel: FormGroup;

  private loginMember: Observable<Member>;

  constructor (private memberService: MemberService, private router: Router, private fb: FormBuilder) {
    this.loginMember = this.memberService.isLogin$;
    this.formModel = fb.group({
      sabun: fb.control('', Validators.required)
    });
  }

  goLogin (): void {
    if (this.formModel.valid) {
      const result = this.memberService.goLogin({
        sabun: this.formModel.get('sabun').value,
        password: '1234'
      });

      if (result === null) {
        alert('입력하신 사번에 해당하는 사용자가 없습니다.');
      }

      this.formModel.setValue({
        'sabun': ''
      });
    } else {
      alert('사번을 입력해주세요.');
    }
  }

  logout (): void {
    this.memberService.logout();
    this.router.navigate(['/']);
  }

}
