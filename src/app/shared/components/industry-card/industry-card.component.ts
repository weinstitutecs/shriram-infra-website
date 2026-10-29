import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industry-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="icard">
      <div class="icard__icon" aria-hidden="true" [innerHTML]="icon"></div>
      <h3 class="icard__name">{{ name }}</h3>
      <p class="icard__desc">{{ description }}</p>
    </article>
  `,
  styleUrls: ['./industry-card.component.scss'],
})
export class IndustryCardComponent {
  @Input() icon = '';
  @Input() name = '';
  @Input() description = '';
}
