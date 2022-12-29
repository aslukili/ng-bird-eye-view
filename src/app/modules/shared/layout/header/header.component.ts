import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;

  capitalText = "THIS IS A CAPITAL TEXT";
  isoDate = "2011-10-05T14:48:00.000Z";
  amount = 99;
  num = 34.54;

  // custom pipes
  birthday = new Date(2001, 8, 15)

  constructor(){

  }
  ngOnInit(): void {
    console.log(this.title);
  }
}
