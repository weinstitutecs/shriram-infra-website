import { Component, HostListener, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../../shared/components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  menuOpen = false;
  scrolled  = false;
  navLinks = [
    { label: 'Home',       path: '/'          },
    { label: 'About',      path: '/about'     },
    { label: 'Services',   path: '/services'  },
   // { label: 'Projects',   path: '/projects'  },
    { label: 'Industries', path: '/industries'},
    //{ label: 'Why Us',     path: '/why-us'    },
    { label: 'Contact',    path: '/contact'   },
  ];
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) this.scrolled = window.scrollY > 10;
  }
  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) this.scrolled = window.scrollY > 10;
  }
  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void  { this.menuOpen = false; }
}
