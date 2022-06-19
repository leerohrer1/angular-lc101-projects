import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos!!!';
  image1= 'https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg';
  image2 = 'https://image.shutterstock.com/image-photo/one-young-happy-african-handsome-260nw-1997531804.jpg';
  image3 = 'https://image.shutterstock.com/shutterstock/photos/1432719419/display_1500/stock-photo-philadelphia-pa-usa-june-juneteenth-parade-philadelpiha-at-malcom-x-park-african-1432719419.jpg';

  constructor() { }

  ngOnInit() {
  }

}