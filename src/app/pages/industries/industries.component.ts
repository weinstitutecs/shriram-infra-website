import { RouterModule } from '@angular/router';
import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent, CtaBandComponent, RevealDirective],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss'],
})
export class IndustriesComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.set({ title: 'Industries We Serve', description: 'Shriram Infra delivers water treatment, wastewater, and environmental engineering solutions for municipal, industrial, government, and commercial sectors.' });
    if (isPlatformBrowser(this.platformId)) document.body.setAttribute('data-page', 'industries');
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) document.body.removeAttribute('data-page');
  }

  industries = [
    {
      name: 'Municipal Sector',
      image: 'assets/industries/municipal.jpg',
      description: 'Comprehensive water and wastewater infrastructure for urban local bodies — from sewage treatment plants to drinking water supply systems, built to government norms and pollution control standards.',
      services: ['Sewage Treatment Plants (STP)', 'Drinking Water Treatment Plants', 'Water Distribution Networks', 'Drainage & Sewer Systems'],
    },
    {
      name: 'Industrial & Manufacturing',
      image: 'assets/industries/industrial.jpg',
      description: 'Custom effluent treatment and zero liquid discharge solutions for industries — textile, pharmaceutical, food processing, chemicals, and more — ensuring regulatory compliance and water reuse.',
      services: ['Effluent Treatment Plants (ETP)', 'Zero Liquid Discharge (ZLD)', 'Process Water Treatment', 'Industrial Wastewater Reuse'],
    },
    {
      name: 'Public Sector & Government',
      image: 'assets/industries/public-sector.jpg',
      description: 'Water and wastewater infrastructure projects for government agencies, public utilities, and statutory bodies — delivered in full compliance with procurement norms and technical specifications.',
      services: ['Government Water Supply Projects', 'Public Wastewater Systems', 'Sludge Management Facilities', 'Operation & Maintenance Contracts'],
    },
    {
      name: 'Commercial & Institutional',
      image: 'assets/industries/commercial.jpg',
      description: 'Compact package plants and water treatment systems for hotels, hospitals, educational campuses, SEZs, and commercial complexes — space-saving, easy to operate, and performance-assured.',
      services: ['Package Treatment Plants', 'Greywater Recycling Systems', 'RO & Softening Systems', 'Water Re-Use for Irrigation'],
    },
  ];
}
