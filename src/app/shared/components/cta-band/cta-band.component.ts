import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta-band.component.html',
  styleUrls: ['./cta-band.component.scss'],
})
export class CtaBandComponent {
  @Input() heading = '';
  @Input() subtext  = '';
  @Input() btn1Label = '';
  @Input() btn1Link  = '/contact';
  @Input() btn2Label = '';
  @Input() btn2Link  = '/services';
}
