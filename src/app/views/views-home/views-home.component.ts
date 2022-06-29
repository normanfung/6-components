import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  statistics = {
    faves: 22,
    views: 31200,
    members: 25,
  };
  constructor() {}

  ngOnInit(): void {}
}
