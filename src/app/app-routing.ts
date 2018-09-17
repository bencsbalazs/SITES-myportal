import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog/blog.component';
import { LoginComponent} from './blog/login/login.component';
import { NewPostComponent} from './blog/newpost/newpost.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newpost', component: NewPostComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);

