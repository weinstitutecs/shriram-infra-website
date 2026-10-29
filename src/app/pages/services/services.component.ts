import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroBannerComponent, ServiceCardComponent, CtaBandComponent, RevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);
  ngOnInit(): void {
    this.seo.set({ title: 'Services', description: 'Wastewater treatment, water treatment, sludge treatment, waste treatment, package plants, and energy re-use solutions from Shriram Infra and Tech Services.' });
    if (isPlatformBrowser(this.platformId)) document.body.setAttribute('data-page', 'services');
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) document.body.removeAttribute('data-page');
  }

  services = [
    {
      title: 'Wastewater Treatment',
      description: 'Complete municipal and industrial wastewater treatment plant design, construction, and operation — built to handle diverse effluent streams with reliable, proven technologies.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>',
      items: ['Municipal Wastewater Treatment', 'Industrial Wastewater Treatment', 'Effluent Treatment Plants (ETP)', 'Sewage Treatment Plants (STP)', 'Zero Liquid Discharge (ZLD)', 'Tertiary Treatment & Polishing', 'Operation & Maintenance'],
      details: [
        { q: 'Municipal Wastewater Treatment', a: 'Design and construction of sewage treatment plants for urban bodies, ensuring compliance with pollution control norms.' },
        { q: 'Industrial Wastewater Treatment', a: 'Custom ETP solutions for industries including textile, pharma, food processing, and chemicals.' },
        { q: 'Tertiary Treatment', a: 'Advanced polishing stages to bring treated water to reuse quality standards.' },
        { q: 'O&M Services', a: 'Professional operation and maintenance support post-commissioning to ensure continuous, efficient plant performance.' },
      ],
    },
    {
      title: 'Water Treatment',
      description: 'Sustainable water treatment solutions for drinking water, process water, and water re-use applications — designed for long-term reliability and quality.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14z"/></svg>',
      items: ['Drinking Water Treatment Plants', 'Process Water Treatment', 'Water Re-Use Systems', 'Filtration & Softening', 'Reverse Osmosis (RO) Systems', 'Disinfection Systems', 'Pilot Plant Studies'],
      details: [
        { q: 'Drinking Water Treatment', a: 'End-to-end potable water treatment plants meeting BIS and WHO quality standards.' },
        { q: 'Water Re-Use', a: 'Treated wastewater recycled for irrigation, cooling towers, and process use — reducing freshwater demand.' },
        { q: 'RO & Filtration', a: 'Membrane-based and media filtration systems for removal of dissolved solids, turbidity, and contaminants.' },
        { q: 'Pilot Plant Studies', a: 'Lab and pilot-scale testing to determine optimal treatment process before full-scale plant design.' },
      ],
    },
    {
      title: 'Sludge & Waste Treatment',
      description: 'State-of-the-art sludge management and waste-to-energy solutions that minimise environmental impact and recover value from by-products.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
      items: ['Sludge Thickening & Dewatering', 'Sludge Drying & Digestion', 'Waste-to-Energy Plants', 'Solid Waste Treatment', 'Biogas Recovery', 'Energy Re-Use Systems', 'Package Plants'],
      details: [
        { q: 'Sludge Treatment', a: 'Thickening, dewatering, drying, and digestion systems to reduce sludge volume and enable safe disposal or reuse.' },
        { q: 'Waste to Energy', a: 'Thermal and biological treatment processes that convert organic waste into usable energy — biogas, heat, or electricity.' },
        { q: 'Package Plants', a: 'Compact, pre-engineered package treatment plants for space-constrained sites — quick to deploy and easy to operate.' },
        { q: 'Energy Re-Use', a: 'Sustainable and efficient recovery of energy from treatment processes, reducing operational costs and carbon footprint.' },
      ],
    },
  ];
}
