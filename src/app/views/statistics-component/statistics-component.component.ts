import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-component',
  templateUrl: './statistics-component.component.html',
  styleUrls: ['./statistics-component.component.css'],
})
export class StatisticsComponentComponent implements OnInit {
  @Input() data = {};

  constructor() {}

  ngOnInit(): void {}
}
