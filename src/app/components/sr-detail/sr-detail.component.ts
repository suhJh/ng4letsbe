import { Component, OnInit } from '@angular/core';
import { SrConstService, CategoryLarge } from './../../services/sr-const.service';
import { SrListService, Sr } from './../../services/sr-list.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-sr-detail',
  templateUrl: './sr-detail.component.html',
  styleUrls: ['./sr-detail.component.css'],
  providers: [SrListService, SrConstService]
})
export class SrDetailComponent implements OnInit {

  private editable = false;
  private sr: Observable<Sr>;
  categoriesLarge: Observable<CategoryLarge[]>;

  constructor (private route: ActivatedRoute, private srListService: SrListService, private srConstService: SrConstService) {
    this.categoriesLarge = this.srConstService.getCategoriesLarge();

  }

  ngOnInit() {
    const srNo = this.route.snapshot.params['srNo'];
    this.sr = this.srListService.getSrBySrNo(srNo);
  }

}
