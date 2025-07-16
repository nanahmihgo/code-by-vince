import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
// import { HomeComponent } from './home/home.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ProfileComponent } from './profil/profil.component';
// import { commentsComponent } from './comments/comments.component';
// import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    // { path: '', component: homeComponent },
    { path: 'auth', component: AuthComponent },
    // { path: '', component: profileComponent, canActivate: [AuthGuard]  },
];
