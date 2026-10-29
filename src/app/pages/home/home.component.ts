import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { IndustryCardComponent } from '../../shared/components/industry-card/industry-card.component';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent, ServiceCardComponent, IndustryCardComponent, CtaBandComponent, RevealDirective, LogoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.set({ title: 'Home', description: 'Shriram Infra and Tech Services LLP — wastewater treatment, water treatment, sludge management, and waste-to-energy solutions for municipalities, industries, and institutions.' });
    if (isPlatformBrowser(this.platformId)) document.body.setAttribute('data-page', 'home');
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) document.body.removeAttribute('data-page');
  }

  services = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14z"/></svg>',
      title: 'Wastewater Treatment',
      description: 'Municipal and industrial wastewater treatment plants — STPs, ETPs, and ZLD systems designed and built for reliable, code-compliant performance.',
      items: ['Municipal STP', 'Industrial ETP', 'Zero Liquid Discharge', 'Tertiary Treatment', 'O&M Services'],
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
      title: 'Water Treatment',
      description: 'Drinking water and process water treatment plants — filtration, RO, disinfection, and water re-use systems for sustainable supply.',
      items: ['Drinking Water Plants', 'RO & Filtration', 'Water Re-Use', 'Disinfection Systems', 'Pilot Plant Studies'],
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
      title: 'Sludge & Waste Treatment',
      description: 'State-of-the-art sludge management, waste-to-energy plants, and compact package plants — turning by-products into recoverable value.',
      items: ['Sludge Dewatering', 'Waste to Energy', 'Biogas Recovery', 'Package Plants', 'Energy Re-Use'],
    },
  ];

  industries = [
    { image: 'assets/industries/municipal.jpg',      name: 'Municipal Sector',           description: 'Sewage treatment plants and drinking water systems for urban local bodies and municipalities.' },
    { image: 'assets/industries/industrial.jpg',     name: 'Industrial & Manufacturing', description: 'Effluent treatment and ZLD solutions for textile, pharma, food processing, and chemical industries.' },
    { image: 'assets/industries/public-sector.jpg',  name: 'Public Sector & Government', description: 'Water and wastewater infrastructure projects for government bodies and public utilities.' },
    { image: 'assets/industries/commercial.jpg',     name: 'Commercial & Institutional', description: 'Package plants and water treatment systems for hotels, hospitals, campuses, and SEZs.' },
  ];

  whyUs = [
    { headline: 'Engineering Excellence', desc: 'Every project is executed with strict adherence to structural integrity, safety codes, and industry best practices.' },
    { headline: 'On-Time Delivery', desc: 'Disciplined project management ensures milestones are met and clients receive their projects on schedule.' },
    { headline: 'Sustainable Practices', desc: 'We integrate environmentally responsible methods and materials to build infrastructure that stands the test of time.' },
  ];
}
