import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-headings',
  templateUrl: './sub-headings.component.html',
  styleUrls: ['./sub-headings.component.scss'],
})
export class SubHeadingsComponent  implements OnInit {

  subheadings = input<string>('');

  constructor() { }

  ngOnInit() {}

}
