import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
// IMPORT STAR RATING MODULE
import { StarRatingModule } from 'angular-star-rating';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CommonModule, MatCardModule, StarRatingModule, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  showFiller = false;
  icon = faCoffee;
  // faCoffee = faCoffee;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }

  countStar(star: any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
