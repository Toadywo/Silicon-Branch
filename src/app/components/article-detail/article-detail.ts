import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../app'; // Your data source
import { CommonModule } from '@angular/common'; // <--- 1. Add this!
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink], // 2. The Internal Import
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css'
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the ID from the URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Find the article that matches that ID
    this.article = Article.find(a => a.id === id);
  }
}