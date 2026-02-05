import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-headings',
  templateUrl: './top-headings.component.html',
  styleUrls: ['./top-headings.component.scss'],
})
export class TopHeadingsComponent  implements OnInit {
    
title = input<string>('');
// using the new way Angular Signals - modern angular Input 
// @input()name?:string;

name = input <string>('');


  constructor() { }

  ngOnInit() {}

}
