import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-sr-form',
  templateUrl: './reg-sr-form.component.html',
  styleUrls: ['./reg-sr-form.component.css']
})
export class RegSrFormComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot.params);
  }

  ngOnInit() {
  }

}
