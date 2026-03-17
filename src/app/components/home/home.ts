import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- 1. Add this!
import { Article } from '../../app'; // Or wherever your data is stored


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule], // <--- Make sure RouterOutlet is here
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
      articles = Article;
}