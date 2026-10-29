import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent {
  @Input() headline = '';
  @Input() subtext  = '';
  @Input() ctaPrimaryLabel  = '';
  @Input() ctaPrimaryLink   = '/contact';
  @Input() ctaSecondaryLabel = '';
  @Input() ctaSecondaryLink  = '/about';
  @Input() badge = '';
  @Input() bgImage = '';

  constructor(private sanitizer: DomSanitizer) {}

  get safeBgStyle(): SafeStyle | null {
    if (!this.bgImage) return null;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.bgImage})`);
  }
}
