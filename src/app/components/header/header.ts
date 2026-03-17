import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. The Top Import
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,    // <--- MUST BE TRUE
  imports: [CommonModule, RouterLink], // 2. The Internal Import
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {}