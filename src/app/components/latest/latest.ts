import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../app'; // Or wherever your data is stored

@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './latest.html',
  styleUrl: './latest.css'
})
export class LatestComponent {
  // .reverse() ensures the newest (last in array) shows up first
  allArticles = [...Article].reverse(); 
}