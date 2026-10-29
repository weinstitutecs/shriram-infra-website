import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <article class="scard" [class.scard--featured]="featured" appReveal>
      <div class="scard__icon" aria-hidden="true" [innerHTML]="icon"></div>
      <h3 class="scard__title">{{ title }}</h3>
      <p class="scard__desc">{{ description }}</p>
      <ul *ngIf="items?.length" class="scard__items">
        <li *ngFor="let item of items">
          <span class="scard__bullet" aria-hidden="true"></span>{{ item }}
        </li>
      </ul>
    </article>
  `,
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
  @Input() items: string[] = [];
  @Input() featured = false;
}
