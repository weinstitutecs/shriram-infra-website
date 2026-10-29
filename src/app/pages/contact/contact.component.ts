import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeroBannerComponent } from '../../shared/components/hero-banner/hero-banner.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { SeoService } from '../../core/services/seo.service';

// ── DEVELOPER: Replace this URL with your real Google Maps embed src ──────────
// Steps: Google Maps → search your address → Share → Embed a map → copy src URL
const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.529740944761!2d72.95294517425431!3d19.172051348952014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b68550d5c7%3A0x64caed795691bbea!2sWE%20INSTITUTE!5e0!3m2!1sen!2sin!4v1793183964797!5m2!1sen!2sin';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeroBannerComponent, LogoComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);
  private fb = inject(FormBuilder);
  private sanitizer = inject(DomSanitizer);

  submitted = false;
  submitAttempted = false;

  mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED_URL);

  form = this.fb.group({
    fullName:        ['', [Validators.required, Validators.minLength(2)]],
    email:           ['', [Validators.required, Validators.email]],
    phone:           [''],
    company:         [''],
    serviceCategory: ['', Validators.required],
    message:         ['', [Validators.required, Validators.minLength(20)]],
  });

  serviceOptions = [
    'Wastewater Treatment (STP/ETP)',
    'Water Treatment Plant',
    'Sludge & Waste Treatment',
    'Other',
  ];

  ngOnInit(): void {
    this.seo.set({ title: 'Contact Us', description: 'Get in touch with Shriram Infra and Tech Services LLP to discuss your water or wastewater treatment project.' });
    if (isPlatformBrowser(this.platformId)) document.body.setAttribute('data-page', 'contact');
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) document.body.removeAttribute('data-page');
  }

  field(name: string): AbstractControl { return this.form.get(name)!; }
  showError(name: string): boolean {
    const c = this.field(name);
    return (c.dirty || c.touched || this.submitAttempted) && c.invalid;
  }

  onSubmit(): void {
    this.submitAttempted = true;
    if (this.form.invalid) return;
    console.log('[Contact form] Form values (backend not yet connected):', this.form.value);
    this.submitted = true;
    this.form.reset();
    this.submitAttempted = false;
  }
}