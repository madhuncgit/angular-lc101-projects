import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie Posters';
  image1 = 'https://s3.amazonaws.com/criterion-production/films/64093139506eeea73f973aee07e3f9ec/ZTvHQrwEUsJIjlvtHztiZ6g0UCH85m_large.jpg';
  image2 = 'https://www.thesun.co.uk/wp-content/uploads/2018/06/NINTCHDBPICT000410394941.jpg?w=1980';
  image3 = "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg";
  image4 = "https://c.tenor.com/jUVkDun21CkAAAAC/popcorn-panda.gif";
  constructor() { }

  ngOnInit() {
  }

}