import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home'; // Import the new one
import { LatestComponent } from './components/latest/latest';
import { ArticleDetailComponent } from './components/article-detail/article-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Show Home by default
  { path: 'latest', component: LatestComponent },
  { path: 'article/:id', component: ArticleDetailComponent }
];