import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
// IMPORT STAR RATING MODULE
import { StarRatingModule } from 'angular-star-rating';
import { faRupee,faIndianRupee, faDownload, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faCheckSquare
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CommonModule, RouterModule, MatCardModule, StarRatingModule, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  showFiller = false;
  Rupee = faIndianRupee;
  rating = faStar;
  halfRating = faStarHalf;

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }

}
