import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SrConstService, CategoryLarge } from './../../services/sr-const.service';
import { Sr, SrListService } from './../../services/sr-list.service';

import { Observable } from 'rxjs/Rx';



@Component({
  selector: 'app-reg-sr-form',
  templateUrl: './reg-sr-form.component.html',
  styleUrls: ['./reg-sr-form.component.css'],
  providers: [SrConstService, SrListService]
})
export class RegSrFormComponent implements OnInit {

  formModel: FormGroup;
  categoriesLarge: Observable<CategoryLarge[]>;

  constructor(
    private fb: FormBuilder,
    private srConstService: SrConstService,
    private srListService: SrListService,
    private router: Router
  ) {
    this.formModel = fb.group({
      title: [''],
      content: [''],
      category: ['-1']
    });
    this.categoriesLarge = srConstService.getCategoriesLarge();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const { title , content, category } = this.formModel.value;
    const srNo = this.srListService.addSr({
      srNo: null,
      title: title as string,
      content: content as string,
      category: category as string,
      timestamp: null
    });
    alert('입력되었습니다.');
    this.router.navigate(['/srDetail', srNo]);
  }

  onChangeCategory({ target }): void {
    console.log(target.value);
  }

}
