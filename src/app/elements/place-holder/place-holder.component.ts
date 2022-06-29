import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css'],
})
export class PlaceHolderComponent implements OnInit {
  @Input() header: boolean = false;
  @Input() lines: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
