import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../../shared/components/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();
  navLinks = [
    { label: 'Home',       path: '/'          },
    { label: 'About Us',   path: '/about'     },
    { label: 'Services',   path: '/services'  },
    { label: 'Projects',   path: '/projects'  },
    { label: 'Industries', path: '/industries'},
    { label: 'Why Us',     path: '/why-us'    },
    { label: 'Contact',    path: '/contact'   },
  ];
}
