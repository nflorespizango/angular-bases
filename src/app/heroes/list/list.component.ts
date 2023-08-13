import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  constructor() { }

  ngOnInit(): void {
  }

  removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }

}
