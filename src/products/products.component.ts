import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, CommonModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  showFiller = false;
}
