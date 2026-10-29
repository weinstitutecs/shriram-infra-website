import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Home | Shriram Infra and Tech Services',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Shriram Infra and Tech Services',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent
      ),
    title: 'Services | Shriram Infra and Tech Services',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
    title: 'Projects & Capabilities | Shriram Infra and Tech Services',
  },
  {
    path: 'industries',
    loadComponent: () =>
      import('./pages/industries/industries.component').then(
        (m) => m.IndustriesComponent
      ),
    title: 'Industries We Serve | Shriram Infra and Tech Services',
  },
  {
    path: 'why-us',
    loadComponent: () =>
      import('./pages/why-choose-us/why-choose-us.component').then(
        (m) => m.WhyChooseUsComponent
      ),
    title: 'Why Choose Us | Shriram Infra and Tech Services',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'Contact Us | Shriram Infra and Tech Services',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
