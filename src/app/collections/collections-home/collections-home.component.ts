import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', job: 'Designer', age: 24, employed: 'False' },
    { name: 'Jill', age: 26, job: 'Engineer', employed: 'False' },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: 'True' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'employed', label: 'Has a Job?' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
