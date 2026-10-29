import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { CtaBandComponent } from '../../shared/components/cta-band/cta-band.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SeoService } from '../../core/services/seo.service';

type Category = 'All' | 'Civil Engineering' | 'Construction' | 'Industrial';

interface Project {
  category: Exclude<Category, 'All'>;
  title: string;
  location: string;
  description: string;
  gradFrom: string;
  gradTo: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HeroBannerComponent, CtaBandComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);
  ngOnInit(): void {
    this.seo.set({ title: 'Projects & Capabilities', description: 'Explore infrastructure projects from Shriram Infra — civil engineering, construction, and industrial works.' });
    if (isPlatformBrowser(this.platformId)) document.body.setAttribute('data-page', 'projects');
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) document.body.removeAttribute('data-page');
  }

  filters: Category[] = ['All', 'Civil Engineering', 'Construction', 'Industrial'];
  activeFilter: Category = 'All';

  projects: Project[] = [
    { category: 'Civil Engineering', title: 'Road Infrastructure Development [PLACEHOLDER]', location: '[LOCATION PLACEHOLDER]', description: 'Multi-lane road construction including subbase, drainage, and surfacing works. All details are illustrative — replace with actual project data.', gradFrom: '#102A7A', gradTo: '#1e4d2b' },
    { category: 'Industrial',        title: 'Industrial Warehouse Complex [PLACEHOLDER]',   location: '[LOCATION PLACEHOLDER]', description: 'Pre-engineered steel and RCC warehouse facility with utility installations and compound works. All details are illustrative placeholders.', gradFrom: '#1e4d2b', gradTo: '#7ED957' },
    { category: 'Construction',      title: 'Commercial Building Project [PLACEHOLDER]',    location: '[LOCATION PLACEHOLDER]', description: 'Multi-storey commercial building with structural RCC framework, site drainage, and infrastructure finishing. Illustrative placeholder.', gradFrom: '#0d2368', gradTo: '#102A7A' },
    { category: 'Civil Engineering', title: 'Bridge & Culvert Works [PLACEHOLDER]',         location: '[LOCATION PLACEHOLDER]', description: 'RCC bridge construction over a river crossing including abutments, deck slab, and approach roads. Illustrative placeholder.', gradFrom: '#172033', gradTo: '#1e4d2b' },
    { category: 'Industrial',        title: 'Factory Floor & Utilities [PLACEHOLDER]',      location: '[LOCATION PLACEHOLDER]', description: 'Heavy-duty industrial floor slab, drainage channels, and utility infrastructure for a manufacturing plant. Illustrative placeholder.', gradFrom: '#1e4d2b', gradTo: '#102A7A' },
    { category: 'Construction',      title: 'Institutional Building Works [PLACEHOLDER]',   location: '[LOCATION PLACEHOLDER]', description: 'Structural and civil works for an institutional facility including foundations, columns, beams, and slab work. Illustrative placeholder.', gradFrom: '#102A7A', gradTo: '#5cb83a' },
  ];

  get filtered(): Project[] {
    return this.activeFilter === 'All'
      ? this.projects
      : this.projects.filter((p) => p.category === this.activeFilter);
  }

  setFilter(f: Category): void { this.activeFilter = f; }
}
