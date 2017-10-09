import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member, MemberService } from './../../services/member.service';

import { memberList } from './../../mocks/memberList';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formModel: FormGroup;
  memberList = memberList;

  constructor (private fb: FormBuilder, private memberService: MemberService, private router: Router) {
    this.formModel = this.fb.group({
      sabun: fb.control('', Validators.required),
      password: fb.control('', [Validators.required, Validators.minLength(4)])
    });
  }

  onClickSabun (sabun: string, password: string) {
    this.formModel.setValue({ sabun, password });
  }

  onSubmit (): void {
    if (!this.formModel.valid) {
      alert('미비된 입력이 존재합니다.');
      return;
    }
    const { sabun, password } = this.formModel.value;
    const found = this.memberService.goLogin({ sabun, password });

    if (found) {
      this.router.navigate(['/']);
    } else {
      alert('사용자가 없습니다.');
    }
  }
}
