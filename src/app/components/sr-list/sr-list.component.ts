import { Component, OnInit } from '@angular/core';

import { Sr, SrListService } from './../../services/sr-list.service';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-sr-list',
  templateUrl: './sr-list.component.html',
  styleUrls: ['./sr-list.component.css'],
  providers: [SrListService]
})
export class SrListComponent implements OnInit {

  loading = true;
  srList: Observable<Sr[]>;

  constructor(private srListService: SrListService) {
    this.srList = this.srListService.getSrList();
    this.srList.subscribe(() => {}, () => {}, () => { this.loading = false; });
  }

  ngOnInit() {
  }

}
