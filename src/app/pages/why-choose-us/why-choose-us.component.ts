import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, CtaBandComponent, RevealDirective],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
})
export class WhyChooseUsComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);
  ngOnInit(): void {
    this.seo.set({ title: 'Why Choose Us', description: 'Six reasons to choose Shriram Infra: quality construction, site safety, on-time delivery, sustainability, engineering expertise, and client partnership.' });
    if (isPlatformBrowser(this.platformId)) document.body.setAttribute('data-page', 'why-us');
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) document.body.removeAttribute('data-page');
  }

  features = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      title: 'Quality Construction',
      description: 'We uphold the highest engineering and workmanship standards on every project — from material selection and structural design through to final finishing. Quality is non-negotiable, regardless of project size.',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      title: 'Site Safety & Compliance',
      description: 'Every site is managed with strict safety protocols — regular safety inspections, PPE enforcement, hazard controls, and adherence to all relevant construction regulations and code requirements.',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      title: 'On-Time Project Delivery',
      description: 'Disciplined planning and milestone-based execution keep our projects on schedule. We use structured project management to anticipate delays and take corrective action before they affect the programme.',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      title: 'Sustainable Building Practices',
      description: 'We integrate sustainable principles — from responsible material sourcing to efficient construction methods — ensuring the infrastructure we build has a minimal environmental footprint and maximum longevity.',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
      title: 'Experienced Engineering Team',
      description: 'Our team brings hands-on expertise across civil engineering, project management, and site execution. We draw on practical experience to navigate the real-world challenges that every infrastructure project presents.',
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      title: 'Client-First Partnership',
      description: 'Every project is a long-term relationship. We communicate transparently, report progress regularly, and treat each client\'s priorities as our own — because your infrastructure success is our success.',
    },
  ];
}
