import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MemberService, Member } from './../services/member.service';

import './../common/rxjs-operators';


@Injectable()
export class LoginGuard implements CanActivate {

    constructor (private memberService: MemberService) {}

    canActivate (): boolean | Observable<boolean> {
        console.log(this.memberService);
        return this.memberService.isLogin$.map(member => member !== null);
    }

}
