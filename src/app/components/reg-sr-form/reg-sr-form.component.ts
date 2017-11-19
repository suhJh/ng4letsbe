import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MemberService } from './../../services/member.service';
import { Observable } from 'rxjs/Observable';
import './../../common/rxjs-operators';

@Component({
  selector: 'app-reg-sr-form',
  templateUrl: './reg-sr-form.component.html',
  styleUrls: ['./reg-sr-form.component.css']
})
export class RegSrFormComponent {

  formModel: FormGroup;
  checkObservable: Observable<boolean>;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private memberService: MemberService) {
    console.log(activatedRoute.snapshot.params);
    this.formModel = fb.group({
      srTitle: fb.control('', [Validators.required])
    });
    this.checkObservable = memberService.isLogin$.map(member => member !== null);
  }

  onSubmit (): void {

  }
}
