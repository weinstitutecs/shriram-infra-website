import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="logo-wrap" aria-label="Shriram Infra and Tech Services">
      <img [style.width.px]="size" src="assets/SHRIRAM_INFRA.png" 
           alt="Shriram Infra and Tech Services" />
    </div>
  `,
  styles: [`.logo-wrap { display:inline-flex; align-items:center; flex-shrink:0; } img { display:block; }`],
})
export class LogoComponent {
  @Input() size: number = 200;
  @Input() darkMode: boolean = false;
}