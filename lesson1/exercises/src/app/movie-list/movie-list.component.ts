import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['The Manchurian Candidate', 'Oceans 8','Titanic','Encanto'];
   image1 = "https://c.tenor.com/jUVkDun21CkAAAAC/popcorn-panda.gif";
   constructor() { }

   ngOnInit() {
   }

}
