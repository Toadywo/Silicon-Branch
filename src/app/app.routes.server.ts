import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'article/:id',
    renderMode: RenderMode.Server // This stops the "prerendering" error
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];