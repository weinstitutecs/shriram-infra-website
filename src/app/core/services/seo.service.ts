import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  ogImage?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta  = inject(Meta);
  private readonly siteName = 'Shriram Infra and Tech Services LLP';

  set(config: SeoConfig): void {
    const full = `${config.title} | ${this.siteName}`;
    this.title.setTitle(full);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title',       content: full });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image',       content: config.ogImage ?? '/assets/og-image.png' });
    this.meta.updateTag({ property: 'og:type',        content: 'website' });
    this.meta.updateTag({ name: 'twitter:card',       content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title',      content: full });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
  }
}
