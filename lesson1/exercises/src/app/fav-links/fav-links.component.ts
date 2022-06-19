import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.fanpop.com/clubs/joey-lawrence',
  'https://st-louis-women-march-2022.github.io/js-assignment-4-html-me-something-leerohrer1/',
  'https://www.youtube.com/watch?v=npjF032TDDQ'
];
  constructor() { }

  ngOnInit() {
  }

}
