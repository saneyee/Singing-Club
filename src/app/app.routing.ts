import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent }   from './event-detail/event-detail.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'events/:id',
        component: EventDetailComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
