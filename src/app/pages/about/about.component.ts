import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent, CtaBandComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);
  ngOnInit(): void {
    this.seo.set({ title: 'About Us', description: 'Learn about Shriram Infra and Tech Services LLP — a dedicated water and wastewater treatment company delivering STPs, ETPs, ZLD systems, and package plants across India.' });
    if (isPlatformBrowser(this.platformId)) document.body.setAttribute('data-page', 'about');
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) document.body.removeAttribute('data-page');
  }
  values = [
    { label: 'Quality',               desc: 'We hold ourselves to the highest engineering and construction standards on every project, regardless of scale.' },
    { label: 'Safety',                desc: 'Site safety is non-negotiable. All works comply with relevant regulations and best-practice safety protocols.' },
    { label: 'Sustainability',        desc: 'We design and build with environmental responsibility, choosing materials and methods that minimise long-term impact.' },
    { label: 'Engineering Excellence',desc: 'Our approach combines technical rigour with practical expertise to deliver infrastructure that performs over time.' },
    { label: 'Client Partnership',    desc: 'We see each project as a long-term relationship, working transparently and collaboratively with every client.' },
  ];
}